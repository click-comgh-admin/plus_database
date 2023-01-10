export interface NetworkCallResponse_I<Type> {
  success: boolean,
  message: string | Array<any>,
  data: Array<Type> | Type
}

export interface NetworkCallPaginResponse_I<Type> {
  count: number,
  next: string,
  previous: string,
  results: Array<Type>
}

export interface NetworkCallDatatableResponse_I<Type> {
  draw?: string,
  recordsTotal?: number,
  recordsFiltered?: number,
  datatable_plugin?: boolean,
  data: Array<Type>
}

export interface NetworkCallPostResponse_I {
  success: boolean,
  message: string | Array<NetworkCallError_I>,
  nameError: Array<NetworkCallError_I>,
  unknownError: Array<NetworkCallError_I>,
  data: Array<any>
}

export interface NetworkCallNonFieldErrors_I<Type> {
  non_field_errors: Array<Type> | Type
}

export interface NetworkCallError_I {
  id: string,
  errors: Array<string>
}

export type NetworkCallResponseMethod_I = "get" | "post"  | "post-file" | "put" | "patch" | "delete";