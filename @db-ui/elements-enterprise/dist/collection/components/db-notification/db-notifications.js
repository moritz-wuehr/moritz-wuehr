import { h } from "@stencil/core";
export class DbNotifications {
  constructor() {
    this.arialive = 'polite';
    this.variant = 'hovering';
  }
  render() {
    return (h("section", { "aria-live": this.arialive, "data-variant": this.variant }, h("slot", null)));
  }
  static get is() { return "db-notifications"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-notifications.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-notifications.css"]
    };
  }
  static get properties() {
    return {
      "arialive": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'assertive' | 'polite'",
          "resolved": "\"assertive\" | \"polite\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The arialive attribute will interrupt the screenreader immediately and read\nout the notification if set to \"assertive\", while it will wait for the\nuser's idleness when set to \"polite\""
        },
        "attribute": "arialive",
        "reflect": true,
        "defaultValue": "'polite'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'alert' | 'hovering'",
          "resolved": "\"alert\" | \"hovering\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Notifications have two variants (\"hovering\" and \"alert\") which change the styling."
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "'hovering'"
      }
    };
  }
}
//# sourceMappingURL=db-notifications.js.map
