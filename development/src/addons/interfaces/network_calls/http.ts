export interface NetworkCallHttp_I {
  jsonData?: any,
  response?: Response,
  error?: any
}

export interface NetworkCallHttpDownload_I {
  blobData?: Blob | MediaSource,
  response?: Response,
  error?: any
}