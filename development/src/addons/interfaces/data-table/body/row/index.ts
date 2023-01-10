import { TemplateResult } from "lit";

/**
 * requirements for body row item
 */
 export interface TableBodyRow_dt {
  content: TemplateResult,
  class?: string,
  centered?: boolean,
  numeric?: boolean,
};
