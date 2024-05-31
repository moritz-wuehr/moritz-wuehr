import { h } from "@stencil/core";
import { addIconVariantToAllDbLinksRecursive, parseData } from "../../utils/utils";
const getCompDataHtml = (compData) => {
  if (!compData)
    return '';
  return compData
    .map((data) => `<li><db-link href="${data.href}" target="${data.target}" icon-variant="${data.icon ? '32-outline' : false}" icon="${data.icon}" current="${data.ariaCurrent}">${data.label}</db-link></li>`)
    .join('\n');
};
export class DbSidenavi {
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
      addIconVariantToAllDbLinksRecursive(this.host, '32-outline');
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
    return (h("nav", { class: "cmp-sidenavi" }, this.compData && h("ol", { innerHTML: getCompDataHtml(this.compData) }), !this.compData && (h("ol", null, !this.hasItemsWrapper &&
      this._children.map((child, index) => (h("li", { key: `sidenavi-item-${index}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  static get is() { return "db-sidenavi"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-sidenavi.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-sidenavi.css"]
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
          "text": "The data attribute can be used to generate sidenav by data."
        },
        "attribute": "data",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=db-sidenavi.js.map
