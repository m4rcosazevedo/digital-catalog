import { Button } from '@/components/ui/button/button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('Renders button on page', () => {
    render(<Button />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  // test('Applies className prop', () => {
  //   render(<Button className="custom-class" />)
  //   const buttonElement = screen.getByRole('button')
  //   expect(buttonElement).toHaveClass('custom-class')
  // })

  // test('Applies variant prop', () => {
  //   render(<Button variant="primary" />)
  //   const buttonElement = screen.getByRole('button')
  //   expect(buttonElement).toHaveClass('button-variant-primary')
  // })

  // test('Applies size prop', () => {
  //   render(<Button size="large" />)
  //   const buttonElement = screen.getByRole('button')
  //   expect(buttonElement).toHaveClass('button-size-large')
  // })

  // test('Applies additional props', () => {
  //   render(<Button data-testid="custom-button" />)
  //   const buttonElement = screen.getByTestId('custom-button')
  //   expect(buttonElement).toBeInTheDocument()
  // })
})
