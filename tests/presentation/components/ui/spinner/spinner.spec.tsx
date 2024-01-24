import { Spinner } from '@/presentation/components'
import { render, screen } from '@testing-library/react'

describe('Spinner', () => {
  it('should render', () => {
    render(<Spinner />)

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })
})
