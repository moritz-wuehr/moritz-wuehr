import { h } from "@stencil/core";
export class DbHeadline {
  constructor() {
    this.variant = '3';
    this.pulse = false;
  }
  render() {
    switch (this.variant) {
      case '1': {
        return (h("h1", { class: "elm-headline", "data-pulse": this.pulse }, h("slot", null)));
      }
      case '2': {
        return (h("h2", { class: "elm-headline", "data-pulse": this.pulse }, h("slot", null)));
      }
      case '4': {
        return (h("h4", { class: "elm-headline", "data-pulse": this.pulse }, h("slot", null)));
      }
      case '5': {
        return (h("h5", { class: "elm-headline", "data-pulse": this.pulse }, h("slot", null)));
      }
      case '6': {
        return (h("h6", { class: "elm-headline", "data-pulse": this.pulse }, h("slot", null)));
      }
      case '3':
      default: {
        return (h("h3", { class: "elm-headline", "data-pulse": this.pulse }, h("slot", null)));
      }
    }
  }
  static get is() { return "db-headline"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-headline.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-headline.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'1' | '2' | '3' | '4' | '5' | '6'",
          "resolved": "\"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The variant attribute specifies the size of the headline."
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'3'"
      },
      "pulse": {
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
          "text": "The pulse attribute determines whether to add a visual DB Pulse to the headline."
        },
        "attribute": "pulse",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=db-headline.js.map
