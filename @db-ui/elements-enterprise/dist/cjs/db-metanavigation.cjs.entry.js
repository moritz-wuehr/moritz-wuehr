'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');
const utils = require('./utils-616f1e50.js');

const dbMetanavigationCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:#fff;border:solid;color:#000;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,:after,:before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}iframe{border:0}[role=navigation] ol,[role=navigation] ul,nav ol,nav ul{list-style:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px,0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>:after,details>:before{box-sizing:var(--db-box-sizing, border-box)}body,:host,button,div,input,select,textarea{color:#282d37;font-family:DB Screen Sans, Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-metanavigation{display:flex;list-style:none;margin-bottom:0;margin-top:0;padding-left:0}.cmp-metanavigation li{padding-left:0.5rem;padding-right:0.5rem}.rea-footer .cmp-metanavigation li{padding-left:0.375rem;padding-right:0.375rem}.cmp-metanavigation li .elm-link{text-decoration:none}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link{font-size:0}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link::before{--icon-margin-after:0}@media screen and (max-width: 41rem){.rea-header .cmp-metanavigation li .elm-link{font-size:0}.rea-header .cmp-metanavigation li .elm-link::before{--icon-margin-after:0}}.rea-footer .cmp-metanavigation{flex-wrap:wrap;justify-content:center}@media screen and (max-width: 767px){.rea-footer .cmp-metanavigation{margin-bottom:1rem}}@media screen and (min-width: 768px){.rea-footer .cmp-metanavigation{float:right}}";

const DbMetanavigation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = undefined;
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
  }
  componentWillLoad() {
    if (this.data) {
      this.compData = utils.parseData(this.data);
    }
    else {
      this._children = Array.from(this.host.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
      }
      else {
        this.host.innerHTML = '';
      }
    }
  }
  render() {
    return (index.h(index.Host, null, this.compData && (index.h("ul", { class: "cmp-metanavigation", innerHTML: utils.getDefaultLinkData(this.compData) })), !this.compData && (index.h("ul", { class: "cmp-metanavigation" }, !this.hasItemsWrapper &&
      this._children.map((child, index$1) => (index.h("li", { key: `cmp-metanavigation-item-${index$1}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && index.h("slot", null)))));
  }
  get host() { return index.getElement(this); }
};
DbMetanavigation.style = dbMetanavigationCss;

exports.db_metanavigation = DbMetanavigation;

//# sourceMappingURL=db-metanavigation.cjs.entry.js.map