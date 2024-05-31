import { r as registerInstance, h, g as getElement } from './index-8b4f8b96.js';
import { p as parseData } from './utils-8fa1298c.js';

const dbBreadcrumbCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:\"DB Screen Sans\", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-breadcrumb{color:#646973;font-size:0.75rem}.cmp-breadcrumb a{color:inherit}.cmp-breadcrumb ol{display:flex}.cmp-breadcrumb ol>*{align-items:center;display:inline-flex;margin-right:0.1875rem}.cmp-breadcrumb ol>* [aria-current=location],.cmp-breadcrumb ol>* [aria-current=page]{color:#282d37;font-size:0.875rem}.cmp-breadcrumb ol>* .elm-link,.cmp-breadcrumb ol>* li :where(button,a),li .cmp-breadcrumb ol>* :where(button,a){border-radius:0.25rem;padding:0.0625rem 0.1875rem 0.0625rem 0.25rem;text-decoration:none}.cmp-breadcrumb ol>* .elm-link:hover,.cmp-breadcrumb ol>* li :hover:where(button,a),li .cmp-breadcrumb ol>* :hover:where(button,a){background-color:rgba(40, 45, 55, 0.03)}.cmp-breadcrumb ol>* .elm-link:active,.cmp-breadcrumb ol>* li :active:where(button,a),li .cmp-breadcrumb ol>* :active:where(button,a){background-color:rgba(40, 45, 55, 0.06)}.cmp-breadcrumb ol>*:first-child{--icon-glyph-before:\"⌂\"}.cmp-breadcrumb ol>*:first-child::before{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.25rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-breadcrumb ol>*:first-child::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-breadcrumb ol>*:first-child::before{content:none}}@media speech{.cmp-breadcrumb ol>*:first-child::before{content:none}}.cmp-breadcrumb ol>*:first-child::before{--icon-margin-after:0.1875rem}.cmp-breadcrumb ol>*:not(:first-child){--icon-glyph-before:\">\"}.cmp-breadcrumb ol>*:not(:first-child)::before{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.25rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-breadcrumb ol>*:not(:first-child)::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-breadcrumb ol>*:not(:first-child)::before{content:none}}@media speech{.cmp-breadcrumb ol>*:not(:first-child)::before{content:none}}.cmp-breadcrumb ol>*:not(:first-child)::before{--icon-font-size:0.875rem;--icon-margin-after:0;color:#878c96;margin-left:-0.125rem}";

const getCompDataHtml = (compData) => {
  if (!compData)
    return '';
  return compData
    .map((data) => `<li><db-link href="${data.href}" target="${data.target}">${data.label}</db-link></li>`)
    .join('\n');
};
const DbBreadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = undefined;
    this.arialabel = undefined;
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
  }
  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
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
    return (h("nav", { class: "cmp-breadcrumb", "aria-label": this.arialabel }, this.compData && h("ol", { innerHTML: getCompDataHtml(this.compData) }), !this.compData && (h("ol", null, !this.hasItemsWrapper &&
      this._children.map((child, index) => (h("li", { key: `cmp-breadcrumb-item-${index}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  get host() { return getElement(this); }
};
DbBreadcrumb.style = dbBreadcrumbCss;

export { DbBreadcrumb as db_breadcrumb };

//# sourceMappingURL=db-breadcrumb.entry.js.map