import { ReactNode } from 'react'
import { useQuery } from 'react-query'
import { Spinner } from '..'

type QueryWrapperProps<T> = {
  queryKey: string
  fetchData: () => Promise<T>
  children: (data: T) => ReactNode
}

const QueryWrapper = <T,>({ queryKey, fetchData, children }: QueryWrapperProps<T>) => {
  const { data, error, status, isLoading } = useQuery(queryKey, fetchData)

  if (isLoading) {
    return <Spinner />
  }

  if (status === 'error') {
    throw error
  }

  return <>{children(data as T)}</>
}

export default QueryWrapper
