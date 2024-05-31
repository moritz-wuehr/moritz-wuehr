import { Host, h } from "@stencil/core";
export class DbMeta {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "db-meta"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-meta.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-meta.css"]
    };
  }
}
//# sourceMappingURL=db-meta.js.map
