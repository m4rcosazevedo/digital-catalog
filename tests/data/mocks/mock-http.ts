import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export const mockHttpRequest = (): HttpRequest => ({
  url: 'any_url',
  method: 'post',
  body: {
    name: 'any_name'
  },
  headers: {
    any_header: 'any_value'
  }
})

export class HttpClientSpy<R = unknown> implements HttpClient<R> {
  url?: string
  method?: string
  body?: unknown
  headers?: unknown
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  }
}
