import { h } from "@stencil/core";
export class DbTabBar {
  render() {
    return (h("div", { class: "cmp-tab-bar", role: "tablist" }, h("slot", null)));
  }
  static get is() { return "db-tab-bar"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-tab-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-tab-bar.css"]
    };
  }
}
//# sourceMappingURL=db-tab-bar.js.map
