import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, ServerError, UnexpectedError } from '@/domain/errors'
import { Authentication } from '@/domain/usecases'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<Authentication.Model>
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      case HttpStatusCode.serverError:
        throw new ServerError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}
