import { ReactNode, lazy } from 'react'
import { makeRemoteAuthentication } from '../usecases'

const Login = lazy(() => import('@/presentation/pages/auth/login'))

export const makeLogin = (): ReactNode => {
  return <Login authentication={makeRemoteAuthentication()} />
}
