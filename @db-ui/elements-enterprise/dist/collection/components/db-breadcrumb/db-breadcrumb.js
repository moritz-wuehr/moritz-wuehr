import { h } from "@stencil/core";
import { parseData } from "../../utils/utils";
const getCompDataHtml = (compData) => {
  if (!compData)
    return '';
  return compData
    .map((data) => `<li><db-link href="${data.href}" target="${data.target}">${data.label}</db-link></li>`)
    .join('\n');
};
export class DbBreadcrumb {
  constructor() {
    this.data = undefined;
    this.arialabel = undefined;
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
    return (h("nav", { class: "cmp-breadcrumb", "aria-label": this.arialabel }, this.compData && h("ol", { innerHTML: getCompDataHtml(this.compData) }), !this.compData && (h("ol", null, !this.hasItemsWrapper &&
      this._children.map((child, index) => (h("li", { key: `cmp-breadcrumb-item-${index}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  static get is() { return "db-breadcrumb"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-breadcrumb.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-breadcrumb.css"]
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
          "text": "The data attribute can be used to generate breadcrumb by data."
        },
        "attribute": "data",
        "reflect": true
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
          "text": "an optional [`aria-label`-attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)"
        },
        "attribute": "arialabel",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=db-breadcrumb.js.map
