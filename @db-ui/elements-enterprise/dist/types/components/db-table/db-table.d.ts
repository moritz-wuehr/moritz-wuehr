import { TableDataType } from './type';
export declare class DbTable {
  private errorTableData;
  /**
   * The tabledata prop receives a stringified object of the type
   * "TableDataType" and sets the initial value of the table.
   * It can also be set as a property from the outside via JavaScript
   */
  tabledata: string | object;
  /**
   * Either holds the value of the validated tabledata prop or "errorTableData"
   */
  private validTableData;
  /**
   * Validates and sets the value of validTableData upon modification of the
   * tabledata attribute/property.
   */
  validateTableData(newTableData: TableDataType): void;
  /**
   * Validate incoming table data props once on creation because they do not fire @watch
   */
  componentWillLoad(): void;
  /**
   * The align prop sets the data-align attribute on the thead
   * element of the rendered table. Valid values are "left" (default), "center",
   * "bottom"
   */
  align?: string;
  /**
   * The verticalalign prop sets the data-vertical-align attribute on
   * the thead element of the rendered table. Valid values are "top"
   * (default), "middle", "bottom"
   */
  verticalalign?: string;
  /**
   * The bodyalign prop sets the data-align attribute on
   * the tbody element of the rendered table. Valid values are "left"
   * (default), "center", "bottom"
   */
  bodyalign?: string;
  /**
   * The bodyverticalalign prop sets the data-vertical-align attribute
   * on the tbody element of the rendered table. Valid values are "top"
   * (default), "middle", "bottom"
   */
  bodyverticalalign?: string;
  /**
   * The border prop sets the data-border attribute
   * on the table element of the rendered table. Valid values are "around",
   * "horizontal"
   */
  border?: string;
  /**
   * The density prop sets the data-density attribute
   * on the table element of the rendered table. Valid values are "small",
   * "regular", "large"
   */
  density?: string;
  /**
   * The fontsize prop sets the the font size of the style attribute
   * on the table element of the rendered table.
   */
  fontsize?: string;
  /**
   * The stripes prop sets the the zebra stripes coloring of the rendered table.
   */
  stripes?: string;
  /**
   * The sticky prop sets the table header stickyness of the rendered table.
   */
  sticky?: string;
  /**
   * Without framework (Angular, React, Vue) we will need to pass a tabledata as
   * string. parseTabularData() will return a fallback so the renderd table can
   * inform the user about a mismatching value if the string cannot be parsed.
   */
  private parseTabularData;
  /**
   * We need to know which column of the table is the longest so we can fill
   * shorter columns with empty cells
   */
  private calcColumnLength;
  private isRowData;
  render(): any;
}
