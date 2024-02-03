import { HttpClient } from '@/data/protocols/http'
import { RemoteAuthentication } from '@/data/usecases'
import { AccountModel } from '@/domain/models'
import { Authentication } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '../../http'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(
    makeApiUrl('/login'),
    makeAxiosHttpClient() as HttpClient<AccountModel>
  )
}
