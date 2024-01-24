import { Authentication } from '@/domain/usecases'
import { mockAccountModel } from '.'

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: 'any_email',
  password: 'any_password'
})

export const mockAuthenticationModel = (): Authentication.Model => mockAccountModel()

export class AuthenticationSpy implements Authentication {
  account = mockAuthenticationModel()
  params: Authentication.Params = {
    email: '',
    password: ''
  }
  callsCount = 0

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
