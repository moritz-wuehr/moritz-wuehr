export type DbMainnavigationItemType = {
  html: string;
  children?: DbMainnavigationItemType[];
};
export type DbMainnavigationDataType = {
  link: string;
  label: string;
  current?: boolean;
  children?: DbMainnavigationDataType[];
};
