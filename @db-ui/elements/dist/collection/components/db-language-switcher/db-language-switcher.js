/*  eslint-disable @stencil-community/decorators-style */
import { Host, h } from "@stencil/core";
import { parseData } from "../../utils/utils";
const getCompDataHtml = (compData, ariaSelectedIndex) => {
  if (!compData)
    return '';
  return compData
    .map((data, index) => `<li role="option" ${ariaSelectedIndex === index ? 'aria-selected' : ''} ><db-link title="${data.title}"  href="${data.href}">${data.label}</db-link></li>`)
    .join('\n');
};
export class DbLanguageSwitcher {
  constructor() {
    this.ariaSelectedIndex = undefined;
    this.data = undefined;
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
  }
  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
    }
    else {
      this._children = Array.from(this.host.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
        this._children
          .filter((child) => child.tagName.toLowerCase() === 'li')
          .forEach((child, index) => {
          if (index === this.ariaSelectedIndex) {
            child.setAttribute('aria-selected', 'true');
          }
          child.setAttribute('role', 'option');
        });
      }
      else {
        this.host.innerHTML = '';
      }
    }
  }
  render() {
    return (h(Host, null, this.compData && (h("ul", { class: "cmp-language-switcher", innerHTML: getCompDataHtml(this.compData, this.ariaSelectedIndex) })), !this.compData && (h("ul", { class: "cmp-language-switcher" }, !this.hasItemsWrapper &&
      this._children.map((child, index) => (h("li", { key: `cmp-language-switcher-item-${index}`, "aria-current": index === this.ariaSelectedIndex, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  static get is() { return "db-language-switcher"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-language-switcher.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-language-switcher.css"]
    };
  }
  static get properties() {
    return {
      "ariaSelectedIndex": {
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
          "text": "The aria-selected-index shows the link as selected which has the given index."
        },
        "attribute": "aria-selected-index",
        "reflect": true
      },
      "data": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The data attribute can be used to generate linklist by data."
        },
        "attribute": "data",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=db-language-switcher.js.map
