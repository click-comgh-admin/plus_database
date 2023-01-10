export interface FormInput_I {
  id: string,
  name: string,
  type?: string,
  style?: string,
  class?: string,
  label?: string,
  value?: string,
  disabled?: boolean,
  inputClass?: string,
  labelClass?: string,
  placeholder?: string,
  selectOptions?: Array<SelectOption_I>,
};
export interface SelectOption_I {
  value?: string | Number,
  title?: string | Number,
  selected?: boolean,
};