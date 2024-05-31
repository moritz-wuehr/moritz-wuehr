import { h, Host } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbSelect {
  constructor() {
    this.ariainvalid = false;
    this.disabled = false;
    this.input_id = 'select-' + uuid();
    this.label = undefined;
    this.multiple = false;
    this.name = undefined;
    this.required = false;
    this.size = undefined;
    this.value = undefined;
    this.variant = 'semitransparent';
  }
  handleChange(event) {
    this.value = event.target.value;
    this.dbChange.emit(event);
  }
  render() {
    return (h(Host, null, h("select", { class: "elm-select", "data-variant": this.variant && this.variant !== 'semitransparent'
        ? this.variant
        : '', "aria-invalid": this.ariainvalid ? 'true' : false, "aria-required": this.required ? 'true' : false, disabled: this.disabled, id: this.input_id, multiple: this.multiple, name: this.name, required: this.required, size: this.size, onChange: (event) => this.handleChange(event) }, h("slot", null)), h("label", { class: "elm-label", htmlFor: this.input_id }, this.label)));
  }
  static get is() { return "db-select"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-select.css"]
    };
  }
  static get properties() {
    return {
      "ariainvalid": {
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
          "text": "The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application."
        },
        "attribute": "ariainvalid",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "The disabled attribute can be set to keep a user from clicking on the select."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
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
        "defaultValue": "'select-' + uuid()"
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
          "text": "The label attribute specifies the caption of the selectbox."
        },
        "attribute": "label",
        "reflect": true
      },
      "multiple": {
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
          "text": "If the multiple attribute is present, then the select element represents a control for selecting zero or more options from the list of options. If the attribute is absent, then the select element represents a control for selecting a single option from the list of options."
        },
        "attribute": "multiple",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "The name attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string."
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
          "text": "When the required attribute specified, the user will be required to select a value before submitting the form."
        },
        "attribute": "required",
        "reflect": true,
        "defaultValue": "false"
      },
      "size": {
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
          "text": "The size attribute gives the number of options to show to the user. The size attribute, if specified, must have a value that is a valid non-negative integer greater than zero. If the multiple attribute is present, then the size attribute's default value is 4. If the multiple attribute is absent, then the size attribute's default value is 1."
        },
        "attribute": "size",
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
          "text": "The value property is to receive results from the native element. Use 'this.value' to process the expected value when onchange is used."
        },
        "attribute": "value",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'semitransparent'\n    | 'white'\n    | 'solid'\n    | 'outline'",
          "resolved": "\"outline\" | \"semitransparent\" | \"solid\" | \"white\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The variant attribute specifies a visual expression of a select."
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "'semitransparent'"
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
//# sourceMappingURL=db-select.js.map
