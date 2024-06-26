'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');
const utils = require('./utils-616f1e50.js');

const dbOverflowMenuCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:#fff;border:solid;color:#000;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,:after,:before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}iframe{border:0}[role=navigation] ol,[role=navigation] ul,nav ol,nav ul{list-style:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px,0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>:after,details>:before{box-sizing:var(--db-box-sizing, border-box)}body,:host,button,div,input,select,textarea{color:#282d37;font-family:DB Screen Sans, Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-overflow-menu{color:#2d333f;display:inline-block;position:relative}.cmp-overflow-menu:not(.is-account) summary{font-size:0}.cmp-overflow-menu:not(.is-account) summary::before{--icon-margin-after:0}.cmp-overflow-menu summary{--icon-glyph-before:\"⋮\";display:inline-block}.cmp-overflow-menu summary::before{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.25rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-overflow-menu summary::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-overflow-menu summary::before{content:none}}@media speech{.cmp-overflow-menu summary::before{content:none}}.cmp-overflow-menu summary::before{display:inline-block;padding:0.5625rem 0.75rem;transform:translateX(-0.125rem)}.cmp-overflow-menu summary:hover::before,.cmp-overflow-menu summary:focus::before{background-color:#d7dce1}.cmp-overflow-menu summary::-webkit-details-marker{display:none}.cmp-overflow-menu summary:first-of-type{list-style-type:none}.cmp-overflow-menu menu,.cmp-overflow-menu ul{background-color:#fff;border-radius:8px;filter:drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));margin-block-start:1rem;padding-left:0;position:absolute;width:min-content;z-index:60}.cmp-overflow-menu menu::before,.cmp-overflow-menu ul::before{border-bottom:0.8125rem solid #fff;border-left:0.8125rem solid transparent;border-right:0.8125rem solid transparent;content:\"\";height:0;position:absolute;transform:translate(0.75rem, -0.8125rem);width:0}.cmp-overflow-menu menu li button,.cmp-overflow-menu menu li a,.cmp-overflow-menu ul li button,.cmp-overflow-menu ul li a{background-color:#fff;border-radius:unset;display:block;font-weight:400;padding:1rem 2rem 1rem 1rem;text-decoration:none}.cmp-overflow-menu menu li button:hover,.cmp-overflow-menu menu li button:focus,.cmp-overflow-menu menu li a:hover,.cmp-overflow-menu menu li a:focus,.cmp-overflow-menu ul li button:hover,.cmp-overflow-menu ul li button:focus,.cmp-overflow-menu ul li a:hover,.cmp-overflow-menu ul li a:focus{background-color:#d7dce1;color:inherit}.cmp-overflow-menu menu li:first-child button,.cmp-overflow-menu menu li:first-child a,.cmp-overflow-menu ul li:first-child button,.cmp-overflow-menu ul li:first-child a{border-top-left-radius:8px;border-top-right-radius:8px}.cmp-overflow-menu menu li:last-child button,.cmp-overflow-menu menu li:last-child a,.cmp-overflow-menu ul li:last-child button,.cmp-overflow-menu ul li:last-child a{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.cmp-overflow-menu[data-horizontal-position=opposite] menu,.cmp-overflow-menu[data-horizontal-position=opposite] ul{right:0}.cmp-overflow-menu[data-horizontal-position=opposite] menu::before,.cmp-overflow-menu[data-horizontal-position=opposite] ul::before{right:0;transform:translate(-0.75rem, -0.8125rem)}.cmp-overflow-menu menu{list-style-type:\"\"}.cmp-overflow-menu menu li{overflow-x:hidden}.cmp-overflow-menu menu button{line-height:inherit;text-align:left;width:100%}.cmp-overflow-menu[open] summary::after{content:\" \";display:inline-block;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:50}";

const DbOverflowMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = undefined;
    this.opposite = undefined;
    this.summary = '';
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
    return (index.h("details", { class: "cmp-overflow-menu", "data-horizontal-position": this.opposite && 'opposite' }, index.h("summary", null, this.summary), this.compData && (index.h("menu", { type: "toolbar", innerHTML: utils.getDefaultLinkData(this.compData) })), !this.compData && (index.h("menu", { type: "toolbar" }, !this.hasItemsWrapper &&
      this._children.map((child, index$1) => (index.h("li", { key: `cmp-overflow-menu-${index$1}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && index.h("slot", null)))));
  }
  get host() { return index.getElement(this); }
};
DbOverflowMenu.style = dbOverflowMenuCss;

exports.db_overflow_menu = DbOverflowMenu;

//# sourceMappingURL=db-overflow-menu.cjs.entry.js.map