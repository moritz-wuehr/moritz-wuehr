import { h, Host } from "@stencil/core";
import { uuid } from "../../utils/utils";
export class DbImage {
  constructor() {
    this.src = undefined;
    this.modernformat = undefined;
    this.srcset = undefined;
    this.alt = undefined;
    this.width = undefined;
    this.height = undefined;
    this.loading = undefined;
    this.caption = undefined;
    this.responsivemediaquery = undefined;
    this.ariaid = 'image-' + uuid();
  }
  getBasicImage() {
    return (h("img", { class: "elm-image", alt: this.alt, src: this.src, width: this.width, srcSet: this.srcset, height: this.height, loading: this.loading, "aria-labelledby": this.caption && this.ariaid }));
  }
  basicImageCaptionWrapper() {
    if (this.caption !== undefined) {
      return (h("figure", null, this.getBasicImage(), h("figcaption", { id: this.ariaid }, this.caption)));
    }
    else {
      {
        return this.getBasicImage();
      }
    }
  }
  getPictureWrapper() {
    const fileExtension = this.modernformat.split('.').pop().toLowerCase();
    return (h("picture", null, h("source", { srcSet: this.modernformat, type: `'image/${fileExtension}` }), this.getBasicImage()));
  }
  getResponsivePictureWrapper() {
    return (h("picture", null, JSON.parse(this.responsivemediaquery).map((query, index) => (h("source", { key: `picture-${index}`, srcSet: query.srcset, media: query.media }))), this.getBasicImage()));
  }
  pictureCaptionWrapper() {
    if (this.caption !== undefined) {
      return (h("figure", null, this.getPictureWrapper(), h("figcaption", { id: this.ariaid }, this.caption)));
    }
    else {
      {
        return this.getPictureWrapper();
      }
    }
  }
  render() {
    return (h(Host, null, (this.modernformat && this.pictureCaptionWrapper()) ||
      (this.responsivemediaquery && this.getResponsivePictureWrapper()) ||
      this.basicImageCaptionWrapper()));
  }
  static get is() { return "db-image"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-image.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-image.css"]
    };
  }
  static get properties() {
    return {
      "src": {
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
          "text": "The image src URL."
        },
        "attribute": "src",
        "reflect": true
      },
      "modernformat": {
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
          "text": "Optional modern image format srcset URL (like avif or webp)."
        },
        "attribute": "modernformat",
        "reflect": false
      },
      "srcset": {
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
          "text": "Optional srcset for high density images"
        },
        "attribute": "srcset",
        "reflect": false
      },
      "alt": {
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
          "text": "The alt attribute is used by \"screen reader\" software so that a person who is listening to the content of a webpage (for instance, a person who is blind) can interact with this element."
        },
        "attribute": "alt",
        "reflect": true
      },
      "width": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Width for the image"
        },
        "attribute": "width",
        "reflect": true
      },
      "height": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Height for the image"
        },
        "attribute": "height",
        "reflect": true
      },
      "loading": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'lazy'",
          "resolved": "\"lazy\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Optional lazy loading attribute"
        },
        "attribute": "loading",
        "reflect": false
      },
      "caption": {
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
          "text": "Optional caption for the image"
        },
        "attribute": "caption",
        "reflect": false
      },
      "responsivemediaquery": {
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
          "text": "Optional responsive media queries as array of objects '[{srcset:\"/path/to/picture.extension\", media:\"(min-width: 768px)\"}]'"
        },
        "attribute": "responsivemediaquery",
        "reflect": false
      },
      "ariaid": {
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
          "text": "Optional id for the caption aria label - otherwise random id will be set"
        },
        "attribute": "ariaid",
        "reflect": false,
        "defaultValue": "'image-' + uuid()"
      }
    };
  }
}
//# sourceMappingURL=db-image.js.map
