import { h } from "@stencil/core";
export class DbCards {
  render() {
    return (h("div", { class: "cmp-cards" }, h("slot", null)));
  }
  static get is() { return "db-cards"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-cards.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-cards.css"]
    };
  }
}
//# sourceMappingURL=db-cards.js.map
