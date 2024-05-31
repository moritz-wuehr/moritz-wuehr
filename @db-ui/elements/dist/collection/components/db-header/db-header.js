import { h } from "@stencil/core";
export class DbHeader {
  render() {
    return (h("header", { class: "rea-header", role: "banner" }, h("slot", null)));
  }
  static get is() { return "db-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-header.css"]
    };
  }
}
//# sourceMappingURL=db-header.js.map
