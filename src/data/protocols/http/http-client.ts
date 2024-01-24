export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: unknown
  headers?: Partial<unknown>
}

export type HttpResponse<T = unknown | undefined> = {
  statusCode: number
  body?: T
}

export interface HttpClient<R = unknown> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  UnprocessableEntity = 422,
  serverError = 500
}
