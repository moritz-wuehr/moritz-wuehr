import { h } from "@stencil/core";
export class DbAccordion {
  constructor() {
    this.emphasis = undefined;
    this.size = 'regular';
    this.summary = undefined;
    this.open = undefined;
  }
  render() {
    return (h("details", { class: "cmp-accordion", "data-emphasis": this.emphasis ? 'high' : false, "data-size": this.size, open: this.open }, h("summary", null, this.summary), h("slot", null)));
  }
  static get is() { return "db-accordion"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-accordion.css"]
    };
  }
  static get properties() {
    return {
      "emphasis": {
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
          "text": "The emphasis to highlight the summary."
        },
        "attribute": "emphasis",
        "reflect": false
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
          "text": "The size increase the size of the summary."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'regular'"
      },
      "summary": {
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
          "text": "The summary which shows the text which is visible when the accordion is collapsed."
        },
        "attribute": "summary",
        "reflect": false
      },
      "open": {
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
          "text": "The emphasis to highlight the summary."
        },
        "attribute": "open",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=db-accordion.js.map
