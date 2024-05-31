import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-8b4f8b96.js';
import { u as uuid } from './utils-8fa1298c.js';

const dbPaginationCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:\"DB Screen Sans\", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-pagination{color:#282d37;font-size:0.875rem;user-select:none}.cmp-pagination>ol{display:flex}.cmp-pagination .elm-headline{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-pagination li,.cmp-pagination .elm-link{align-items:center;display:inline-flex;justify-content:center}.cmp-pagination li{height:2.25rem;width:2.25rem}.cmp-pagination .elm-link{color:inherit;height:100%;text-decoration:none;width:100%}.cmp-pagination .elm-link[rel=prev],.cmp-pagination .elm-link[rel=next]{padding:0;vertical-align:bottom}.cmp-pagination .elm-link[rel=prev]::before{margin-left:0.6875rem}.cmp-pagination .elm-link[rel=next]::before{margin-right:0.6875rem}.cmp-pagination .elm-link[rel=prev]{--icon-glyph-before:\"<\";font-size:0}.cmp-pagination .elm-link[rel=prev]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-pagination .elm-link[rel=prev]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-pagination .elm-link[rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=prev]::before{content:none}}.cmp-pagination .elm-link[rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[rel=next]{--icon-glyph-before:\">\";font-size:0}.cmp-pagination .elm-link[rel=next]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-pagination .elm-link[rel=next]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-pagination .elm-link[rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=next]::before{content:none}}.cmp-pagination .elm-link[rel=next]::before{--icon-margin-after:0}.cmp-pagination .elm-link[aria-current=page]{font-weight:700}.elm-link{border-radius:0.25rem;display:inline-block;text-underline-offset:0.1875rem;text-underline-position:under}@supports (text-underline-offset: 3px){.elm-link{text-underline-position:auto}}.elm-link:active{color:initial}.elm-link[aria-disabled=true]{opacity:0.4;pointer-events:none}.elm-link[aria-disabled=true]::before{color:initial}.elm-link[data-size=small]:not(.is-icon-text-replace){font-size:0.875rem}.elm-link[rel][data-size=small]::before,.elm-link[data-icon][data-size=small]::before,.elm-link[data-icon-before][data-size=small]::before{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;--icon-font-size:1.25rem}.elm-link[data-icon-after][data-size=small]::after::after{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;--icon-font-size:1.25rem}.elm-link[rel=configuration]{--icon-glyph-before:\"⚙\"}.elm-link[rel=configuration]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.elm-link[rel=configuration]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.elm-link[rel=configuration]::before{content:none}}@media speech{.elm-link[rel=configuration]::before{content:none}}.elm-link[rel=messages]{--icon-glyph-before:\"󡈶\"}.elm-link[rel=messages]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.elm-link[rel=messages]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.elm-link[rel=messages]::before{content:none}}@media speech{.elm-link[rel=messages]::before{content:none}}.elm-link[rel=account]{--icon-glyph-before:\"󡈡\"}.elm-link[rel=account]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.elm-link[rel=account]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.elm-link[rel=account]::before{content:none}}@media speech{.elm-link[rel=account]::before{content:none}}.elm-link[rel=configuration]::before,.elm-link[rel=messages]::before,.elm-link[rel=account]::before{display:inline-block}.cmp-pagination button{border:none;font-size:0.875rem;background-color:inherit;cursor:pointer}.cmp-pagination .elm-link[data-rel=prev]{--icon-glyph-before:\"<\";font-size:0}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-pagination .elm-link[data-rel=prev]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[data-rel=next]{--icon-glyph-before:\">\";font-size:0}.cmp-pagination .elm-link[data-rel=next]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-pagination .elm-link[data-rel=next]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}.cmp-pagination .elm-link[data-rel=next]::before{--icon-margin-after:0}.elm-link[aria-disabled=true][aria-current=page]{opacity:1}";

const DbPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbChange = createEvent(this, "dbChange", 7);
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
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "pages": ["watchHandler"],
    "currentpage": ["watchHandler"],
    "count": ["watchHandler"]
  }; }
};
DbPagination.style = dbPaginationCss;

export { DbPagination as db_pagination };

//# sourceMappingURL=db-pagination.entry.js.map