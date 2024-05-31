import { r as registerInstance, h, H as Host } from './index-8b4f8b96.js';

const dbMetaCss = ":host{margin-top:auto;margin-bottom:auto}";

const DbMeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
DbMeta.style = dbMetaCss;

export { DbMeta as db_meta };

//# sourceMappingURL=db-meta.entry.js.map