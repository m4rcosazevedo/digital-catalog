import { Footer } from '@/presentation/components'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  it('should render footer element', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
