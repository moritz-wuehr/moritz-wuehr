'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');

const dbHeadlineCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:#fff;border:solid;color:#000;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,:after,:before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}iframe{border:0}[role=navigation] ol,[role=navigation] ul,nav ol,nav ul{list-style:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px,0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>:after,details>:before{box-sizing:var(--db-box-sizing, border-box)}body,:host,button,div,input,select,textarea{color:#282d37;font-family:DB Screen Sans, Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-headline{margin-bottom:1rem;margin-top:1.5rem}.elm-headline[data-pulse]::after{background:var(--db-pulse-background, #ec0016);border-radius:calc(var(--db-logo-height, 40px) / 7 * 0.5);content:\"\";display:block;margin-bottom:var(--db-pulse-margin-bottom, 14px);margin-top:calc(var(--db-logo-height, 40px) * 0.5);width:var(--db-logo-width, 58px);height:calc(var(--db-logo-height, 40px) / 7)}h1.elm-headline,h2.elm-headline,h3.elm-headline{font-family:\"DB Screen Head\", Helvetica, Arial, sans-serif;font-weight:900}h1.elm-headline{font-size:2.25rem;line-height:1.1111111111}@media screen and (max-width: 767px){h1.elm-headline{font-size:1.75rem;line-height:1.14}}h2.elm-headline{font-size:1.5rem;line-height:1.1666666667}@media screen and (max-width: 767px){h2.elm-headline{font-size:1.25rem;line-height:1.2}}h3.elm-headline{font-size:1.25rem;line-height:1.2}@media screen and (max-width: 767px){h3.elm-headline{font-size:1.125rem;line-height:1.33}}h4.elm-headline{font-size:1.125rem;font-weight:400;line-height:1.3333333333}@media screen and (max-width: 767px){h4.elm-headline{font-size:1rem;line-height:1.25}}";

const DbHeadline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = '3';
    this.pulse = false;
  }
  render() {
    switch (this.variant) {
      case '1': {
        return (index.h("h1", { class: "elm-headline", "data-pulse": this.pulse }, index.h("slot", null)));
      }
      case '2': {
        return (index.h("h2", { class: "elm-headline", "data-pulse": this.pulse }, index.h("slot", null)));
      }
      case '4': {
        return (index.h("h4", { class: "elm-headline", "data-pulse": this.pulse }, index.h("slot", null)));
      }
      case '5': {
        return (index.h("h5", { class: "elm-headline", "data-pulse": this.pulse }, index.h("slot", null)));
      }
      case '6': {
        return (index.h("h6", { class: "elm-headline", "data-pulse": this.pulse }, index.h("slot", null)));
      }
      case '3':
      default: {
        return (index.h("h3", { class: "elm-headline", "data-pulse": this.pulse }, index.h("slot", null)));
      }
    }
  }
};
DbHeadline.style = dbHeadlineCss;

exports.db_headline = DbHeadline;

//# sourceMappingURL=db-headline.cjs.entry.js.map