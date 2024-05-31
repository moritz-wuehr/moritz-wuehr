import { h } from "@stencil/core";
import { parseData } from "../../utils/utils";
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
export class DbMainnavigation {
  constructor() {
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
  static get is() { return "db-mainnavigation"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-mainnavigation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-mainnavigation.css"]
    };
  }
  static get properties() {
    return {
      "siteName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The site-name attribute can be set to have the site name for small screens."
        },
        "attribute": "site-name",
        "reflect": true
      },
      "data": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The data attribute can be used to generate main navigation by data."
        },
        "attribute": "data",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=db-mainnavigation.js.map
