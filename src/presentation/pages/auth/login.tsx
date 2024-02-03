import { Authentication } from '@/domain/usecases'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface LoginProps {
  authentication: Authentication
}

const schema = z.object({
  email: z.string().min(1, 'Campo email é obrigatório').email('O email deve ser válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
})

type FormProps = z.infer<typeof schema>

export default function Login({ authentication }: LoginProps) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  const onSumit = async (data: FormProps) => {
    await authentication.auth(data)
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSumit)}>
        <input
          type="text"
          id="email"
          {...register('email')}
          placeholder="Email"
          aria-label="Email"
          data-testid="email"
        />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          id="password"
          {...register('password')}
          placeholder="Senha"
          aria-label="Password"
          data-testid="password"
        />
        <p>{errors.password?.message}</p>

        <button data-testid="signin">Entrar</button>
      </form>
    </div>
  )
}
