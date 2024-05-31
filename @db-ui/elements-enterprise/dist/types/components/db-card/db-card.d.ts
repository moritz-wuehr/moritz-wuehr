export declare class DbCard {
  /**
   * The alt attribute for the image.
   */
  alt: string;
  /**
   * The header represents the title of the card. It's optional and you can use slot for custom tags.
   */
  header: string;
  /**
   * The content represents the content of the card. It's optional and you can use slot for custom tags.
   */
  content: string;
  /**
   * The prop image can be used instead of illustration to show a custom img.
   */
  image: string;
  /**
   * The illustration which will show a predefined svg. -Development: enum can be generated with /scripts/illustration-generator-
   */
  illustration: 'alarm-clock' | 'bicycle' | 'blizzard' | 'broken' | 'buggy' | 'bus' | 'calendar' | 'car' | 'chat' | 'christmas' | 'clock-moving' | 'coffee-cup' | 'compass' | 'construction-sign' | 'construction-worker' | 'customer-feedback' | 'db-clock' | 'db-comfort-checkin' | 'db-ticket-shop' | 'db-ticket-vending-machine' | 'db-trainstation-with-train' | 'db-trainstation' | 'db-travel-center' | 'db-video-travel-center' | 'delayed' | 'der-kleine-ice' | 'diamond' | 'disruptions' | 'distance' | 'error' | 'ffp2-mask-with-sign' | 'ffp2-mask' | 'fokus' | 'gaming-no-wire' | 'gaming' | 'green-energy' | 'green' | 'handshake' | 'handwashing' | 'hashtag' | 'heart' | 'home' | 'information' | 'itinerary' | 'kiosk' | 'laptop' | 'local-train' | 'location' | 'lost-and-found' | 'luggage' | 'mask' | 'mini-store' | 'mobileticket-brand' | 'mobileticket-feature' | 'movie' | 'news' | 'newsletter' | 'newspaper' | 'no-handshaking' | 'onlineshop-brand' | 'onlineshop-feature' | 'onlineticket-brand' | 'onlineticket-feature' | 'passenger-rights' | 'podcast' | 'poi-berlin-copy' | 'poi-berlin' | 'restaurant' | 'savings' | 'scan-ticket-printout' | 'search' | 'self-driving' | 'show-ticket' | 'single-entry' | 'smartphone' | 'sport' | 'suitcase' | 'tablet' | 'thunderstorm' | 'tickets' | 'timetable' | 'tips' | 'transportation-advertising' | 'whats-schmutzig' | 'wifi';
  /**
   * The illustration-path defines the path to DB UI Core illustrations. If you want to use other/custom images use the image prop instead.
   */
  uiCoreIllustrationPath: string;
  /**
   * The variant which is banner or title.
   */
  variant: 'banner' | 'title';
  private illustrationPaths;
  render(): any;
}
