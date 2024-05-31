export declare class DbChip {
  /**
   *  Decides which interactiontype you want to use: filter (1-n); selection (1);
   */
  interactiontype: 'filter' | 'selection';
  /**
   * The disabled attribute can be set to keep a user from clicking on the chip.
   */
  disabled?: boolean;
  /**
   * Attribute to add icon before chip.
   */
  icon: string;
  /**
   * Attribute to add icon after chip.
   */
  iconafter?: string;
  /**
   * The input_id of a label form-related element in the same document as the label element. The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a label element.
   */
  input_id: string;
  /**
   *  Name to group multiple chips.
   */
  name: string;
  /**
   *  Selected state
   */
  selected?: boolean;
  /**
   * Predefined variants to change background color and font color.
   */
  variant: 'informative' | 'success' | 'warning' | 'error' | 'track' | 'poi-essen-trinken' | 'poi-einkaufen' | 'poi-gesundheit' | 'poi-kunst-kultur' | 'poi-wissenswertes' | 'poi-freizeit' | 'poi-zivile-rel-einrichtungen' | 'poi-dienstleistungen' | 'poi-db-services-einrichtung' | 'poi-wegeleitung';
  render(): any;
}
