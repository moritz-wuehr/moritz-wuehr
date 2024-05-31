import { h } from "@stencil/core";
export class DbFooter {
  constructor() {
    this.border = false;
    this.copyright = false;
  }
  getCopyRight() {
    return `Copyright ${new Date().getFullYear()} DB Systel`;
  }
  render() {
    return (h("footer", { class: `rea-footer ${this.border ? 'has-border' : ''}` }, this.copyright ? h("span", null, this.getCopyRight()) : null, h("slot", null)));
  }
  static get is() { return "db-footer"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-footer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-footer.css"]
    };
  }
  static get properties() {
    return {
      "border": {
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
          "text": "The border attribute can be set to add a border on top of the footer."
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      },
      "copyright": {
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
          "text": "The copyright attribute can be set to enable a copyright string with current year."
        },
        "attribute": "copyright",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=db-footer.js.map
