import { DbLinkType } from '../components/db-link/db-link-type';
export declare const format: (first: string, middle: string, last: string) => string;
export declare const uuid: () => string;
/**
 *
 * @param doc calculates all css custom properties in root: scope
 * @return list of keys
 */
export declare const calcCustomProperties: (doc: Document) => any;
/**
 * @return - Promise with all css custom properties in the root: scope,
 * that is resoved when document load is complete
 */
export declare const listCustomProperties: () => Promise<any>;
/**
 * @return: Promisse, that resolve when document load is complete
 */
export declare const domReady: () => Promise<unknown>;
/**
 * Adds the class "elm-link" to a element which are not db-link
 * @param child the stencil element
 */
export declare const addElmLinkToElement: (child: Element) => void;
export declare const getDefaultLinkData: (compData: DbLinkType[]) => string;
/**
 * Adds the given variant as attribute for all db-links
 * @param host the stencil host element
 * @param variant icon variant
 */
export declare const addIconVariantToAllDbLinksRecursive: (host: Element, variant: '16-filled' | '20-filled' | '24-filled' | '32-filled' | '48-filled' | '64-filled' | '16-outline' | '20-outline' | '24-outline' | '32-outline' | '48-outline' | '64-outline') => void;
/**
 * Without framework (Angular, React, Vue) we will need to pass a data as
 * string.
 */
export declare const parseData: (item: string | object | unknown) => any;
