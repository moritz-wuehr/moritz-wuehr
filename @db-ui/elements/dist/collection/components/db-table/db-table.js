import { h } from "@stencil/core";
export class DbTable {
  constructor() {
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
    return (h("div", null, h("table", { class: "cmp-table", "data-border": this.border ? this.border : null, "data-density": this.density ? this.density : null, style: { '--table---fontSize': this.fontsize }, "data-rows": this.stripes ? this.stripes : null, "data-sticky": this.sticky ? this.sticky : null }, h("caption", null, caption), h("thead", { "data-align": this.align ? this.align : null, "data-vertical-align": this.verticalalign ? this.verticalalign : null }, h("tr", null, rowTitle && h("th", { scope: "col" }, rowTitle), headers.map((head, index) => (h("th", { key: `table-header-${index}`, scope: "col" }, head))))), h("tbody", { "data-align": this.bodyalign ? this.bodyalign : null, "data-vertical-align": this.bodyverticalalign ? this.bodyverticalalign : null }, isRowData &&
      rows.map((obj, idx) => {
        return (h("tr", { key: `row-${idx}`, class: `row-${idx}` }, showRowTitles && h("th", { scope: "row" }, rowTitles[idx]), headers.map((table, index) => {
          var _a;
          // If no row is provided, return empty cell [null, null]
          const [icon, cellText] = (_a = obj[table]) !== null && _a !== void 0 ? _a : [null, null];
          return (h("td", { key: `cell-${idx}-${index}` }, icon && h("db-icon", { icon: icon }), cellText));
        })));
      }), !isRowData &&
      columnIter.map((num, idx) => (h("tr", { key: `row-${idx}`, class: `row-${num}` }, showRowTitles && h("th", { scope: "row" }, rowTitles[idx]), headers.map((table, index) => {
        var _a;
        const [icon, cellText] = (_a = columns[table][idx]) !== null && _a !== void 0 ? _a : [
          null,
          null
        ];
        return (h("td", { key: `cell-${idx}-${index}` }, icon && h("db-icon", { icon: icon }), cellText));
      }))))))));
  }
  static get is() { return "db-table"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["db-table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["db-table.css"]
    };
  }
  static get properties() {
    return {
      "tabledata": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | object",
          "resolved": "object | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The tabledata prop receives a stringified object of the type\n\"TableDataType\" and sets the initial value of the table.\nIt can also be set as a property from the outside via JavaScript"
        },
        "attribute": "tabledata",
        "reflect": false
      },
      "align": {
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
          "text": "The align prop sets the data-align attribute on the thead\nelement of the rendered table. Valid values are \"left\" (default), \"center\",\n\"bottom\""
        },
        "attribute": "align",
        "reflect": true,
        "defaultValue": "''"
      },
      "verticalalign": {
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
          "text": "The verticalalign prop sets the data-vertical-align attribute on\nthe thead element of the rendered table. Valid values are \"top\"\n(default), \"middle\", \"bottom\""
        },
        "attribute": "verticalalign",
        "reflect": true,
        "defaultValue": "''"
      },
      "bodyalign": {
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
          "text": "The bodyalign prop sets the data-align attribute on\nthe tbody element of the rendered table. Valid values are \"left\"\n(default), \"center\", \"bottom\""
        },
        "attribute": "bodyalign",
        "reflect": true,
        "defaultValue": "''"
      },
      "bodyverticalalign": {
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
          "text": "The bodyverticalalign prop sets the data-vertical-align attribute\non the tbody element of the rendered table. Valid values are \"top\"\n(default), \"middle\", \"bottom\""
        },
        "attribute": "bodyverticalalign",
        "reflect": true,
        "defaultValue": "''"
      },
      "border": {
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
          "text": "The border prop sets the data-border attribute\non the table element of the rendered table. Valid values are \"around\",\n\"horizontal\""
        },
        "attribute": "border",
        "reflect": true,
        "defaultValue": "''"
      },
      "density": {
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
          "text": "The density prop sets the data-density attribute\non the table element of the rendered table. Valid values are \"small\",\n\"regular\", \"large\""
        },
        "attribute": "density",
        "reflect": true,
        "defaultValue": "''"
      },
      "fontsize": {
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
          "text": "The fontsize prop sets the the font size of the style attribute\non the table element of the rendered table."
        },
        "attribute": "fontsize",
        "reflect": true,
        "defaultValue": "'1rem'"
      },
      "stripes": {
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
          "text": "The stripes prop sets the the zebra stripes coloring of the rendered table."
        },
        "attribute": "stripes",
        "reflect": true,
        "defaultValue": "''"
      },
      "sticky": {
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
          "text": "The sticky prop sets the table header stickyness of the rendered table."
        },
        "attribute": "sticky",
        "reflect": true,
        "defaultValue": "''"
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "tabledata",
        "methodName": "validateTableData"
      }];
  }
}
//# sourceMappingURL=db-table.js.map
