import { TableBodyRow_dt } from "./row";

/**
 * requirements for body item
 */
 export interface TableBody_dt {
  id: number,
  identity?: Object[],
  row?: TableBodyRow_dt[],
};
