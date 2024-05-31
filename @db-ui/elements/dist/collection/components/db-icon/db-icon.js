import { h } from "@stencil/core";
export class DbIcon {
  constructor() {
    this.icon = undefined;
    this.variant = undefined;
  }
  render() {
    return (h("span", { "data-icon": this.icon, "data-icon-variant": this.variant, "aria-hidden": "true" }));
  }
  static get is() { return "db-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-icon.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
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
          "text": "The icon attribute specifies the icon to use."
        },
        "attribute": "icon",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| '16-filled'\n    | '20-filled'\n    | '24-filled'\n    | '32-filled'\n    | '48-filled'\n    | '64-filled'\n    | '16-outline'\n    | '20-outline'\n    | '24-outline'\n    | '32-outline'\n    | '48-outline'\n    | '64-outline'",
          "resolved": "\"16-filled\" | \"16-outline\" | \"20-filled\" | \"20-outline\" | \"24-filled\" | \"24-outline\" | \"32-filled\" | \"32-outline\" | \"48-filled\" | \"48-outline\" | \"64-filled\" | \"64-outline\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The variant attribute specifies the style and size of an icon."
        },
        "attribute": "variant",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=db-icon.js.map
