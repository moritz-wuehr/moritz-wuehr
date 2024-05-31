import { Host, h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbToggle {
  constructor() {
    this.htmlid = 'toggle-' + uuid();
    this.disabled = undefined;
    this.checked = undefined;
    this.name = undefined;
  }
  handleChange(event) {
    this.dbChange.emit(event);
  }
  render() {
    return (h(Host, null, h("input", { type: "checkbox", role: "switch", class: "elm-toggle", disabled: this.disabled, checked: this.checked, id: this.htmlid, name: this.name, onChange: (event) => this.handleChange(event) }), h("label", { class: "elm-label", htmlFor: this.htmlid }, h("slot", null))));
  }
  static get is() { return "db-toggle"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-toggle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-toggle.css"]
    };
  }
  static get properties() {
    return {
      "htmlid": {
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
          "text": "Optional id for the label - otherwise random id will be set"
        },
        "attribute": "htmlid",
        "reflect": false,
        "defaultValue": "'toggle-' + uuid()"
      },
      "disabled": {
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
          "text": "Disabled property"
        },
        "attribute": "disabled",
        "reflect": true
      },
      "checked": {
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
          "text": "Checked property"
        },
        "attribute": "checked",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The name attribute specifies a name for the included input element."
        },
        "attribute": "name",
        "reflect": true
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
}
//# sourceMappingURL=db-toggle.js.map
