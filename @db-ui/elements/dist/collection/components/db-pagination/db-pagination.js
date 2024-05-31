import { Fragment, h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbPagination {
  constructor() {
    this.ellipsisstart = undefined;
    this.ellipsisend = undefined;
    this.currentpage = 1;
    this.pages = 2;
    this.count = 2;
    this.titleprevious = 'Goto previous page';
    this.titlenext = 'Goto next page';
    this.titlepagination = 'Page Number';
    this.textprevious = 'Previous';
    this.textnext = 'Next';
    this.arialabel = 'Pagination';
    this.ariaid = 'pagination-' + uuid();
  }
  handleChange(event) {
    this.dbChange.emit(event);
  }
  /*
   * Watch for outside changes on relevant attributes
   */
  watchHandler() {
    this.sliceAndSetDefaults();
  }
  /*
   * Sets the initial values on components first load
   */
  componentWillLoad() {
    this.sliceAndSetDefaults();
  }
  sliceAndSetDefaults() {
    const pagesFullOverload = Array.from(Array(this.pages + 1).keys());
    const [, ...pagesFull] = pagesFullOverload;
    this.pagesFull = pagesFull;
  }
  decorateChild(child) {
    child.setAttribute('class', 'elm-link');
    if (child.getAttribute('data-currentpage')) {
      child.setAttribute('aria-current', 'page');
      child.setAttribute('aria-disabled', 'true');
    }
    return h("li", { innerHTML: child.outerHTML });
  }
  paginationButtonFragment({ page, curr, ariaCurrent, ariaDisabled, title, rel, tabindex, disabled, index }) {
    return (h("li", { key: index }, h("button", Object.assign({ class: "elm-link", "data-rel": rel === 'none' ? false : `${rel}`, tabindex: tabindex ? '-1' : false, title: title + ` ${page ? page : ''}`, type: "button" }, ((page === curr || disabled) && ariaCurrent), ((page === curr || disabled) && ariaDisabled), { onClick: (event) => this.handleChange(event) }), page)));
  }
  navElement(children) {
    return (h("nav", { class: "cmp-pagination", role: "navigation", "aria-labelledby": this.ariaid }, h("h2", { class: "elm-headline ", id: this.ariaid }, this.arialabel.charAt(0).toUpperCase() + this.arialabel.slice(1)), h("ol", null, children)));
  }
  slotChildren() {
    const _children = Array.from(this.hostElement.children);
    // Don't render the children provided via slot
    this.hostElement.innerHTML = '';
    const [firstChild, ...withoutFirst] = _children;
    const [lastChild, ...withoutTips] = [...withoutFirst].reverse();
    const tiplessChildren = withoutTips.reverse();
    const currentPage = tiplessChildren.findIndex((child) => child.getAttribute('data-currentpage'));
    const prevPage = (currentPage >= 0
      ? tiplessChildren[currentPage - 1].cloneNode(true)
      : firstChild.cloneNode(true));
    prevPage.setAttribute('rel', 'prev');
    prevPage.setAttribute('tabindex', '-1');
    const nextPage = (currentPage >= 0 && tiplessChildren.length <= currentPage
      ? tiplessChildren[currentPage + 1].cloneNode(true)
      : lastChild.cloneNode(true));
    nextPage.setAttribute('rel', 'next');
    return this.navElement(h(Fragment, null, this.decorateChild(prevPage), this.decorateChild(firstChild), this.ellipsisstart && h("li", null, "\u2026"), tiplessChildren.map(this.decorateChild), this.ellipsisend && h("li", null, "\u2026"), this.decorateChild(lastChild), this.decorateChild(nextPage)));
  }
  goToPreviousPage() {
    return this.paginationButtonFragment({
      page: this.currentpage === 1 ? this.currentpage : this.currentpage - 1,
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'prev',
      tabindex: true,
      disabled: this.currentpage === 1,
      index: 'A'
    });
  }
  goToNextPage() {
    return this.paginationButtonFragment({
      page: this.currentpage === this.pages + 1
        ? this.currentpage
        : this.currentpage + 1,
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlenext,
      rel: 'next',
      tabindex: true,
      disabled: this.currentpage === this.pages ? true : false,
      index: 'E'
    });
  }
  goToFirstPage() {
    return this.paginationButtonFragment({
      page: this.pagesFull[0],
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'none',
      tabindex: false,
      disabled: false,
      index: 'B'
    });
  }
  goToLastPage() {
    return this.paginationButtonFragment({
      page: this.pagesFull.slice(-1),
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'none',
      tabindex: false,
      disabled: this.currentpage === this.pages,
      index: 'C'
    });
  }
  showMiddlePage(num) {
    return this.paginationButtonFragment({
      page: num,
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'none',
      tabindex: false,
      disabled: false,
      index: num
    });
  }
  showEllipsis(place) {
    if (this.pagesFull.length < 8) {
      return null;
    }
    if (this.currentpage < 4 && place === 'front') {
      return null;
    }
    if (this.currentpage > this.pagesFull.length - 5 && place === 'back') {
      return null;
    }
    return h("li", { key: place }, "\u2026");
  }
  sliceCenterPages() {
    // Decide how to cut the pages for the middle of the pagination
    if (this.pagesFull.length < 8) {
      return this.pagesFull.slice(1, -1);
    }
    const localCount = this.currentpage <= 3 || this.currentpage >= this.pagesFull.length - 3
      ? this.count + 1
      : this.count;
    if (this.currentpage + this.count >= this.pagesFull.length) {
      return this.pagesFull.slice(-localCount - 1, -1);
    }
    if (this.pagesFull.length - 2 <= localCount) {
      return this.pagesFull.slice(1, 1 + this.pagesFull.length - 2);
    }
    if (this.pagesFull.length - 2 > localCount && this.currentpage <= 3) {
      return this.pagesFull.slice(1, 1 + localCount);
    }
    if (this.pagesFull.length - 2 > this.count &&
      this.currentpage > 3 &&
      this.currentpage + this.count < this.pagesFull.length) {
      const finalSlice = this.pagesFull.slice(this.currentpage - 1, this.currentpage + localCount);
      const isAtTheEnd = finalSlice.includes(this.pagesFull.length - 1);
      return isAtTheEnd ? finalSlice : finalSlice.slice(0, -1);
    }
    return [];
  }
  centerPages() {
    return this.sliceCenterPages().map((num) => this.showMiddlePage(num));
  }
  render() {
    const _children = Array.from(this.hostElement.children);
    const hasChildren = _children.find((child) => child.tagName.toLowerCase() === 'a');
    if (hasChildren) {
      return this.slotChildren();
    }
    return this.navElement(h(Fragment, null, this.goToPreviousPage(), this.goToFirstPage(), this.showEllipsis('front'), this.pagesFull.length >= 3 ? this.centerPages() : null, this.showEllipsis('back'), this.goToLastPage(), this.goToNextPage()));
  }
  static get is() { return "db-pagination"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-pagination.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-pagination.css"]
    };
  }
  static get properties() {
    return {
      "ellipsisstart": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The ellipsisstart attribute only needs to be passed when working with slots.\nShould to be set to true if an ellipsis needs to be shown at the start of\nthe pagination."
        },
        "attribute": "ellipsisstart",
        "reflect": true
      },
      "ellipsisend": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The ellipsisend attribute only needs to be passed when working with slots.\nShould to be set to true if an ellipsis needs to be shown at the end of\nthe pagination."
        },
        "attribute": "ellipsisend",
        "reflect": true
      },
      "currentpage": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The currentpage attribute is a obligatory number attribute and indicates which\npage number is highlighted in the pagination."
        },
        "attribute": "currentpage",
        "reflect": true,
        "defaultValue": "1"
      },
      "pages": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The pages attribute is a obligatory number attribute and indicates how many\npages the pagination knows about."
        },
        "attribute": "pages",
        "reflect": true,
        "defaultValue": "2"
      },
      "count": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The count attribute is a number attribute and defines the number of pages\ndisplayed apart from the first and last page (except if currentpage is the\nfirst or last page, then these pages are included in the count)."
        },
        "attribute": "count",
        "reflect": true,
        "defaultValue": "2"
      },
      "titleprevious": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The titleprevious attribute is a string attribute and defines the title of\nthe left arrow in the pagination."
        },
        "attribute": "titleprevious",
        "reflect": true,
        "defaultValue": "'Goto previous page'"
      },
      "titlenext": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The titlenext attribute is a string attribute and defines the title of\nthe right arrow in the pagination."
        },
        "attribute": "titlenext",
        "reflect": true,
        "defaultValue": "'Goto next page'"
      },
      "titlepagination": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The titlepagination attribute is a string attribute and defines the title of\neach page number (except first and last) displayed in the pagination."
        },
        "attribute": "titlepagination",
        "reflect": true,
        "defaultValue": "'Page Number'"
      },
      "textprevious": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The textprevious attribute is a string attribute and defines the text\ncontent of the left arrow in the pagination."
        },
        "attribute": "textprevious",
        "reflect": true,
        "defaultValue": "'Previous'"
      },
      "textnext": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The textnext attribute is a string attribute and defines the text\ncontent of the right arrow in the pagination."
        },
        "attribute": "textnext",
        "reflect": true,
        "defaultValue": "'Next'"
      },
      "arialabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The arialabel attribute is a string attribute and defines the text\ncontent of the aria-label in the pagination."
        },
        "attribute": "arialabel",
        "reflect": true,
        "defaultValue": "'Pagination'"
      },
      "ariaid": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Optional id for the caption aria label - otherwise random id will be set"
        },
        "attribute": "ariaid",
        "reflect": false,
        "defaultValue": "'pagination-' + uuid()"
      }
    };
  }
  static get events() {
    return [{
        "method": "dbChange",
        "name": "dbChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Mapping for default change Event"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "pages",
        "methodName": "watchHandler"
      }, {
        "propName": "currentpage",
        "methodName": "watchHandler"
      }, {
        "propName": "count",
        "methodName": "watchHandler"
      }];
  }
}
//# sourceMappingURL=db-pagination.js.map
