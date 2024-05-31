export declare class DbAccordion {
  /**
   * The emphasis to highlight the summary.
   */
  emphasis?: boolean;
  /**
   * The size increase the size of the summary.
   */
  size?: 'small' | 'regular' | 'large';
  /**
   * The summary which shows the text which is visible when the accordion is collapsed.
   */
  summary: string;
  /**
   * The emphasis to highlight the summary.
   */
  open?: boolean;
  render(): any;
}
