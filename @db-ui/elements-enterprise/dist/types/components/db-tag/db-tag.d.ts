export declare class DbTag {
  /**
   * Attribute to add icon before tag.
   */
  icon: string;
  /**
   * Attribute to add icon after tag.
   */
  iconafter?: string;
  /**
   * Attribute for changing the size of the tag.
   */
  small: boolean;
  /**
   * Predefined variants to change background color and font color.
   */
  variant: 'informative' | 'success' | 'warning' | 'error' | 'track' | 'poi-essen-trinken' | 'poi-einkaufen' | 'poi-gesundheit' | 'poi-kunst-kultur' | 'poi-wissenswertes' | 'poi-freizeit' | 'poi-zivile-rel-einrichtungen' | 'poi-dienstleistungen' | 'poi-db-services-einrichtung' | 'poi-wegeleitung';
  render(): any;
}
