'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');

const dbLinkCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:#fff;border:solid;color:#000;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,:after,:before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}iframe{border:0}[role=navigation] ol,[role=navigation] ul,nav ol,nav ul{list-style:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px,0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>:after,details>:before{box-sizing:var(--db-box-sizing, border-box)}body,:host,button,div,input,select,textarea{color:#282d37;font-family:DB Screen Sans, Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-link{border-radius:0.25rem;display:inline-block;text-underline-offset:0.1875rem;text-underline-position:under}@supports (text-underline-offset: 3px){.elm-link{text-underline-position:auto}}.elm-link:active{color:initial}.elm-link[aria-disabled=true]{opacity:0.4;pointer-events:none}.elm-link[aria-disabled=true]::before{color:initial}.elm-link[data-size=small]:not(.is-icon-text-replace){font-size:0.875rem}.elm-link[rel][data-size=small]::before,.elm-link[data-icon][data-size=small]::before,.elm-link[data-icon-before][data-size=small]::before{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;--icon-font-size:1.25rem}.elm-link[data-icon-after][data-size=small]::after::after{--icon-font-family:\"icons-20-outline\",\n  \t\"missing-icons\" !important;--icon-font-size:1.25rem}.elm-link[rel=configuration]{--icon-glyph-before:\"⚙\"}.elm-link[rel=configuration]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.elm-link[rel=configuration]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.elm-link[rel=configuration]::before{content:none}}@media speech{.elm-link[rel=configuration]::before{content:none}}.elm-link[rel=messages]{--icon-glyph-before:\"󡈶\"}.elm-link[rel=messages]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.elm-link[rel=messages]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.elm-link[rel=messages]::before{content:none}}@media speech{.elm-link[rel=messages]::before{content:none}}.elm-link[rel=account]{--icon-glyph-before:\"󡈡\"}.elm-link[rel=account]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.elm-link[rel=account]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.elm-link[rel=account]::before{content:none}}@media speech{.elm-link[rel=account]::before{content:none}}.elm-link[rel=configuration]::before,.elm-link[rel=messages]::before,.elm-link[rel=account]::before{display:inline-block}";

const DbLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.current = undefined;
    this.href = undefined;
    this.hreflang = undefined;
    this.icon = undefined;
    this.iconVariant = '24-outline';
    this.icononly = undefined;
    this.media = undefined;
    this.rel = undefined;
    this.target = undefined;
    this.type = undefined;
    this.text = undefined;
  }
  componentWillLoad() {
    const children = Array.from(this.host.children);
    // This is a workaround for frameworks like angular.
    // They use custom attributes like "routerLink" on an <a>.
    // We copy those attributes to the <a> inside <db-link>.
    if (children.length === 1 && children[0].tagName.toLowerCase() === 'a') {
      children[0].getAttributeNames().forEach((attribute) => {
        this[attribute] = children[0].getAttribute(attribute);
      });
      this.text = children[0].textContent;
      this.host.innerHTML = '';
    }
  }
  render() {
    return (index.h("a", { class: 'elm-link' + (this.icononly ? ' is-icon-text-replace' : ''), href: this.href, hreflang: this.hreflang, "data-type": this.type, media: this.media, rel: this.rel, target: this.target, "aria-current": this.current }, this.icon ? (index.h("db-icon", { icon: this.icon, variant: this.iconVariant })) : null, this.text && this.text, !this.text && index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
DbLink.style = dbLinkCss;

exports.db_link = DbLink;

//# sourceMappingURL=db-link.cjs.entry.js.map