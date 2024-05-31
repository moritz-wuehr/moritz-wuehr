export declare class DbTab {
  /**
   * If the tab is checked/active.
   */
  active: boolean;
  /**
   * The label of the tab, shown in the tab-bar.
   */
  label: string;
  /**
   * The name of the tab bar, is required for grouping multiple tabs together. Otherwise content won't switch by clicking the tabs.
   */
  name: string;
  private readonly id;
  constructor();
  render(): any;
}
