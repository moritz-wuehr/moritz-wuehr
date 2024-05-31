export declare class DbImage {
  /**
   * The image src URL.
   */
  src: string;
  /**
   * Optional modern image format srcset URL (like avif or webp).
   */
  modernformat: string;
  /**
   * Optional srcset for high density images
   */
  srcset: string;
  /**
   * The alt attribute is used by "screen reader" software so that a person who is listening to the content of a webpage (for instance, a person who is blind) can interact with this element.
   */
  alt: string;
  /**
   * Width for the image
   */
  width: number;
  /**
   * Height for the image
   */
  height: number;
  /**
   * Optional lazy loading attribute
   */
  loading: 'lazy';
  /**
   * Optional caption for the image
   */
  caption: string;
  /**
   * Optional responsive media queries as array of objects '[{srcset:"/path/to/picture.extension", media:"(min-width: 768px)"}]'
   */
  responsivemediaquery: string;
  /**
   * Optional id for the caption aria label - otherwise random id will be set
   */
  ariaid: string;
  private getBasicImage;
  private basicImageCaptionWrapper;
  private getPictureWrapper;
  private getResponsivePictureWrapper;
  private pictureCaptionWrapper;
  render(): any;
}
