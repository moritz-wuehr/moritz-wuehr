import { h } from "@stencil/core";
export class DbPage {
  componentWillLoad() {
    const htmlTags = Array.from(document.getElementsByTagName('html'));
    htmlTags.forEach((tag) => {
      tag.style.height = '100%';
      tag.style.overflow = 'hidden';
    });
    const bodyTags = Array.from(document.getElementsByTagName('body'));
    bodyTags.forEach((tag) => {
      tag.style.height = '100%';
      tag.style.margin = '0px';
    });
    const rootTag = document.getElementById('root');
    if (rootTag) {
      rootTag.style.height = '100%';
    }
    const appTag = document.getElementById('app');
    if (appTag) {
      appTag.style.height = '100%';
    }
  }
  render() {
    return (h("div", { class: "rea-page" }, h("slot", { name: "header" }), h("main", { class: "rea-main" }, h("slot", null)), h("slot", { name: "footer" })));
  }
  static get is() { return "db-page"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-page.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-page.css"]
    };
  }
}
//# sourceMappingURL=db-page.js.map
