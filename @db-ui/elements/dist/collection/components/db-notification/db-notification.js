import { h } from "@stencil/core";
export class DbNotification {
  constructor() {
    this.variant = this.getVariant();
    this.type = undefined;
  }
  getVariant() {
    return this.type === 'error' || this.type === 'warning'
      ? 'alert'
      : 'status';
  }
  render() {
    return (h("div", { class: "cmp-notification", role: this.variant, "data-type": this.type ? this.type : null }, h("slot", { name: "prenotification" }), h("slot", null), h("slot", { name: "postnotification" })));
  }
  static get is() { return "db-notification"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-notification.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-notification.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'alert' | 'status'",
          "resolved": "\"alert\" | \"status\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Variant will be added to the element containing the alert or status message\nthat will be read aloud by screen readers."
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "this.getVariant()"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'error'\n    | 'informative'\n    | 'success'\n    | 'warning'",
          "resolved": "\"error\" | \"informative\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type attribute is used to set the type of the notification, will change\nstyling accordingly."
        },
        "attribute": "type",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=db-notification.js.map
