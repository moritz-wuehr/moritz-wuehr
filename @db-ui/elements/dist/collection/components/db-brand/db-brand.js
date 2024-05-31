import { h } from "@stencil/core";
export class DbBrand {
  constructor() {
    this.siteNameLink = undefined;
    this.alt = 'Deutsche Bahn Logo';
    this.anchorRef = '#';
    this.anchorTitle = undefined;
    this.anchorRelation = undefined;
    this.src = './images/db_logo.svg';
  }
  render() {
    return (h("div", { class: "cmp-brand" }, h("a", { href: this.anchorRef, title: this.anchorTitle, rel: this.anchorRelation }, h("img", { src: this.src, alt: this.alt, class: "elm-image is-logo" }), this.siteNameLink && (h("span", { class: "is-site-name" }, h("slot", null)))), !this.siteNameLink && (h("span", { class: "is-site-name" }, h("slot", null)))));
  }
  static get is() { return "db-brand"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-brand.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-brand.css"]
    };
  }
  static get properties() {
    return {
      "siteNameLink": {
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
          "text": "The site-name-link attribute can be set to make the siteName clickable (set url to root) as well."
        },
        "attribute": "site-name-link",
        "reflect": true
      },
      "alt": {
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
          "text": "The alt attribute can be set to define the alternative text for the DB logo."
        },
        "attribute": "alt",
        "reflect": true,
        "defaultValue": "'Deutsche Bahn Logo'"
      },
      "anchorRef": {
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
          "text": "The href attribute can be set to reload the current application, in general you would go to the base path of your app."
        },
        "attribute": "href",
        "reflect": true,
        "defaultValue": "'#'"
      },
      "anchorTitle": {
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
          "text": "The title attribute can be set to show a hint while hovering over the brand."
        },
        "attribute": "title",
        "reflect": true
      },
      "anchorRelation": {
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
          "text": "The rel attribute can be set to make a relationship to the current URL(https://developer.mozilla.org/en-US/docs/web/api/htmlanchorelement/rel)."
        },
        "attribute": "rel",
        "reflect": true
      },
      "src": {
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
          "text": "The src attribute can be set to define another path for the DB logo."
        },
        "attribute": "src",
        "reflect": true,
        "defaultValue": "'./images/db_logo.svg'"
      }
    };
  }
}
//# sourceMappingURL=db-brand.js.map
