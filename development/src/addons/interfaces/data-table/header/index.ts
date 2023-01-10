import { TemplateResult } from "lit";

/**
 * requirements for header item
 */
export interface TableHeader_dt {
  title?: TemplateResult,
  class?: string,
  centered?: boolean,
  right?: boolean,
  bold?: boolean,
  /**
   * true == ascending, false == descending, null == none
   */
  ascending?: boolean,
  sort?: "ascending" | "descending" | "none" | "other",
};
