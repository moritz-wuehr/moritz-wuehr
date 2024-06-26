'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');
const utils = require('./utils-616f1e50.js');

const dbTextareaCss = "@charset \"UTF-8\";.sc-db-textarea:where(html,).sc-db-textarea-h{line-height:1.15}.sc-db-textarea:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-textarea:where(dl,ol.sc-db-textarea,ul).sc-db-textarea .sc-db-textarea:where(dl,ol.sc-db-textarea,ul).sc-db-textarea{margin-block-end:0;margin-block-start:0}.sc-db-textarea:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-textarea:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-textarea:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-textarea:where(b,strong).sc-db-textarea{font-weight:bolder}.sc-db-textarea:where(code,kbd.sc-db-textarea,samp).sc-db-textarea{font-family:monospace, monospace;font-size:1em}.sc-db-textarea:where(small){font-size:80%}.sc-db-textarea:where(table){border-color:currentColor;text-indent:0}.sc-db-textarea:where(button,input.sc-db-textarea,select).sc-db-textarea{margin:0}.sc-db-textarea:where(button){text-transform:none}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea{-webkit-appearance:button}.sc-db-textarea:where(progress){vertical-align:baseline}.sc-db-textarea:where(select){text-transform:none}.sc-db-textarea:where(textarea){margin:0}.sc-db-textarea:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-textarea::-webkit-inner-spin-button,.sc-db-textarea::-webkit-outer-spin-button{height:auto}.sc-db-textarea::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-textarea::-webkit-search-decoration{-webkit-appearance:none}.sc-db-textarea::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=color i].sc-db-textarea,[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea::-moz-focus-inner{border-style:none;padding:0}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=color i].sc-db-textarea,[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea::-moz-focusring{outline:1px dotted ButtonText}.sc-db-textarea:where(:-moz-ui-invalid){box-shadow:none}.sc-db-textarea:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-textarea:where(dialog:not([open])){display:none}.sc-db-textarea:where(summary){display:list-item}html.sc-db-textarea,.sc-db-textarea-h{box-sizing:var(--db-box-sizing, border-box)}*.sc-db-textarea,.sc-db-textarea::before,.sc-db-textarea::after{box-sizing:inherit}img.sc-db-textarea,embed.sc-db-textarea,iframe.sc-db-textarea,object.sc-db-textarea,video.sc-db-textarea{height:auto;max-width:100%}iframe.sc-db-textarea{border:0}nav.sc-db-textarea ol.sc-db-textarea,nav.sc-db-textarea ul.sc-db-textarea,[role=navigation].sc-db-textarea ol.sc-db-textarea,[role=navigation].sc-db-textarea ul.sc-db-textarea{list-style:none;margin:0;padding:0}.sc-db-textarea:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-textarea:is(a,button.sc-db-textarea,input.sc-db-textarea,textarea.sc-db-textarea,summary).sc-db-textarea{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-textarea:is(a,button.sc-db-textarea,input.sc-db-textarea,textarea.sc-db-textarea,summary).sc-db-textarea:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-textarea:where(ul){list-style-type:\"•   \"}.sc-db-textarea:where(ul) li.sc-db-textarea::marker{color:#ec0016}details.sc-db-textarea>*.sc-db-textarea,details.sc-db-textarea>.sc-db-textarea::before,details.sc-db-textarea>.sc-db-textarea::after{box-sizing:var(--db-box-sizing, border-box)}body.sc-db-textarea,.sc-db-textarea-h,div.sc-db-textarea,button.sc-db-textarea,input.sc-db-textarea,select.sc-db-textarea,textarea.sc-db-textarea{color:#282d37;font-family:\"DB Screen Sans\", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-textarea{color:inherit}.elm-textarea.sc-db-textarea{--formElement---borderTopColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderRightColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderBottomColor:var(\n  \t--formElement---borderColor,\n  \trgba(40, 45, 55, 0.5)\n  );--formElement---borderLeftColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );border-radius:4px;caret-color:#ec0016;color:#282d37}.elm-textarea.sc-db-textarea~.description.sc-db-textarea{color:#646973;font-size:0.875rem;padding:0.375rem 0.625rem}.elm-textarea[data-variant=semitransparent].sc-db-textarea,.sc-db-textarea:where(.elm-textarea){--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:rgba(40, 45, 55, 0.05);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-textarea[data-variant=white].sc-db-textarea{--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:#ffffff;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-textarea[data-variant=solid].sc-db-textarea{--formElement---borderColor:rgba(40, 45, 55, 0.5);background-color:#f0f3f5;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-left-color:transparent;border-right:1px solid var(--formElement---borderRightColor);border-right-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-top-color:transparent}.elm-textarea[data-variant=outline].sc-db-textarea{--formElement---borderColor:rgba(40, 45, 55, 0.25);background-color:transparent;border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-right:1px solid var(--formElement---borderRightColor);border-top:1px solid var(--formElement---borderTopColor)}.elm-textarea.sc-db-textarea:not([aria-invalid]):not(:placeholder-shown):valid{--formElement---borderColor:#2a7230}.elm-textarea.sc-db-textarea:not([aria-invalid]):not(:placeholder-shown):invalid{--formElement---borderColor:#ec0016}[aria-invalid=true].elm-textarea.sc-db-textarea{--formElement---borderColor:#ec0016}.elm-textarea.sc-db-textarea{display:block;font-size:1rem;height:2.75rem;line-height:1.5rem;max-width:100%;padding:0.375rem 0.625rem;resize:vertical;width:100%}.elm-textarea.sc-db-textarea:not([rows]){max-height:37.5rem;min-height:7.5rem}.elm-textarea[rows].sc-db-textarea{height:initial}.elm-textarea.sc-db-textarea:focus:not(:disabled),.elm-textarea.sc-db-textarea:hover:not(:disabled){--formElement---borderColor:#878c96}.elm-textarea.sc-db-textarea:disabled,.elm-textarea.sc-db-textarea:disabled+.elm-label.sc-db-textarea,fieldset.sc-db-textarea:disabled .elm-textarea.sc-db-textarea,fieldset.sc-db-textarea:disabled .elm-textarea.sc-db-textarea+.elm-label.sc-db-textarea{opacity:0.4}.elm-textarea.sc-db-textarea+output.sc-db-textarea{float:right;margin-top:0.75rem}.elm-textarea.sc-db-textarea+output.sc-db-textarea,.elm-textarea.sc-db-textarea+output.sc-db-textarea+.description.sc-db-textarea{color:#646973;font-size:0.875rem;padding:0.375rem 0.625rem}";

const DbTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dbChange = index.createEvent(this, "dbChange", 7);
    this.valueSize = 0;
    this.ariainvalid = undefined;
    this.ariarequired = undefined;
    this.autofocus = undefined;
    this.cols = undefined;
    this.description = undefined;
    this.dirname = undefined;
    this.disabled = undefined;
    this.input_id = 'textarea-' + utils.uuid();
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.readonly = undefined;
    this.required = undefined;
    this.rows = undefined;
    this.variant = 'semitransparent';
    this.wrap = undefined;
    this.value = undefined;
  }
  handleChange(event) {
    var _a;
    this.dbChange.emit(event);
    this.value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
  }
  render() {
    return (index.h(index.Host, null, index.h("label", { class: "elm-label", htmlFor: this.input_id }, this.label), index.h("textarea", { class: "elm-textarea", id: this.input_id, "aria-invalid": this.ariainvalid, "aria-required": this.ariarequired, autofocus: this.autofocus, cols: this.cols, "data-dirname": this.dirname, disabled: this.disabled, maxlength: this.maxlength, minlength: this.minlength, name: this.name, placeholder: this.placeholder, readonly: this.readonly, required: this.required, rows: this.rows, wrap: this.wrap, "data-variant": this.variant, onInput: (event) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.valueSize = event.target.value.length;
      }, onChange: (event) => this.handleChange(event) }, index.h("slot", null)), this.maxlength && (index.h("output", { htmlFor: this.input_id, id: `${this.input_id}-result` }, `${this.valueSize} / ${this.maxlength}`)), this.description && (index.h("p", { id: `${this.input_id}-hint`, class: "description" }, this.description))));
  }
};
DbTextarea.style = dbTextareaCss;

exports.db_textarea = DbTextarea;

//# sourceMappingURL=db-textarea.cjs.entry.js.map