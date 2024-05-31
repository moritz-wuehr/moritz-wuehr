'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');

const dbPageCss = ".rea-page{height:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}.rea-page header,.rea-page footer{display:flex;flex:0 1 auto;flex-grow:0;flex-shrink:0}.rea-page main{display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;width:100%;margin:0 auto}@media screen and (min-width: 1088px){.rea-page main{max-width:960px}}@media screen and (min-width: 1280px){.rea-page main{max-width:1152px}}@media screen and (min-width: 1472px){.rea-page main{max-width:1344px}}.rea-page main>*{overflow:auto;height:100%}";

const DbPage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
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
    return (index.h("div", { class: "rea-page" }, index.h("slot", { name: "header" }), index.h("main", { class: "rea-main" }, index.h("slot", null)), index.h("slot", { name: "footer" })));
  }
};
DbPage.style = dbPageCss;

exports.db_page = DbPage;

//# sourceMappingURL=db-page.cjs.entry.js.map