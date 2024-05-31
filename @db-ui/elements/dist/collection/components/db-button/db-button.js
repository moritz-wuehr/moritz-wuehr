import { h } from "@stencil/core";
export class DbButton {
  constructor() {
    this.ariaexpanded = null;
    this.ariapressed = null;
    this.disabled = false;
    this.formaction = undefined;
    this.formenctype = undefined;
    this.formmethod = undefined;
    this.formnovalidate = false;
    this.formtarget = undefined;
    this.icon = undefined;
    this.iconafter = undefined;
    this.icononly = undefined;
    this.name = undefined;
    this.tooltip = undefined;
    this.type = 'submit';
    this.value = undefined;
    this.variant = undefined;
    this.size = undefined;
  }
  render() {
    return (h("button", { class: 'elm-button' + (this.icononly ? ' is-icon-text-replace' : ''), "aria-expanded": this.ariaexpanded, "aria-pressed": this.ariapressed, "data-variant": this.variant, disabled: this.disabled, formaction: this.formaction, formenctype: this.formenctype, formmethod: this.formmethod, formnovalidate: this.formnovalidate, formtarget: this.formtarget, name: this.name, title: this.tooltip, type: this.type, value: this.value, "data-size": this.size }, this.icon ? h("db-icon", { icon: this.icon }) : null, h("slot", null), this.iconafter ? (h("db-icon", { icon: this.iconafter, class: "iconafter" })) : null));
  }
  static get is() { return "db-button"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-button.css"]
    };
  }
  static get properties() {
    return {
      "ariaexpanded": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'true' | 'false'",
          "resolved": "\"false\" | \"true\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If the button controls a grouping of other elements, the ariaexpanded state indicates whether the controlled grouping is currently expanded or collapsed."
        },
        "attribute": "ariaexpanded",
        "reflect": true,
        "defaultValue": "null"
      },
      "ariapressed": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'true' | 'false'",
          "resolved": "\"false\" | \"true\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the button as a toggle button. The value of aria-pressed describes the state of the button."
        },
        "attribute": "ariapressed",
        "reflect": true,
        "defaultValue": "null"
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
          "text": "The disabled attribute can be set to keep a user from clicking on the button."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "formaction": {
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
          "text": "The formaction attribute specifies where to send the form-data when a form is submitted. Only for type=\"submit\"."
        },
        "attribute": "formaction",
        "reflect": true
      },
      "formenctype": {
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
          "text": "The formenctype attribute specifies how form-data should be encoded before sending it to a server. Only for type=\"submit\"."
        },
        "attribute": "formenctype",
        "reflect": true
      },
      "formmethod": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'get' | 'post'",
          "resolved": "\"get\" | \"post\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The formmethod attribute specifies how to send the form-data (which HTTP method to use). Only for type=\"submit\"."
        },
        "attribute": "formmethod",
        "reflect": true
      },
      "formnovalidate": {
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
          "text": "The formnovalidate attribute specifies which that the form-data should not be validated on submission. Only for type=\"submit\"."
        },
        "attribute": "formnovalidate",
        "reflect": true,
        "defaultValue": "false"
      },
      "formtarget": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'_self' | '_blank' | '_parent' | '_top'",
          "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The formtarget attribute specifies where to display the response after submitting the form. Only for type=\"submit\"."
        },
        "attribute": "formtarget",
        "reflect": true
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content."
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
          "text": "Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed behind the elements content."
        },
        "attribute": "iconafter",
        "reflect": true
      },
      "icononly": {
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
          "text": "Define the text next to the icon specified via the icon Property to get hidden."
        },
        "attribute": "icononly",
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
          "text": "The name attribute specifies a name for the button."
        },
        "attribute": "name",
        "reflect": true
      },
      "tooltip": {
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
          "text": "The tooltip attribute specifies the title of button."
        },
        "attribute": "tooltip",
        "reflect": true
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'button' | 'reset' | 'submit'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type attribute specifies the type of button."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'submit'"
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
          "text": "The value attribute specifies an initial value for the button."
        },
        "attribute": "value",
        "reflect": true
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'primary'\n    | 'secondary-outline'\n    | 'secondary-solid'\n    | 'tertiary-plain'\n    | 'brand-primary'",
          "resolved": "\"brand-primary\" | \"primary\" | \"secondary-outline\" | \"secondary-solid\" | \"tertiary-plain\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The variant attribute specifies a visual expression of button."
        },
        "attribute": "variant",
        "reflect": true
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'regular' | 'large'",
          "resolved": "\"large\" | \"regular\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The size attribute specifies the button size out of three sizes."
        },
        "attribute": "size",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=db-button.js.map
