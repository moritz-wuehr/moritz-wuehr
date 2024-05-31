import { h } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbProgress {
  constructor() {
    this.value = undefined;
    this.max = undefined;
    this.htmlid = 'progress-' + uuid();
    this.percentagesign = '%';
    this.circle = undefined;
    this.indeterminate = false;
  }
  render() {
    return (h("div", { class: "elm-progress" }, h("progress", { value: this.value, max: this.max, id: this.htmlid, indeterminate: this.indeterminate, style: this.circle === true
        ? { ['--progress-conic']: `${this.value}` }
        : { ['']: '' }, "aria-describedby": this.htmlid + '-label' }), !this.indeterminate && (h("label", { htmlFor: this.htmlid, id: this.htmlid + '-label', "aria-hidden": "true" }, this.value, this.percentagesign))));
  }
  static get is() { return "db-progress"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-progress.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-progress.css"]
    };
  }
  static get properties() {
    return {
      "value": {
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
          "text": "The currentValue of the progress indicator."
        },
        "attribute": "value",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The currentValue of the progress indicator."
        },
        "attribute": "max",
        "reflect": true
      },
      "htmlid": {
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
          "text": "Optional id - otherwise random id will be provided"
        },
        "attribute": "htmlid",
        "reflect": false,
        "defaultValue": "'progress-' + uuid()"
      },
      "percentagesign": {
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
          "text": "The percentage sign - default %."
        },
        "attribute": "percentagesign",
        "reflect": false,
        "defaultValue": "'%'"
      },
      "circle": {
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
          "text": "As a circle"
        },
        "attribute": "circle",
        "reflect": false
      },
      "indeterminate": {
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
          "text": "Indeterminate"
        },
        "attribute": "indeterminate",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=db-progress.js.map
