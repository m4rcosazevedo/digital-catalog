import { HttpStatusCode } from '@/data/protocols/http'
import { RemoteAuthentication } from '@/data/usecases'
import { InvalidCredentialsError, ServerError, UnexpectedError } from '@/domain/errors'
import { mockAuthenticationModel, mockAuthenticationParams } from '@tests/domain/mocks'
import { HttpClientSpy } from '../mocks/mock-http'

type SutTypes = {
  sut: RemoteAuthentication
  httpClientSpy: HttpClientSpy<RemoteAuthentication.Model>
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteAuthentication.Model>()
  const sut = new RemoteAuthentication(url, httpClientSpy)

  return {
    httpClientSpy,
    sut
  }
}

describe('Usecase RemoteAuthentication', () => {
  it('should call HttpClient with correct values', async () => {
    const url = 'any_url'
    const { sut, httpClientSpy } = makeSut(url)
    const authenticationParams = mockAuthenticationParams()

    await sut.auth(authenticationParams)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(authenticationParams)
  })

  it('should throw InvalidCredentialError if HttpClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }

    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  it('should throw InvalidCredentialError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }

    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw InvalidCredentialError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new ServerError())
  })

  it('should return an Authentication.Model if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockAuthenticationModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const account = await sut.auth(mockAuthenticationParams())
    expect(account).toEqual(httpResult)
  })
})
