'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');

const dbHeaderCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:#fff;border:solid;color:#000;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,:after,:before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}iframe{border:0}[role=navigation] ol,[role=navigation] ul,nav ol,nav ul{list-style:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px,0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>:after,details>:before{box-sizing:var(--db-box-sizing, border-box)}body,:host,button,div,input,select,textarea{color:#282d37;font-family:DB Screen Sans, Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.rea-header{background-color:#fdfdfd;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 1px rgba(0, 0, 0, 0.05);display:flex;justify-content:space-between;margin-bottom:1rem;min-height:4.9375rem;padding-left:1rem;padding-right:1rem}.rea-header:not(:has(.rea-meta))::after{content:\"\";display:inline-block;order:3}.rea-header .elm-link{display:inline-block}@media screen and (max-width: 1023px){.rea-header{border-bottom:0.0625rem solid #9c9a8e;min-height:4rem}}:host{display:block}";

const DbHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("header", { class: "rea-header", role: "banner" }, index.h("slot", null)));
  }
};
DbHeader.style = dbHeaderCss;

exports.db_header = DbHeader;

//# sourceMappingURL=db-header.cjs.entry.js.map