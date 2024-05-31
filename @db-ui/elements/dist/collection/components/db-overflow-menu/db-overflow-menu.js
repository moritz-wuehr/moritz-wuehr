import { h } from "@stencil/core";
import { getDefaultLinkData, parseData } from "../../utils/utils";
export class DbOverflowMenu {
  constructor() {
    this.data = undefined;
    this.opposite = undefined;
    this.summary = '';
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
    return (h("details", { class: "cmp-overflow-menu", "data-horizontal-position": this.opposite && 'opposite' }, h("summary", null, this.summary), this.compData && (h("menu", { type: "toolbar", innerHTML: getDefaultLinkData(this.compData) })), !this.compData && (h("menu", { type: "toolbar" }, !this.hasItemsWrapper &&
      this._children.map((child, index) => (h("li", { key: `cmp-overflow-menu-${index}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  static get is() { return "db-overflow-menu"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-overflow-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-overflow-menu.css"]
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
          "text": "The data attribute can be used to generate overflow-menu by data."
        },
        "attribute": "data",
        "reflect": true
      },
      "opposite": {
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
          "text": "The opposite attribute, changes the behaviour: overflow-menu -> right."
        },
        "attribute": "opposite",
        "reflect": true
      },
      "summary": {
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
          "text": "The summary attribute, shows a text for accessibility."
        },
        "attribute": "summary",
        "reflect": true,
        "defaultValue": "''"
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=db-overflow-menu.js.map
