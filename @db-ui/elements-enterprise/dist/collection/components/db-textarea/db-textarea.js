import { Host, h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbTextarea {
  constructor() {
    this.valueSize = 0;
    this.ariainvalid = undefined;
    this.ariarequired = undefined;
    this.autofocus = undefined;
    this.cols = undefined;
    this.description = undefined;
    this.dirname = undefined;
    this.disabled = undefined;
    this.input_id = 'textarea-' + uuid();
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.readonly = undefined;
    this.required = undefined;
    this.rows = undefined;
    this.variant = 'semitransparent';
    this.wrap = undefined;
    this.value = undefined;
  }
  handleChange(event) {
    var _a;
    this.dbChange.emit(event);
    this.value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
  }
  render() {
    return (h(Host, null, h("label", { class: "elm-label", htmlFor: this.input_id }, this.label), h("textarea", { class: "elm-textarea", id: this.input_id, "aria-invalid": this.ariainvalid, "aria-required": this.ariarequired, autofocus: this.autofocus, cols: this.cols, "data-dirname": this.dirname, disabled: this.disabled, maxlength: this.maxlength, minlength: this.minlength, name: this.name, placeholder: this.placeholder, readonly: this.readonly, required: this.required, rows: this.rows, wrap: this.wrap, "data-variant": this.variant, onInput: (event) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.valueSize = event.target.value.length;
      }, onChange: (event) => this.handleChange(event) }, h("slot", null)), this.maxlength && (h("output", { htmlFor: this.input_id, id: `${this.input_id}-result` }, `${this.valueSize} / ${this.maxlength}`)), this.description && (h("p", { id: `${this.input_id}-hint`, class: "description" }, this.description))));
  }
  static get is() { return "db-textarea"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-textarea.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-textarea.css"]
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application."
        },
        "attribute": "ariainvalid",
        "reflect": true
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form."
        },
        "attribute": "ariarequired",
        "reflect": true
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
        "reflect": true
      },
      "cols": {
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
          "text": "The cols attribute specifies the expected maximum number of characters per line."
        },
        "attribute": "cols",
        "reflect": true
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The description attribute specifies the description/hint of the textarea."
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
        "optional": false,
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
        "defaultValue": "'textarea-' + uuid()"
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
      "maxlength": {
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
        "optional": false,
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
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string."
        },
        "attribute": "name",
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
        "optional": false,
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
        "optional": false,
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The required attribute is a boolean attribute. When specified, the element is required."
        },
        "attribute": "required",
        "reflect": true
      },
      "rows": {
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
          "text": "The rows attribute specifies the number of lines to show."
        },
        "attribute": "rows",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The variant attribute specifies a visual expression of a select."
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "'semitransparent'"
      },
      "wrap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'soft' | 'hard' | 'off '",
          "resolved": "\"hard\" | \"off \" | \"soft\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The wrap attribute indicates how the control wraps text."
        },
        "attribute": "wrap",
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
          "text": "The value attribute reflects the changes to the textarea which are also emitted via event"
        },
        "attribute": "value",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "valueSize": {}
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
//# sourceMappingURL=db-textarea.js.map
