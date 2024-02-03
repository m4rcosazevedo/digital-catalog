import Login from '@/presentation/pages/auth/login'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { AuthenticationSpy } from '@tests/domain/mocks'

type SutTypes = {
  authenticationSpy: AuthenticationSpy
}

const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy()

  render(<Login authentication={authenticationSpy} />)

  return {
    authenticationSpy
  }
}

describe('Login Page', () => {
  it('should start with initial state', () => {
    makeSut()

    expect(screen.getByTestId('email')).toHaveProperty('value', '')
    expect(screen.getByTestId('password')).toHaveProperty('value', '')
    expect(screen.getByTestId('signin')).toBeInTheDocument()
  })

  it('should show error message when fields was empty', async () => {
    makeSut()

    const buttonSubmit = screen.getByTestId('signin')

    act(() => {
      userEvent.click(buttonSubmit)
    })

    await waitFor(() => {
      expect(screen.getByText('Campo email é obrigatório')).toBeVisible()
      expect(screen.getByText('A senha deve ter no mínimo 6 caracteres')).toBeVisible()
    })
  })

  it('should show error message when email is invalid', async () => {
    makeSut()

    const email = 'invalid_email'
    const emailInput = screen.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: email } })
    fireEvent.click(screen.getByTestId('signin'))

    await waitFor(() => {
      expect(screen.getByText('O email deve ser válido')).toBeVisible()
      expect(emailInput).toHaveProperty('value', email)
    })
  })

  it('Should call Authentication with correct values', async () => {
    const { authenticationSpy } = makeSut()

    const email = 'valid@email.com'
    const password = 'valid_password'

    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')

    fireEvent.input(emailInput, { target: { value: email } })
    fireEvent.input(passwordInput, { target: { value: password } })

    fireEvent.click(screen.getByTestId('signin'))

    await waitFor(() => {
      expect(emailInput).toHaveProperty('value', email)
      expect(passwordInput).toHaveProperty('value', password)
      expect(authenticationSpy.params).toEqual({ email, password })
    })
  })
})
