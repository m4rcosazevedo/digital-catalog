export type HttpResponse<T = unknown> = {
  statusCode: number
  body?: T
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest<T = unknown> = {
  url: string
  method: HttpMethod
  body?: T
  headers?: Partial<unknown>
}

export interface HttpClient<R = unknown> {
  request: (data: HttpRequest<R>) => Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500
}
