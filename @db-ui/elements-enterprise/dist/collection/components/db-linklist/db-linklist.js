import { h, Host } from "@stencil/core";
import { getDefaultLinkData, parseData } from "../../utils/utils";
export class DbLinklist {
  constructor() {
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
      }
      else {
        this.host.innerHTML = '';
      }
    }
  }
  render() {
    return (h(Host, null, this.compData && (h("ul", { class: "cmp-link-list", innerHTML: getDefaultLinkData(this.compData) })), !this.compData && (h("ul", { class: "cmp-link-list" }, !this.hasItemsWrapper &&
      this._children.map((child, index) => (h("li", { key: `cmp-link-list-item-${index}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  static get is() { return "db-linklist"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-linklist.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-linklist.css"]
    };
  }
  static get properties() {
    return {
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
//# sourceMappingURL=db-linklist.js.map
