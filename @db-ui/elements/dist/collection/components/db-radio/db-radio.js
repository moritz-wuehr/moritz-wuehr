import { Host, h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbRadio {
  constructor() {
    this.autofocus = undefined;
    this.checked = undefined;
    this.disabled = undefined;
    this.input_id = 'radio-' + uuid();
    this.label = undefined;
    this.name = undefined;
    this.required = undefined;
    this.value = undefined;
  }
  handleChange(event) {
    this.dbChange.emit(event);
  }
  render() {
    return (h(Host, null, h("input", { type: "radio", class: "elm-radio", id: this.input_id, autofocus: this.autofocus, checked: this.checked, disabled: this.disabled, name: this.name, required: this.required, value: this.value, onChange: (event) => this.handleChange(event) }), h("label", { class: "elm-label", htmlFor: this.input_id }, this.label)));
  }
  static get is() { return "db-radio"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-radio.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-radio.css"]
    };
  }
  static get properties() {
    return {
      "autofocus": {
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
          "text": "The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control."
        },
        "attribute": "autofocus",
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
          "text": "The checked content attribute is a boolean attribute that gives the default checkedness of the input element."
        },
        "attribute": "checked",
        "reflect": true
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
          "text": "The disabled attribute can be set to keep a user from clicking on the input."
        },
        "attribute": "disabled",
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
          "text": "The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element."
        },
        "attribute": "input_id",
        "reflect": true,
        "defaultValue": "'radio-' + uuid()"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The label attribute specifies the caption of the input."
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
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string."
        },
        "attribute": "name",
        "reflect": true
      },
      "required": {
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
          "text": "The required attribute is a boolean attribute. When specified, the element is required."
        },
        "attribute": "required",
        "reflect": true
      },
      "value": {
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
          "text": "The value content attribute gives the default value of the input element."
        },
        "attribute": "value",
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
//# sourceMappingURL=db-radio.js.map
