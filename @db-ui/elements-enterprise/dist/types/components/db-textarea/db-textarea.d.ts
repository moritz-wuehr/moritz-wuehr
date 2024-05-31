export declare class DbTextarea {
  valueSize: number;
  /**
   * The ariainvalid attribute is used to indicate that the value entered into an input field does not conform to the format expected by the application.
   */
  ariainvalid: 'false' | 'grammar' | 'spelling' | 'true';
  /**
   * The ariarequired attribute can be applied to a form element, to indicate to an AT that it is required to complete the form.
   */
  ariarequired: 'false' | 'true';
  /**
   * The autofocus content attribute allows the author to indicate that a control is to be focused as soon as the page is loaded, allowing the user to just start typing without having to manually focus the main control.
   */
  autofocus: boolean;
  /**
   * The cols attribute specifies the expected maximum number of characters per line.
   */
  cols: number;
  /**
   * The description attribute specifies the description/hint of the textarea.
   */
  description: string;
  /**
   * The dirname attribute on a form control element enables the submission of the directionality of the element, and gives the name of the control that contains this value during form submission. If such an attribute is specified, its value must not be the empty string.
   */
  dirname: string;
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
  /* The maxlength attribute, controlled by a dirty value flag, declares a limit on the number of characters a user can input.
  */
  maxlength: number;
  /**
  /* The minlength attribute, when it applies, is a form control minlength attribute.
  */
  minlength: number;
  /**
   * The name content attribute gives the name of the form control, as used in form submission and in the form element's elements object. If the attribute is specified, its value must not be the empty string.
   */
  name: string;
  /**
   * The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry.
   */
  placeholder: string;
  /**
   * The readonly attribute controls whether or not the user can edit the form control.
   */
  readonly: boolean;
  /**
   * The required attribute is a boolean attribute. When specified, the element is required.
   */
  required: boolean;
  /**
   * The rows attribute specifies the number of lines to show.
   */
  rows: number;
  /**
   * The variant attribute specifies a visual expression of a select.
   */
  variant: 'semitransparent' | 'white' | 'solid' | 'outline';
  /**
   * The wrap attribute indicates how the control wraps text.
   */
  wrap: 'soft' | 'hard' | 'off ';
  /**
   * The value attribute reflects the changes to the textarea which are also emitted via event
   */
  value: string;
  private handleChange;
  /**
   * Mapping for default change Event
   */
  dbChange: any;
  render(): any;
}
