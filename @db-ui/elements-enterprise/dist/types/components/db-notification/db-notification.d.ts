export declare class DbNotification {
  /**
   * Variant will be added to the element containing the alert or status message
   * that will be read aloud by screen readers.
   */
  variant: 'alert' | 'status';
  /**
   * The type attribute is used to set the type of the notification, will change
   * styling accordingly.
   */
  type: 'error' | 'informative' | 'success' | 'warning';
  private getVariant;
  render(): any;
}
