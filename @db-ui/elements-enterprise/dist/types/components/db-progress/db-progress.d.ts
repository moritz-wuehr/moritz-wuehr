export declare class DbProgress {
  /**
   * The currentValue of the progress indicator.
   */
  value: number;
  /**
   * The currentValue of the progress indicator.
   */
  max: number;
  /**
   * Optional id - otherwise random id will be provided
   */
  htmlid: string;
  /**
   * The percentage sign - default %.
   */
  percentagesign: string;
  /**
   * As a circle
   */
  circle: boolean;
  /**
   * Indeterminate
   */
  indeterminate: boolean;
  render(): any;
}
