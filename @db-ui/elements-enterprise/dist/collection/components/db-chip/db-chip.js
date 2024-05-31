import { Host, h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbChip {
  constructor() {
    this.interactiontype = 'selection';
    this.disabled = false;
    this.icon = undefined;
    this.iconafter = undefined;
    this.input_id = 'chip-' + uuid();
    this.name = 'chips';
    this.selected = false;
    this.variant = undefined;
  }
  render() {
    return (h(Host, null, h("input", { class: "elm-chip", type: this.interactiontype === 'filter' ? 'checkbox' : 'radio', id: this.input_id, "data-type": this.interactiontype, disabled: this.disabled, name: this.name, checked: this.selected }), h("label", { htmlFor: this.input_id, role: "button", "aria-hidden": "true", "data-variant": this.variant }, this.icon ? h("db-icon", { variant: "20-outline", icon: this.icon }) : null, h("slot", null), this.iconafter ? (h("db-icon", { variant: "20-outline", icon: this.iconafter })) : null)));
  }
  static get is() { return "db-chip"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-chip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-chip.css"]
    };
  }
  static get properties() {
    return {
      "interactiontype": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'filter' | 'selection'",
          "resolved": "\"filter\" | \"selection\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Decides which interactiontype you want to use: filter (1-n); selection (1);"
        },
        "attribute": "interactiontype",
        "reflect": true,
        "defaultValue": "'selection'"
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The disabled attribute can be set to keep a user from clicking on the chip."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "icon": {
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
          "text": "Attribute to add icon before chip."
        },
        "attribute": "icon",
        "reflect": true
      },
      "iconafter": {
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
          "text": "Attribute to add icon after chip."
        },
        "attribute": "iconafter",
        "reflect": true
      },
      "input_id": {
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
          "text": "The input_id of a label form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a label element."
        },
        "attribute": "input_id",
        "reflect": true,
        "defaultValue": "'chip-' + uuid()"
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
          "text": "Name to group multiple chips."
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "'chips'"
      },
      "selected": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Selected state"
        },
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'informative'\n    | 'success'\n    | 'warning'\n    | 'error'\n    | 'track'\n    | 'poi-essen-trinken'\n    | 'poi-einkaufen'\n    | 'poi-gesundheit'\n    | 'poi-kunst-kultur'\n    | 'poi-wissenswertes'\n    | 'poi-freizeit'\n    | 'poi-zivile-rel-einrichtungen'\n    | 'poi-dienstleistungen'\n    | 'poi-db-services-einrichtung'\n    | 'poi-wegeleitung'",
          "resolved": "\"error\" | \"informative\" | \"poi-db-services-einrichtung\" | \"poi-dienstleistungen\" | \"poi-einkaufen\" | \"poi-essen-trinken\" | \"poi-freizeit\" | \"poi-gesundheit\" | \"poi-kunst-kultur\" | \"poi-wegeleitung\" | \"poi-wissenswertes\" | \"poi-zivile-rel-einrichtungen\" | \"success\" | \"track\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Predefined variants to change background color and font color."
        },
        "attribute": "variant",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=db-chip.js.map
