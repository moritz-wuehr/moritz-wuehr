export declare class DbToggle {
  /**
   * Optional id for the label - otherwise random id will be set
   */
  htmlid: string;
  /**
   * Disabled property
   */
  disabled: boolean;
  /**
   * Checked property
   */
  checked: boolean;
  /**
   * The name attribute specifies a name for the included input element.
   */
  name?: string;
  private handleChange;
  /**
   * Mapping for default change Event
   */
  dbChange: any;
  render(): any;
}
