import { QueryWrapper } from '@/presentation/components'
import { render, screen } from '@testing-library/react'
import { mockUseQuery } from '@tests/infra/mocks'

jest.mock('react-query')

describe('QueryWrapper', () => {
  const queryKey = 'test-query'
  const fetchData = jest.fn()
  const children = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render Spinner when isLoading is true', () => {
    const mockedUseQuery = mockUseQuery()
    mockedUseQuery.mockReturnValue({ data: null, error: null, isLoading: true })
    render(<QueryWrapper queryKey={queryKey} fetchData={fetchData} children={children} />)

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
    expect(fetchData).not.toHaveBeenCalled()
    expect(children).not.toHaveBeenCalled()
  })

  it('should throw error when error is truthy', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    const messageError = 'Test error'

    const mockedUseQuery = mockUseQuery()
    mockedUseQuery.mockReturnValue({
      data: null,
      error: new Error(messageError),
      isLoading: false,
      status: 'error'
    })
    expect(() =>
      render(<QueryWrapper queryKey={queryKey} fetchData={fetchData} children={children} />)
    ).toThrow(messageError)
  })

  it('should render children when data is truthy', () => {
    const mockedUseQuery = mockUseQuery()
    const data = { test: 'test' }
    mockedUseQuery.mockReturnValue({ data, error: null, isLoading: false })
    render(<QueryWrapper queryKey={queryKey} fetchData={fetchData} children={children} />)

    expect(children).toHaveBeenCalledWith(data)
  })
})
