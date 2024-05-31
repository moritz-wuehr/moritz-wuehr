'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');

const dbMetaCss = ":host{margin-top:auto;margin-bottom:auto}";

const DbMeta = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
DbMeta.style = dbMetaCss;

exports.db_meta = DbMeta;

//# sourceMappingURL=db-meta.cjs.entry.js.map