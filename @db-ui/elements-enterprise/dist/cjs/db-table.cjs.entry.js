'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec29e93.js');

const dbTableCss = "@charset \"UTF-8\";.sc-db-table:where(html,).sc-db-table-h{line-height:1.15}.sc-db-table:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-table:where(dl,ol.sc-db-table,ul).sc-db-table .sc-db-table:where(dl,ol.sc-db-table,ul).sc-db-table{margin-block-end:0;margin-block-start:0}.sc-db-table:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-table:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-table:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.sc-db-table:where(b,strong).sc-db-table{font-weight:bolder}.sc-db-table:where(code,kbd.sc-db-table,samp).sc-db-table{font-family:monospace, monospace;font-size:1em}.sc-db-table:where(small){font-size:80%}.sc-db-table:where(table){border-color:currentColor;text-indent:0}.sc-db-table:where(button,input.sc-db-table,select).sc-db-table{margin:0}.sc-db-table:where(button){text-transform:none}.sc-db-table:where(button,input.sc-db-table:is([type=button i],[type=reset i].sc-db-table,[type=submit i])).sc-db-table{-webkit-appearance:button}.sc-db-table:where(progress){vertical-align:baseline}.sc-db-table:where(select){text-transform:none}.sc-db-table:where(textarea){margin:0}.sc-db-table:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-table::-webkit-inner-spin-button,.sc-db-table::-webkit-outer-spin-button{height:auto}.sc-db-table::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-table::-webkit-search-decoration{-webkit-appearance:none}.sc-db-table::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-table:where(button,input.sc-db-table:is([type=button i],[type=color i].sc-db-table,[type=reset i].sc-db-table,[type=submit i])).sc-db-table::-moz-focus-inner{border-style:none;padding:0}.sc-db-table:where(button,input.sc-db-table:is([type=button i],[type=color i].sc-db-table,[type=reset i].sc-db-table,[type=submit i])).sc-db-table::-moz-focusring{outline:1px dotted ButtonText}.sc-db-table:where(:-moz-ui-invalid){box-shadow:none}.sc-db-table:where(dialog){background-color:#fff;border:solid;color:#000;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:fit-content}.sc-db-table:where(dialog:not([open])){display:none}.sc-db-table:where(summary){display:list-item}html.sc-db-table,.sc-db-table-h{box-sizing:var(--db-box-sizing, border-box)}*.sc-db-table,.sc-db-table:after,.sc-db-table:before{box-sizing:inherit}embed.sc-db-table,iframe.sc-db-table,img.sc-db-table,object.sc-db-table,video.sc-db-table{height:auto;max-width:100%}iframe.sc-db-table{border:0}[role=navigation].sc-db-table ol.sc-db-table,[role=navigation].sc-db-table ul.sc-db-table,nav.sc-db-table ol.sc-db-table,nav.sc-db-table ul.sc-db-table{list-style:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");margin:0;padding:0}.sc-db-table:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-table:is(a,button.sc-db-table,input.sc-db-table,textarea.sc-db-table,summary).sc-db-table{--db-focus-outline-size:max(2px,0.08em)}.sc-db-table:is(a,button.sc-db-table,input.sc-db-table,textarea.sc-db-table,summary).sc-db-table:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-table:where(ul){list-style-type:\"•   \"}.sc-db-table:where(ul) li.sc-db-table::marker{color:#ec0016}details.sc-db-table>*.sc-db-table,details.sc-db-table>.sc-db-table:after,details.sc-db-table>.sc-db-table:before{box-sizing:var(--db-box-sizing, border-box)}body.sc-db-table,.sc-db-table-h,button.sc-db-table,div.sc-db-table,input.sc-db-table,select.sc-db-table,textarea.sc-db-table{color:#282d37;font-family:DB Screen Sans, Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-table{color:inherit}.cmp-table.sc-db-table{border-collapse:collapse;font-size:var(--table---fontSize, inherit);text-align:left}.cmp-table.sc-db-table,.cmp-table.sc-db-table>caption.sc-db-table{box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05)}.cmp-table.sc-db-table caption.sc-db-table{font-weight:700;padding:1rem 0.75rem;text-align:left}.cmp-table.sc-db-table thead.sc-db-table{border-bottom:0.0625rem solid #282d37;border-top:0.0625rem solid #282d37}.cmp-table.sc-db-table thead.sc-db-table th.sc-db-table{color:#646973}.cmp-table.sc-db-table th.sc-db-table{font-weight:400}.cmp-table.sc-db-table th.sc-db-table,.cmp-table.sc-db-table td.sc-db-table{padding:0.75rem;text-align:inherit;vertical-align:inherit}.cmp-table.sc-db-table th.sc-db-table:hover,.cmp-table.sc-db-table td.sc-db-table:hover{resize:horizontal}.cmp-table.sc-db-table th.sc-db-table:hover:not(:has(.cmp-overflow-menu)),.cmp-table.sc-db-table td.sc-db-table:hover:not(:has(.cmp-overflow-menu)){overflow:auto}.cmp-table.sc-db-table tbody.sc-db-table{border-bottom:0.0625rem solid #282d37}.cmp-table.sc-db-table tbody.sc-db-table th.sc-db-table:first-child{border-right:1px solid #4f4b41}.cmp-table.sc-db-table thead[data-align=left].sc-db-table,.cmp-table.sc-db-table tbody[data-align=left].sc-db-table,.cmp-table.sc-db-table tr[data-align=left].sc-db-table,.cmp-table.sc-db-table th[data-align=left].sc-db-table,.cmp-table.sc-db-table td[data-align=left].sc-db-table{text-align:left}.cmp-table.sc-db-table thead[data-align=center].sc-db-table,.cmp-table.sc-db-table tbody[data-align=center].sc-db-table,.cmp-table.sc-db-table tr[data-align=center].sc-db-table,.cmp-table.sc-db-table th[data-align=center].sc-db-table,.cmp-table.sc-db-table td[data-align=center].sc-db-table{text-align:center}.cmp-table.sc-db-table thead[data-align=right].sc-db-table,.cmp-table.sc-db-table tbody[data-align=right].sc-db-table,.cmp-table.sc-db-table tr[data-align=right].sc-db-table,.cmp-table.sc-db-table th[data-align=right].sc-db-table,.cmp-table.sc-db-table td[data-align=right].sc-db-table{text-align:right}.cmp-table.sc-db-table thead[data-vertical-align=top].sc-db-table,.cmp-table.sc-db-table tbody[data-vertical-align=top].sc-db-table,.cmp-table.sc-db-table tr[data-vertical-align=top].sc-db-table,.cmp-table.sc-db-table th[data-vertical-align=top].sc-db-table,.cmp-table.sc-db-table td[data-vertical-align=top].sc-db-table{vertical-align:top}.cmp-table.sc-db-table thead[data-vertical-align=middle].sc-db-table,.cmp-table.sc-db-table tbody[data-vertical-align=middle].sc-db-table,.cmp-table.sc-db-table tr[data-vertical-align=middle].sc-db-table,.cmp-table.sc-db-table th[data-vertical-align=middle].sc-db-table,.cmp-table.sc-db-table td[data-vertical-align=middle].sc-db-table{vertical-align:middle}.cmp-table.sc-db-table thead[data-vertical-align=bottom].sc-db-table,.cmp-table.sc-db-table tbody[data-vertical-align=bottom].sc-db-table,.cmp-table.sc-db-table tr[data-vertical-align=bottom].sc-db-table,.cmp-table.sc-db-table th[data-vertical-align=bottom].sc-db-table,.cmp-table.sc-db-table td[data-vertical-align=bottom].sc-db-table{vertical-align:bottom}.cmp-table[data-border=horizontal].sc-db-table tbody.sc-db-table tr.sc-db-table:not(:last-child) th.sc-db-table,.cmp-table[data-border=horizontal].sc-db-table tbody.sc-db-table tr.sc-db-table:not(:last-child) td.sc-db-table,.cmp-table[data-border=around].sc-db-table tbody.sc-db-table tr.sc-db-table:not(:last-child) th.sc-db-table,.cmp-table[data-border=around].sc-db-table tbody.sc-db-table tr.sc-db-table:not(:last-child) td.sc-db-table{border-bottom:1px solid #d7dce1}.cmp-table[data-border=around].sc-db-table tbody.sc-db-table th.sc-db-table:not(:first-child),.cmp-table[data-border=around].sc-db-table tbody.sc-db-table td.sc-db-table:not(:first-child){border-left:1px solid #d7dce1}.cmp-table[data-rows=zebra].sc-db-table tbody.sc-db-table tr.sc-db-table:nth-child(odd){backdrop-filter:blur(4px);background-color:rgba(40, 45, 55, 0.07)}.cmp-table[data-density=small].sc-db-table th.sc-db-table,.cmp-table[data-density=small].sc-db-table td.sc-db-table{padding:0.5rem}.cmp-table[data-density=large].sc-db-table th.sc-db-table,.cmp-table[data-density=large].sc-db-table td.sc-db-table{padding:1rem}.cmp-table[data-sticky=header].sc-db-table thead.sc-db-table,.cmp-table[data-sticky=header].sc-db-table tbody.sc-db-table th.sc-db-table{background-color:#fff;position:sticky;top:-1px}";

const DbTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.errorTableData = {
      caption: 'No valid table data provided',
      headers: ['Error parsing data'],
      columns: {
        'Error parsing data': ['please check data']
      },
      rows: [
        {
          error: [undefined, 'Error parsing data']
        }
      ]
    };
    this.tabledata = undefined;
    this.align = '';
    this.verticalalign = '';
    this.bodyalign = '';
    this.bodyverticalalign = '';
    this.border = '';
    this.density = '';
    this.fontsize = '1rem';
    this.stripes = '';
    this.sticky = '';
  }
  /**
   * Validates and sets the value of validTableData upon modification of the
   * tabledata attribute/property.
   */
  validateTableData(newTableData) {
    const { caption, headers, columns, rows } = newTableData;
    const columnKeys = typeof columns === 'object' && columns !== null
      ? Object.keys(columns)
      : [];
    const isHeader = (headers === null || headers === void 0 ? void 0 : headers.length) > 0;
    const isRowAndColumn = Array.isArray(rows) && columnKeys.length > 0;
    if (!caption || isRowAndColumn || !isHeader) {
      // eslint-disable-next-line no-console
      console.error('Table data invalid: check caption or headers/columns mismatch');
      this.validTableData = this.errorTableData;
      return;
    }
    this.validTableData = newTableData;
  }
  /**
   * Validate incoming table data props once on creation because they do not fire @watch
   */
  componentWillLoad() {
    this.validateTableData(this.parseTabularData(this.tabledata));
  }
  /**
   * Without framework (Angular, React, Vue) we will need to pass a tabledata as
   * string. parseTabularData() will return a fallback so the renderd table can
   * inform the user about a mismatching value if the string cannot be parsed.
   */
  parseTabularData(item) {
    try {
      if (typeof item === 'string') {
        return JSON.parse(item);
      }
      if (typeof item === 'object')
        return item;
    }
    catch (error) {
      return this.errorTableData;
    }
  }
  /**
   * We need to know which column of the table is the longest so we can fill
   * shorter columns with empty cells
   */
  calcColumnLength(tableHeaders, tableColumns) {
    return tableColumns === undefined
      ? []
      : tableHeaders.reduce((prevCol, currentCol) => {
        return prevCol < tableColumns[currentCol].length
          ? tableColumns[currentCol].length
          : prevCol;
      }, 0);
  }
  isRowData(tableData) {
    return !!Array.isArray(tableData.rows);
  }
  render() {
    const isRowData = this.isRowData(this.validTableData);
    const { caption, headers, columns, rows, rowTitles, rowTitle } = this.validTableData;
    const maxColumnLength = this.calcColumnLength(headers, columns);
    const columnIter = [...Array(maxColumnLength).keys()];
    const showRowTitles = (rowTitles === null || rowTitles === void 0 ? void 0 : rowTitles.length) > 0;
    return (index.h("div", null, index.h("table", { class: "cmp-table", "data-border": this.border ? this.border : null, "data-density": this.density ? this.density : null, style: { '--table---fontSize': this.fontsize }, "data-rows": this.stripes ? this.stripes : null, "data-sticky": this.sticky ? this.sticky : null }, index.h("caption", null, caption), index.h("thead", { "data-align": this.align ? this.align : null, "data-vertical-align": this.verticalalign ? this.verticalalign : null }, index.h("tr", null, rowTitle && index.h("th", { scope: "col" }, rowTitle), headers.map((head, index$1) => (index.h("th", { key: `table-header-${index$1}`, scope: "col" }, head))))), index.h("tbody", { "data-align": this.bodyalign ? this.bodyalign : null, "data-vertical-align": this.bodyverticalalign ? this.bodyverticalalign : null }, isRowData &&
      rows.map((obj, idx) => {
        return (index.h("tr", { key: `row-${idx}`, class: `row-${idx}` }, showRowTitles && index.h("th", { scope: "row" }, rowTitles[idx]), headers.map((table, index$1) => {
          var _a;
          // If no row is provided, return empty cell [null, null]
          const [icon, cellText] = (_a = obj[table]) !== null && _a !== void 0 ? _a : [null, null];
          return (index.h("td", { key: `cell-${idx}-${index$1}` }, icon && index.h("db-icon", { icon: icon }), cellText));
        })));
      }), !isRowData &&
      columnIter.map((num, idx) => (index.h("tr", { key: `row-${idx}`, class: `row-${num}` }, showRowTitles && index.h("th", { scope: "row" }, rowTitles[idx]), headers.map((table, index$1) => {
        var _a;
        const [icon, cellText] = (_a = columns[table][idx]) !== null && _a !== void 0 ? _a : [
          null,
          null
        ];
        return (index.h("td", { key: `cell-${idx}-${index$1}` }, icon && index.h("db-icon", { icon: icon }), cellText));
      }))))))));
  }
  static get watchers() { return {
    "tabledata": ["validateTableData"]
  }; }
};
DbTable.style = dbTableCss;

exports.db_table = DbTable;

//# sourceMappingURL=db-table.cjs.entry.js.map