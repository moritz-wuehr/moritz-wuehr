export declare class DbInput {
  /**
   * The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.
   */
  ariainvalid?: 'false' | 'grammar' | 'spelling' | 'true';
  /**
   * The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.
   */
  ariarequired?: 'false' | 'true';
  /**
   * User agents sometimes have features for helping users fill forms in, for example prefilling the user's address based on earlier user input.
   */
  autocomplete?: 'off' | 'on';
  /**
   * The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.
   */
  autofocus: boolean;
  /**
   * The description attribute specifies the description/hint of the input.
   */
  description?: string;
  /**
   * The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string.
   */
  dirname?: string;
  /**
   * The disabled attribute can be set to keep a user from clicking on the input.
   */
  disabled: boolean;
  /**
   * The input_id of a labelable form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
   */
  input_id?: string;
  /**
   * The label attribute specifies the caption of the input.
   */
  label: string;
  /**
   * The list attribute is used to identify an element that lists predefined options suggested to the user.
   */
  list?: string;
  /**
  /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.
  */
  maxlength?: number;
  /**
  /* The minlength attribute, when it applies, is a form control minlength attribute.
  */
  minlength?: number;
  /**
   * The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  name?: string;
  /**
   * The pattern attribute specifies a regular expression against which the control's value is to be checked.
   */
  pattern?: string;
  /**
   * The step attribute specifies the granularity that the value must obey to on increasing or decreasing by the users selection.
   */
  step?: number;
  /**
   * The min attribute specifies the minimum value that is sufficient for this input.
   */
  min?: number;
  /**
   * The max attribute specifies the maximum value that is sufficient for this input.
   */
  max?: number;
  /**
   * The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.
   */
  placeholder?: string;
  /**
   * The readonly attribute controls whether or not the user can edit the form control.
   */
  readonly?: boolean;
  /**
   * The required attribute is a boolean attribute. When specified, the element is required.
   */
  required?: boolean;
  /**
   * The size attribute gives the number of characters that, in a visual rendering, the user agent is to allow the user to see while editing the element's value.
   */
  size?: number;
  /**
   * The type attribute changes the input type to text, number etc.
   */
  type?: string;
  /**
   * The value content attribute gives the default value of the input element.
   */
  value?: string;
  /**
   * The variant attribute specifies a visual expression of a select.
   */
  variant?: 'semitransparent' | 'white' | 'solid' | 'outline';
  private handleChange;
  /**
   * Mapping for default change Event
   */
  dbChange: any;
  render(): any;
}
