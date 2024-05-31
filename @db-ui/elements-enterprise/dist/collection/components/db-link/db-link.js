import { h } from "@stencil/core";
export class DbLink {
  constructor() {
    this.current = undefined;
    this.href = undefined;
    this.hreflang = undefined;
    this.icon = undefined;
    this.iconVariant = '24-outline';
    this.icononly = undefined;
    this.media = undefined;
    this.rel = undefined;
    this.target = undefined;
    this.type = undefined;
    this.text = undefined;
  }
  componentWillLoad() {
    const children = Array.from(this.host.children);
    // This is a workaround for frameworks like angular.
    // They use custom attributes like "routerLink" on an <a>.
    // We copy those attributes to the <a> inside <db-link>.
    if (children.length === 1 && children[0].tagName.toLowerCase() === 'a') {
      children[0].getAttributeNames().forEach((attribute) => {
        this[attribute] = children[0].getAttribute(attribute);
      });
      this.text = children[0].textContent;
      this.host.innerHTML = '';
    }
  }
  render() {
    return (h("a", { class: 'elm-link' + (this.icononly ? ' is-icon-text-replace' : ''), href: this.href, hreflang: this.hreflang, "data-type": this.type, media: this.media, rel: this.rel, target: this.target, "aria-current": this.current }, this.icon ? (h("db-icon", { icon: this.icon, variant: this.iconVariant })) : null, this.text && this.text, !this.text && h("slot", null)));
  }
  static get is() { return "db-link"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-link.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-link.css"]
    };
  }
  static get properties() {
    return {
      "current": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'page'\n    | 'step'\n    | 'location'\n    | 'date'\n    | 'time'\n    | 'true'\n    | 'false'",
          "resolved": "\"date\" | \"false\" | \"location\" | \"page\" | \"step\" | \"time\" | \"true\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The current attribute is the state on an element indicates that this element represents the current item within a container or set of related elements."
        },
        "attribute": "current",
        "reflect": true
      },
      "href": {
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
          "text": "The href attribute represents a hyperlink (a hypertext anchor)."
        },
        "attribute": "href",
        "reflect": true
      },
      "hreflang": {
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
          "text": "The hreflang attribute gives the language of the linked resource. The value must be a valid BCP 47 language tag."
        },
        "attribute": "hreflang",
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
      "iconVariant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| '16-filled'\n    | '20-filled'\n    | '24-filled'\n    | '32-filled'\n    | '48-filled'\n    | '64-filled'\n    | '16-outline'\n    | '20-outline'\n    | '24-outline'\n    | '32-outline'\n    | '48-outline'\n    | '64-outline'",
          "resolved": "\"16-filled\" | \"16-outline\" | \"20-filled\" | \"20-outline\" | \"24-filled\" | \"24-outline\" | \"32-filled\" | \"32-outline\" | \"48-filled\" | \"48-outline\" | \"64-filled\" | \"64-outline\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The variant attribute specifies the style and size of an icon."
        },
        "attribute": "icon-variant",
        "reflect": true,
        "defaultValue": "'24-outline'"
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
      "media": {
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
          "text": "The media attribute describes for which media the target document was designed. The value must be a valid media query. The default, if the media attribute is omitted, is \"all\"."
        },
        "attribute": "media",
        "reflect": true
      },
      "rel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'alternate'\n    | 'appendix'\n    | 'author'\n    | 'bookmark'\n    | 'chapter'\n    | 'contents'\n    | 'copyright'\n    | 'glossary'\n    | 'help'\n    | 'index'\n    | 'license'\n    | 'next'\n    | 'nofollow'\n    | 'noopener'\n    | 'noreferrer'\n    | 'prefetch'\n    | 'prev'\n    | 'search'\n    | 'section'\n    | 'start'\n    | 'subsection'\n    | 'tag'",
          "resolved": "\"section\" | \"start\" | \"help\" | \"search\" | \"contents\" | \"prefetch\" | \"bookmark\" | \"copyright\" | \"alternate\" | \"appendix\" | \"author\" | \"chapter\" | \"glossary\" | \"index\" | \"license\" | \"next\" | \"nofollow\" | \"noopener\" | \"noreferrer\" | \"prev\" | \"subsection\" | \"tag\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The rel attribute controls what kinds of links the elements create. The attribue's value must be a set of space-separated tokens. The allowed keywords and their meanings are defined below."
        },
        "attribute": "rel",
        "reflect": true
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'_blank' | '_self' | '_parent' | '_top'",
          "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The target attribute gives the name of the browsing context that will be used. User agents use this name when following hyperlinks."
        },
        "attribute": "target",
        "reflect": true
      },
      "type": {
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
          "text": "The type attribute, if present, gives the MIME type of the linked resource. The value must be a valid MIME type. User agents must not consider the type attribute authoritative \u2014 upon fetching the resource, user agents must not use metadata included in the link to the resource to determine its type."
        },
        "attribute": "type",
        "reflect": true
      },
      "text": {
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
          "text": "The text attribute can be used to set the text inside the anchor tag without slot."
        },
        "attribute": "text",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=db-link.js.map
