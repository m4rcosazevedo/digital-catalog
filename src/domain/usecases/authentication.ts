import { AccountModel } from '@/domain/models'

export interface Authentication {
  auth(authentication: Authentication.Params): Promise<Authentication.Model>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }

  export type Model = AccountModel
}
