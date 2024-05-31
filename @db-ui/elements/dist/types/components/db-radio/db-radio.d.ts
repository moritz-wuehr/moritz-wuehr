export declare class DbRadio {
  /**
   * The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.
   */
  autofocus: boolean;
  /**
   * The checked content attribute is a boolean attribute that gives the default checkedness of the input element.
   */
  checked: boolean;
  /**
   * The disabled attribute can be set to keep a user from clicking on the input.
   */
  disabled: boolean;
  /**
   * The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
   */
  input_id: string;
  /**
   * The label attribute specifies the caption of the input.
   */
  label: string;
  /**
   * The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  name: string;
  /**
   * The required attribute is a boolean attribute. When specified, the element is required.
   */
  required: boolean;
  /**
   * The value content attribute gives the default value of the input element.
   */
  value: string;
  private handleChange;
  /**
   * Mapping for default change Event
   */
  dbChange: any;
  render(): any;
}
