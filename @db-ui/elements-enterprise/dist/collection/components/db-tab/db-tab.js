import { Host, h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbTab {
  constructor() {
    this.active = undefined;
    this.label = undefined;
    this.name = undefined;
    this.id = uuid();
  }
  render() {
    return (h(Host, { class: "cmp-db-tab" }, h("input", { type: "radio", name: this.name, id: this.id, checked: this.active }), h("label", { htmlFor: this.id, role: "tab" }, this.label), h("section", { id: `content-${this.id}`, role: "tabpanel" }, h("slot", null))));
  }
  static get is() { return "db-tab"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-tab.css"]
    };
  }
  static get properties() {
    return {
      "active": {
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
          "text": "If the tab is checked/active."
        },
        "attribute": "active",
        "reflect": true
      },
      "label": {
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
          "text": "The label of the tab, shown in the tab-bar."
        },
        "attribute": "label",
        "reflect": true
      },
      "name": {
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
          "text": "The name of the tab bar, is required for grouping multiple tabs together. Otherwise content won't switch by clicking the tabs."
        },
        "attribute": "name",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=db-tab.js.map
