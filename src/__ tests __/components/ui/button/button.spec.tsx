import { Button } from '@/components/ui/button/button'
import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'

type SutTypes = {
  element: HTMLElement
}

const makeSut = (props?: ComponentProps<typeof Button>): SutTypes => {
  render(<Button {...props}>Button</Button>)
  const element = screen.getByRole('button')

  return {
    element
  }
}

describe('Button', () => {
  test('Renders button on page', () => {
    const { element } = makeSut()
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Button')
  })

  test('Applies className prop', () => {
    const { element } = makeSut({
      className: "custom-class"
    })
    expect(element).toHaveClass('custom-class')
  })

  test('Applies variant prop default', () => {
    const { element } = makeSut({
      variant: "default"
    })
    expect(element).toHaveClass('bg-primary ')
  })
  
  test('Applies variant prop destructive', () => {
    const { element } = makeSut({
      variant: "destructive"
    })
    expect(element).toHaveClass('bg-destructive ')
  })

  test('Applies size prop default', () => {
    const { element } = makeSut({
      size: "default"
    })
    expect(element).toHaveClass('h-10')
    expect(element).toHaveClass('px-4')
  })
  
  test('Applies size prop icon', () => {
    const { element } = makeSut({
      size: "icon"
    })
    expect(element).toHaveClass('h-10')
    expect(element).toHaveClass('w-10')
  })

  test('Applies additional props', () => {
    render(<Button data-testid="custom-button" />)
    const buttonElement = screen.getByTestId('custom-button')
    expect(buttonElement).toBeInTheDocument()
  })
})
