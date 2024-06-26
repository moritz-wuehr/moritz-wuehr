import { r as registerInstance, h, g as getElement } from './index-8b4f8b96.js';
import { p as parseData } from './utils-8fa1298c.js';

const dbMainnavigationCss = "@charset \"UTF-8\";:where(html,:host){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:var(--db-box-sizing, border-box)}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:\"•   \"}:where(ul) li::marker{color:#ec0016}details>*,details>::before,details>::after{box-sizing:var(--db-box-sizing, border-box)}body,:host,div,button,input,select,textarea{color:#282d37;font-family:\"DB Screen Sans\", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-mainnavigation{position:relative;top:0}.rea-header .cmp-mainnavigation{order:1}@supports not selector(:has(db)){.cmp-mainnavigation{margin:auto}}.cmp-mainnavigation .elm-link,.cmp-mainnavigation a{border-radius:initial;color:inherit;display:inline-block;text-decoration:none}.cmp-mainnavigation>input[type=checkbox][id]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}@media screen and (min-width: 1024px){.cmp-mainnavigation>input[type=checkbox][id],.cmp-mainnavigation>input[type=checkbox][id]+label[for]{display:none}}.cmp-mainnavigation>label[for]{--icon-glyph-before:\"󡄢\";--icon-glyph-after:\"⨯\";background-color:#fdfdfd;border-bottom:1px solid #f5f4f1;display:block;padding:0.5rem 1.375rem 0.625rem}.cmp-mainnavigation>label[for]::before{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);content:var(--icon-glyph-before);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-mainnavigation>label[for]::before{content:var(--icon-glyph-before)/\"\"}}@media aural{.cmp-mainnavigation>label[for]::before{content:none}}@media speech{.cmp-mainnavigation>label[for]::before{content:none}}.cmp-mainnavigation>label[for]::after{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-after, var(--icon-font-size, 1.5rem));margin-inline-start:var(--icon-margin-before, 0.375rem);content:var(--icon-glyph-after);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-mainnavigation>label[for]::after{content:var(--icon-glyph-after)/\"\"}}@media aural{.cmp-mainnavigation>label[for]::after{content:none}}@media speech{.cmp-mainnavigation>label[for]::after{content:none}}.cmp-mainnavigation>label[for]::before{margin-right:1rem}.cmp-mainnavigation>label[for]::after{position:absolute;right:1rem;transform:translateY(0.125rem)}@media screen and (max-width: 1023px){.cmp-mainnavigation{background-color:#3c414b;left:0;position:absolute;top:4rem;width:100vw;z-index:30}.cmp-mainnavigation>input[type=checkbox][id]:not(:checked)+label[for]::after{content:none}.cmp-mainnavigation>input[type=checkbox][id]:not(:checked)~ul{display:none}}.cmp-mainnavigation ul{background-color:#fdfdfd}@media screen and (min-width: 1024px){.cmp-mainnavigation ul ul{box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);position:absolute;visibility:hidden;z-index:70}}@media screen and (max-width: 1023px){.cmp-mainnavigation ul ul{display:none}}@media screen and (min-width: 1024px){.cmp-mainnavigation>ul{display:flex}}@media screen and (min-width: 1024px){.cmp-mainnavigation>ul>li>.elm-link,.cmp-mainnavigation>ul>li>a,.cmp-mainnavigation>ul>li>*>.elm-link,.cmp-mainnavigation>ul>li>*>a,.cmp-mainnavigation>ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li>a,.cmp-mainnavigation>ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li>*>a{padding:2rem 1.625rem 1.1875rem;border-bottom:4px solid transparent}.cmp-mainnavigation>ul>li>.elm-link:hover,.cmp-mainnavigation>ul>li>a:hover,.cmp-mainnavigation>ul>li>.elm-link:focus,.cmp-mainnavigation>ul>li>a:focus,.cmp-mainnavigation>ul>li>*>.elm-link:hover,.cmp-mainnavigation>ul>li>*>a:hover,.cmp-mainnavigation>ul>li>*>.elm-link:focus,.cmp-mainnavigation>ul>li>*>a:focus,.cmp-mainnavigation>ul>*>li>.elm-link:hover,.cmp-mainnavigation>ul>*>li>a:hover,.cmp-mainnavigation>ul>*>li>.elm-link:focus,.cmp-mainnavigation>ul>*>li>a:focus,.cmp-mainnavigation>ul>*>li>*>.elm-link:hover,.cmp-mainnavigation>ul>*>li>*>a:hover,.cmp-mainnavigation>ul>*>li>*>.elm-link:focus,.cmp-mainnavigation>ul>*>li>*>a:focus{border-bottom-color:#d7dce1}.cmp-mainnavigation>ul>li>.elm-link[aria-current=page],.cmp-mainnavigation>ul>li>a[aria-current=page],.cmp-mainnavigation>ul>li>*>.elm-link[aria-current=page],.cmp-mainnavigation>ul>li>*>a[aria-current=page],.cmp-mainnavigation>ul>*>li>.elm-link[aria-current=page],.cmp-mainnavigation>ul>*>li>a[aria-current=page],.cmp-mainnavigation>ul>*>li>*>.elm-link[aria-current=page],.cmp-mainnavigation>ul>*>li>*>a[aria-current=page]{border-bottom-color:#ec0016}}@media screen and (min-width: 1024px){.cmp-mainnavigation>ul>li ul,.cmp-mainnavigation>ul>*>li ul{left:0;min-width:100%;top:4.9375rem}.cmp-mainnavigation>ul>li ul ul,.cmp-mainnavigation>ul>*>li ul ul{left:100%;top:auto;transform:translateY(-3.3125rem)}.cmp-mainnavigation>ul>li ul .elm-link,.cmp-mainnavigation>ul>li ul a,.cmp-mainnavigation>ul>*>li ul .elm-link,.cmp-mainnavigation>ul>*>li ul a{align-items:center;display:flex;min-height:3.3125rem;padding-left:1.125rem;padding-right:1.125rem}}@media screen and (max-width: 1023px){.cmp-mainnavigation>ul>li ul>li>.elm-link,.cmp-mainnavigation>ul>li ul>li>a,.cmp-mainnavigation>ul>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>li>*>a,.cmp-mainnavigation>ul>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>li ul>*>li>a,.cmp-mainnavigation>ul>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>*>li>*>a,.cmp-mainnavigation>ul>*>li ul>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>li>a,.cmp-mainnavigation>ul>*>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>li>*>a,.cmp-mainnavigation>ul>*>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li>a,.cmp-mainnavigation>ul>*>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li>*>a{padding-left:2.125rem}}@media screen and (max-width: 1023px){.cmp-mainnavigation>ul>li ul>li ul>li>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>li>a,.cmp-mainnavigation>ul>li ul>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>li>*>a,.cmp-mainnavigation>ul>li ul>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>*>li>a,.cmp-mainnavigation>ul>li ul>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>li ul>*>li>*>a,.cmp-mainnavigation>ul>li ul>*>li ul>li>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>li>a,.cmp-mainnavigation>ul>li ul>*>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>li>*>a,.cmp-mainnavigation>ul>li ul>*>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>*>li>a,.cmp-mainnavigation>ul>li ul>*>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>li ul>*>li ul>*>li>*>a,.cmp-mainnavigation>ul>*>li ul>li ul>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>li>a,.cmp-mainnavigation>ul>*>li ul>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>li>*>a,.cmp-mainnavigation>ul>*>li ul>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>*>li>a,.cmp-mainnavigation>ul>*>li ul>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>li ul>*>li>*>a,.cmp-mainnavigation>ul>*>li ul>*>li ul>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>li>a,.cmp-mainnavigation>ul>*>li ul>*>li ul>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>li>*>a,.cmp-mainnavigation>ul>*>li ul>*>li ul>*>li>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>*>li>a,.cmp-mainnavigation>ul>*>li ul>*>li ul>*>li>*>.elm-link,.cmp-mainnavigation>ul>*>li ul>*>li ul>*>li>*>a{padding-left:3.75rem}}.cmp-mainnavigation li{display:block;position:relative}.cmp-mainnavigation li[aria-haspopup=true]{--icon-glyph-after:\">\"}.cmp-mainnavigation li[aria-haspopup=true]::after{--icon-font-family:\"icons-24-outline\",\n  \t\"missing-icons\" !important;font-size:var(--icon-font-size-after, var(--icon-font-size, 1.5rem));margin-inline-start:var(--icon-margin-before, 0.375rem);content:var(--icon-glyph-after);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:\"\";alt:\"\";speak:none;speak:never}@supports (content: \"\"/\"\"){.cmp-mainnavigation li[aria-haspopup=true]::after{content:var(--icon-glyph-after)/\"\"}}@media aural{.cmp-mainnavigation li[aria-haspopup=true]::after{content:none}}@media speech{.cmp-mainnavigation li[aria-haspopup=true]::after{content:none}}.cmp-mainnavigation li[aria-haspopup=true]::after{position:absolute;right:1rem;top:0.5625rem}.cmp-mainnavigation li:hover>ul,.cmp-mainnavigation li:hover>*>ul{visibility:visible}@media screen and (max-width: 1023px){.cmp-mainnavigation li:hover>ul,.cmp-mainnavigation li:hover>*>ul{display:initial}}@media screen and (max-width: 1023px){.cmp-mainnavigation li{background-color:#3c414b;color:#fdfdfd}.cmp-mainnavigation li:hover{background-color:#afb4bb;color:#131821}.cmp-mainnavigation li:hover>a{font-weight:700}.cmp-mainnavigation li .elm-link,.cmp-mainnavigation li a{color:inherit;padding-bottom:0.5rem;padding-left:1.375rem;padding-top:0.5rem}.cmp-mainnavigation li[aria-haspopup=true]{position:relative}}@media screen and (min-width: 1024px){.cmp-mainnavigation li[aria-haspopup=true]::after{content:none}.cmp-mainnavigation li .elm-link:hover,.cmp-mainnavigation li a:hover,.cmp-mainnavigation li .elm-link:focus,.cmp-mainnavigation li a:focus{background-color:#d7dce1;color:initial}.cmp-mainnavigation li .elm-link[aria-current=page],.cmp-mainnavigation li a[aria-current=page]{font-weight:700}}";

const getJsxLinks = (items) => {
  return items.map((item, index) => (h("li", { key: `mainnavigation-item-${index}`, innerHTML: item.html }, item.children && h("ul", null, getJsxLinks(item.children)))));
};
const setupItemsRecursive = (children) => {
  const items = [];
  children.forEach((child) => {
    const singleAnchor = child.children.length === 1;
    items.push({
      html: child.outerHTML,
      children: !singleAnchor && child.children
        ? setupItemsRecursive(Array.from(child.children))
        : []
    });
  });
  return items;
};
const cleanUpItem = (item) => {
  item.children.forEach((child) => {
    item.html = item.html.replace(child.html, '');
    cleanUpItem(child);
  });
};
const setupOnlyDbLinkNavigation = (children) => {
  const nonDbLinkChildren = children.filter((child) => child.tagName.toLowerCase() !== 'db-link' &&
    child.tagName.toLowerCase() !== 'a');
  if (nonDbLinkChildren.length === 0) {
    const items = setupItemsRecursive(children);
    items.forEach((item) => {
      cleanUpItem(item);
    });
    return items;
  }
  return [];
};
const getCompDataHtml = (compData) => {
  let html = '';
  compData.forEach((data) => {
    let listTag = '<li>\n';
    let hasChildren = false;
    if (data.children && data.children.length > 0) {
      listTag = '<li aria-haspopup="true">\n';
      hasChildren = true;
    }
    listTag += `<db-link href="${data.link}" current="${data.current ? 'page' : false}">${data.label}</db-link>\n`;
    html += listTag;
    if (hasChildren) {
      html += `<ul>\n${getCompDataHtml(data.children)}</ul>\n`;
    }
    html += '</li>';
  });
  return html;
};
const addAreaPopupsRecursive = (children) => {
  if (children && children.length > 0) {
    children.forEach((child) => {
      if (child.tagName.toLowerCase() === 'li' && child.children) {
        const subChildren = Array.from(child.children);
        if (subChildren.find((sChild) => sChild.tagName.toLowerCase() === 'ul')) {
          child.setAttribute('aria-haspopup', 'true');
        }
        addAreaPopupsRecursive(subChildren);
      }
    });
  }
};
const DbMainnavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.siteName = undefined;
    this.data = undefined;
  }
  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
    }
    else {
      this.children = Array.from(this.host.children);
      this.onlyLinks = setupOnlyDbLinkNavigation(this.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
        addAreaPopupsRecursive(this.children);
      }
      else {
        this.host.innerHTML = '';
      }
    }
  }
  render() {
    return (h("nav", { class: "cmp-mainnavigation", id: "mainnavigation" }, h("input", { type: "checkbox", id: "toggle_mainnavigation" }), h("label", { htmlFor: "toggle_mainnavigation", title: "Toggle main navigation", class: "is-site-name" }, this.siteName), this.compData && h("ul", { innerHTML: getCompDataHtml(this.compData) }), !this.compData && (h("ul", null, this.onlyLinks && getJsxLinks(this.onlyLinks), !this.hasItemsWrapper &&
      !this.onlyLinks &&
      this.children.map((child, index) => (h("li", { key: `cmp-mainnavigation-item-${index}`, innerHTML: child.outerHTML }))), this.hasItemsWrapper && h("slot", null)))));
  }
  get host() { return getElement(this); }
};
DbMainnavigation.style = dbMainnavigationCss;

export { DbMainnavigation as db_mainnavigation };

//# sourceMappingURL=db-mainnavigation.entry.js.map