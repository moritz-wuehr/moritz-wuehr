export declare class DbBrand {
  /**
   * The site-name-link attribute can be set to make the siteName clickable (set url to root) as well.
   */
  siteNameLink?: boolean;
  /**
   * The alt attribute can be set to define the alternative text for the DB logo.
   */
  alt?: string;
  /**
   * The href attribute can be set to reload the current application, in general you would go to the base path of your app.
   */
  anchorRef: string;
  /**
   * The title attribute can be set to show a hint while hovering over the brand.
   */
  anchorTitle?: string;
  /**
   * The rel attribute can be set to make a relationship to the current URL(https://developer.mozilla.org/en-US/docs/web/api/htmlanchorelement/rel).
   */
  anchorRelation?: string;
  /**
   * The src attribute can be set to define another path for the DB logo.
   */
  src?: string;
  render(): any;
}
