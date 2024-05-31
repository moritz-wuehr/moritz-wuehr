export declare class DbButton {
  /**
   * If the button controls a grouping of other elements, the ariaexpanded state indicates whether the controlled grouping is currently expanded or collapsed.
   */
  ariaexpanded?: 'true' | 'false';
  /**
   * Defines the button as a toggle button. The value of aria-pressed describes the state of the button.
   */
  ariapressed?: 'true' | 'false';
  /**
   * The disabled attribute can be set to keep a user from clicking on the button.
   */
  disabled?: boolean;
  /**
   * The formaction attribute specifies where to send the form-data when a form is submitted. Only for type="submit".
   */
  formaction?: string;
  /**
   * The formenctype attribute specifies how form-data should be encoded before sending it to a server. Only for type="submit".
   */
  formenctype?: string;
  /**
   * The formmethod attribute specifies how to send the form-data (which HTTP method to use). Only for type="submit".
   */
  formmethod?: 'get' | 'post';
  /**
   * The formnovalidate attribute specifies which that the form-data should not be validated on submission. Only for type="submit".
   */
  formnovalidate?: boolean;
  /**
   * The formtarget attribute specifies where to display the response after submitting the form. Only for type="submit".
   */
  formtarget?: '_self' | '_blank' | '_parent' | '_top';
  /**
   * Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed in front of the elements content.
   */
  icon?: string;
  /**
   * Define an icon by it's identifier (like e.g. _download_, compare to [DB UI Icons](https://db-ui.github.io/core/patterns/base-icons/index.html)) to get displayed behind the elements content.
   */
  iconafter?: string;
  /**
   * Define the text next to the icon specified via the icon Property to get hidden.
   */
  icononly?: boolean;
  /**
   * The name attribute specifies a name for the button.
   */
  name?: string;
  /**
   * The tooltip attribute specifies the title of button.
   */
  tooltip?: string;
  /**
   * The type attribute specifies the type of button.
   */
  type: 'button' | 'reset' | 'submit';
  /**
   * The value attribute specifies an initial value for the button.
   */
  value?: string;
  /**
   * The variant attribute specifies a visual expression of button.
   */
  variant: 'primary' | 'secondary-outline' | 'secondary-solid' | 'tertiary-plain' | 'brand-primary';
  /**
   * The size attribute specifies the button size out of three sizes.
   */
  size?: 'small' | 'regular' | 'large';
  render(): any;
}
