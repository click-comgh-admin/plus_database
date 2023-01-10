export interface SelectInput_I {
  value?: string | Number,
  title?: string | Number,
  selected?: boolean,
  apiType?: "plusDatabase" | "akwaabaApp" | "any";
};
export interface SelectInputOptions_I {
  id: number;
  name: string;
  selected: boolean;
  isSelected?: "true" | "false";
};

export interface SelectInputProcessedAjaxResponse_I {
  results: { id: number, text: string }[],
  total: number,
  totalShowing: number,
};


export interface SelectInputProcessedAjaxUrlParam_I {
  param: string,
  value: string,
};
