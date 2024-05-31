const uuid = () => {
  var _a;
  return ((_a = window.crypto) === null || _a === void 0 ? void 0 : _a.randomUUID()) || Math.random().toString();
};
const getDefaultLinkData = (compData) => {
  if (!compData)
    return '';
  return compData
    .map((data) => `<li><db-link href="${data.href}" target="${data.target}">${data.label}</db-link></li>`)
    .join('\n');
};
/**
 * Adds the given variant as attribute for all db-links
 * @param host the stencil host element
 * @param variant icon variant
 */
const addIconVariantToAllDbLinksRecursive = (host, variant) => {
  if (host.children) {
    Array.from(host.children).forEach((child) => {
      if (child.tagName.toLowerCase() === 'db-link') {
        child.setAttribute('icon-variant', variant);
      }
      if (child.children) {
        addIconVariantToAllDbLinksRecursive(child, variant);
      }
    });
  }
};
/**
 * Without framework (Angular, React, Vue) we will need to pass a data as
 * string.
 */
const parseData = (item) => {
  try {
    if (typeof item === 'string') {
      return JSON.parse(item);
    }
    if (typeof item === 'object')
      return item;
    if (item instanceof Array)
      return item;
  }
  catch (error) {
    return false;
  }
};

export { addIconVariantToAllDbLinksRecursive as a, getDefaultLinkData as g, parseData as p, uuid as u };

//# sourceMappingURL=utils-8fa1298c.js.map