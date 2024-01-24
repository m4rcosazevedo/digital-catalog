import { useQuery } from 'react-query'

type MockUseQueryParams = {
  data: unknown | null
  error: unknown | null
  status: string
  isLoading: boolean
}

export const mockUseQueryResult = (): MockUseQueryParams => {
  return {
    data: [
      {
        id: 1,
        name: 'any_name',
        email: 'any_email'
      }
    ],
    error: null,
    status: 'success',
    isLoading: false
  }
}

export const mockUseQuery = (): jest.Mock => {
  const mockedUseQuery = useQuery as jest.Mock
  mockedUseQuery.mockClear().mockReturnValue(mockUseQueryResult())
  return mockedUseQuery
}
