import { h, Host } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbInput {
  constructor() {
    this.ariainvalid = null;
    this.ariarequired = null;
    this.autocomplete = null;
    this.autofocus = false;
    this.description = undefined;
    this.dirname = undefined;
    this.disabled = false;
    this.input_id = 'input-' + uuid();
    this.label = undefined;
    this.list = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.name = undefined;
    this.pattern = undefined;
    this.step = undefined;
    this.min = undefined;
    this.max = undefined;
    this.placeholder = undefined;
    this.readonly = undefined;
    this.required = undefined;
    this.size = undefined;
    this.type = 'text';
    this.value = undefined;
    this.variant = 'semitransparent';
  }
  handleChange(event) {
    this.dbChange.emit(event);
  }
  render() {
    return (h(Host, null, h("input", { type: this.type, class: "elm-input", id: this.input_id, "aria-invalid": this.ariainvalid, "aria-required": this.ariarequired, autocomplete: this.autocomplete, autofocus: this.autofocus, "data-dirname": this.dirname, disabled: this.disabled, list: this.list, max: this.max, maxlength: this.maxlength, min: this.min, minlength: this.minlength, name: this.name, pattern: this.pattern, placeholder: this.placeholder, readonly: this.readonly, required: this.required, size: this.size, step: this.step, value: this.value, "aria-labelledby": this.input_id + '-label', "data-variant": this.variant, onChange: (event) => this.handleChange(event) }), h("label", { class: "elm-label", htmlFor: this.input_id, "aria-hidden": "true", id: this.input_id + '-label' }, this.label), this.description && (h("p", { id: this.input_id + '-hint', class: "description" }, this.description)), this.list ? (h("datalist", { id: this.list }, h("slot", null))) : ('')));
  }
  static get is() { return "db-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-input.css"]
    };
  }
  static get properties() {
    return {
      "ariainvalid": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'false'\n    | 'grammar'\n    | 'spelling'\n    | 'true'",
          "resolved": "\"false\" | \"grammar\" | \"spelling\" | \"true\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application."
        },
        "attribute": "ariainvalid",
        "reflect": true,
        "defaultValue": "null"
      },
      "ariarequired": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'false' | 'true'",
          "resolved": "\"false\" | \"true\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form."
        },
        "attribute": "ariarequired",
        "reflect": true,
        "defaultValue": "null"
      },
      "autocomplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'off' | 'on'",
          "resolved": "\"off\" | \"on\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "User agents sometimes have features for helping users fill forms in, for example prefilling the user's address based on earlier user input."
        },
        "attribute": "autocomplete",
        "reflect": true,
        "defaultValue": "null"
      },
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
        "reflect": true,
        "defaultValue": "false"
      },
      "description": {
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
          "text": "The description attribute specifies the description/hint of the input."
        },
        "attribute": "description",
        "reflect": true
      },
      "dirname": {
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
          "text": "The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string."
        },
        "attribute": "dirname",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element."
        },
        "attribute": "input_id",
        "reflect": true,
        "defaultValue": "'input-' + uuid()"
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
      "list": {
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
          "text": "The list attribute is used to identify an element that lists predefined options suggested to the user."
        },
        "attribute": "list",
        "reflect": true
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "/* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input."
        },
        "attribute": "maxlength",
        "reflect": true
      },
      "minlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "/* The minlength attribute, when it applies, is a form control minlength attribute."
        },
        "attribute": "minlength",
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
          "text": "The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string."
        },
        "attribute": "name",
        "reflect": true
      },
      "pattern": {
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
          "text": "The pattern attribute specifies a regular expression against which the control's value is to be checked."
        },
        "attribute": "pattern",
        "reflect": true
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The step attribute specifies the granularity that the value must obey to on increasing or decreasing by the users selection."
        },
        "attribute": "step",
        "reflect": true
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The min attribute specifies the minimum value that is sufficient for this input."
        },
        "attribute": "min",
        "reflect": true
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The max attribute specifies the maximum value that is sufficient for this input."
        },
        "attribute": "max",
        "reflect": true
      },
      "placeholder": {
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
          "text": "The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry."
        },
        "attribute": "placeholder",
        "reflect": true
      },
      "readonly": {
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
          "text": "The readonly attribute controls whether or not the user can edit the form control."
        },
        "attribute": "readonly",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The required attribute is a boolean attribute. When specified, the element is required."
        },
        "attribute": "required",
        "reflect": true
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The size attribute gives the number of characters that, in a visual rendering, the user agent is to allow the user to see while editing the element's value."
        },
        "attribute": "size",
        "reflect": true
      },
      "type": {
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
          "text": "The type attribute changes the input type to text, number etc."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'text'"
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value content attribute gives the default value of the input element."
        },
        "attribute": "value",
        "reflect": true
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
        "optional": true,
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
//# sourceMappingURL=db-input.js.map
