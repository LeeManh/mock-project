export interface SuccessResponse<TData> {
  message: string
  data: TData
}

export interface ErrorResponse<TData> {
  message: string
  data?: TData
}
