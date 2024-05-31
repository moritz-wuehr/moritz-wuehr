export declare class DbNotifications {
  /**
   * The arialive attribute will interrupt the screenreader immediately and read
   * out the notification if set to "assertive", while it will wait for the
   * user's idleness when set to "polite"
   */
  arialive: 'assertive' | 'polite';
  /**
   * Notifications have two variants ("hovering" and "alert") which change the styling.
   */
  variant: 'alert' | 'hovering';
  render(): any;
}
