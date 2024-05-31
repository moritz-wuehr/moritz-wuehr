import { h } from "@stencil/core";
export class DbTag {
  constructor() {
    this.icon = undefined;
    this.iconafter = undefined;
    this.small = undefined;
    this.variant = undefined;
  }
  render() {
    return (h("span", { class: "elm-tag", "data-variant": this.variant || false, "data-size": this.small ? 'small' : false }, this.icon ? h("db-icon", { variant: "20-outline", icon: this.icon }) : null, h("slot", null), this.iconafter ? (h("db-icon", { variant: "20-outline", icon: this.iconafter })) : null));
  }
  static get is() { return "db-tag"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-tag.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-tag.css"]
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
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Attribute to add icon before tag."
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
          "text": "Attribute to add icon after tag."
        },
        "attribute": "iconafter",
        "reflect": true
      },
      "small": {
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
          "text": "Attribute for changing the size of the tag."
        },
        "attribute": "small",
        "reflect": true
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
//# sourceMappingURL=db-tag.js.map
