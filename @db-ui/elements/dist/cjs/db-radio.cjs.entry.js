'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');
const utils = require('./utils-616f1e50.js');

const dbRadioCss = "@charset \"UTF-8\";.sc-db-radio:where(html,).sc-db-radio-h{line-height:1.15}.sc-db-radio:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-radio:where(dl,ol.sc-db-radio,ul).sc-db-radio .sc-db-radio:where(dl,ol.sc-db-radio,ul).sc-db-radio{margin-block-end:0;margin-block-start:0}.sc-db-radio:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-radio:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-radio:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-radio:where(b,strong).sc-db-radio{font-weight:bolder}.sc-db-radio:where(code,kbd.sc-db-radio,samp).sc-db-radio{font-family:monospace, monospace;font-size:1em}.sc-db-radio:where(small){font-size:80%}.sc-db-radio:where(table){border-color:currentColor;text-indent:0}.sc-db-radio:where(button,input.sc-db-radio,select).sc-db-radio{margin:0}.sc-db-radio:where(button){text-transform:none}.sc-db-radio:where(button,input.sc-db-radio:is([type=button i],[type=reset i].sc-db-radio,[type=submit i])).sc-db-radio{-webkit-appearance:button}.sc-db-radio:where(progress){vertical-align:baseline}.sc-db-radio:where(select){text-transform:none}.sc-db-radio:where(textarea){margin:0}.sc-db-radio:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-radio::-webkit-inner-spin-button,.sc-db-radio::-webkit-outer-spin-button{height:auto}.sc-db-radio::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-radio::-webkit-search-decoration{-webkit-appearance:none}.sc-db-radio::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-radio:where(button,input.sc-db-radio:is([type=button i],[type=color i].sc-db-radio,[type=reset i].sc-db-radio,[type=submit i])).sc-db-radio::-moz-focus-inner{border-style:none;padding:0}.sc-db-radio:where(button,input.sc-db-radio:is([type=button i],[type=color i].sc-db-radio,[type=reset i].sc-db-radio,[type=submit i])).sc-db-radio::-moz-focusring{outline:1px dotted ButtonText}.sc-db-radio:where(:-moz-ui-invalid){box-shadow:none}.sc-db-radio:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-radio:where(dialog:not([open])){display:none}.sc-db-radio:where(summary){display:list-item}html.sc-db-radio,.sc-db-radio-h{box-sizing:var(--db-box-sizing, border-box)}*.sc-db-radio,.sc-db-radio::before,.sc-db-radio::after{box-sizing:inherit}img.sc-db-radio,embed.sc-db-radio,iframe.sc-db-radio,object.sc-db-radio,video.sc-db-radio{height:auto;max-width:100%}iframe.sc-db-radio{border:0}nav.sc-db-radio ol.sc-db-radio,nav.sc-db-radio ul.sc-db-radio,[role=navigation].sc-db-radio ol.sc-db-radio,[role=navigation].sc-db-radio ul.sc-db-radio{list-style:none;margin:0;padding:0}.sc-db-radio:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-radio:is(a,button.sc-db-radio,input.sc-db-radio,textarea.sc-db-radio,summary).sc-db-radio{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-radio:is(a,button.sc-db-radio,input.sc-db-radio,textarea.sc-db-radio,summary).sc-db-radio:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-radio:where(ul){list-style-type:\"•   \"}.sc-db-radio:where(ul) li.sc-db-radio::marker{color:#ec0016}details.sc-db-radio>*.sc-db-radio,details.sc-db-radio>.sc-db-radio::before,details.sc-db-radio>.sc-db-radio::after{box-sizing:var(--db-box-sizing, border-box)}body.sc-db-radio,.sc-db-radio-h,div.sc-db-radio,button.sc-db-radio,input.sc-db-radio,select.sc-db-radio,textarea.sc-db-radio{color:#282d37;font-family:\"DB Screen Sans\", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-radio{color:inherit}.elm-radio.sc-db-radio{appearance:none;background-color:rgba(255, 255, 255, 0.1);border:0.0625rem solid #282d37;border-radius:1em;display:inline-block;font-size:1rem;height:1.25em;transition:border-width 0.5s ease;width:1.25em}.elm-radio[type=radio].sc-db-radio{vertical-align:sub}.elm-radio.sc-db-radio:enabled:hover:not(:checked){background-color:rgba(40, 45, 55, 0.14)}.elm-radio.sc-db-radio:enabled:active{background-color:rgba(40, 45, 55, 0.3)}.elm-radio.sc-db-radio:checked{border-width:0.375em}.elm-radio.sc-db-radio:is(:user-invalid),.elm-radio[aria-invalid=true].sc-db-radio{border-color:#c13e34}.elm-radio.sc-db-radio+label.sc-db-radio{margin-left:0.25rem}.elm-radio.sc-db-radio:disabled,.elm-radio.sc-db-radio:disabled+label.sc-db-radio{opacity:0.5}@media (prefers-reduced-motion: reduce){.elm-radio.sc-db-radio{transition-duration:0.01s !important}}";

const DbRadio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dbChange = index.createEvent(this, "dbChange", 7);
    this.autofocus = undefined;
    this.checked = undefined;
    this.disabled = undefined;
    this.input_id = 'radio-' + utils.uuid();
    this.label = undefined;
    this.name = undefined;
    this.required = undefined;
    this.value = undefined;
  }
  handleChange(event) {
    this.dbChange.emit(event);
  }
  render() {
    return (index.h(index.Host, null, index.h("input", { type: "radio", class: "elm-radio", id: this.input_id, autofocus: this.autofocus, checked: this.checked, disabled: this.disabled, name: this.name, required: this.required, value: this.value, onChange: (event) => this.handleChange(event) }), index.h("label", { class: "elm-label", htmlFor: this.input_id }, this.label)));
  }
};
DbRadio.style = dbRadioCss;

exports.db_radio = DbRadio;

//# sourceMappingURL=db-radio.cjs.entry.js.map