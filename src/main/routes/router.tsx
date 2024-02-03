import theme from '@/presentation/assets/styles/theme'
import { QueryWrapper } from '@/presentation/components'
import { Modal, Spinner } from '@/presentation/components/ui'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Typography } from '@mui/material'
import axios from 'axios'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeLogin } from '../factories/pages'

import LayoutAuthenticate from '@/presentation/layouts/layout-authenticate'

const queryClient = new QueryClient()

const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  return response.data
}

interface TextProps {
  completed: boolean
  id: number
  title: string
  userId: number
}

const Test = () => {
  const [open, setOpen] = useState(false)

  return (
    <QueryWrapper<TextProps> queryKey="todos" fetchData={fetchData}>
      {data => (
        <div>
          <button onClick={() => setOpen(true)}>Abrir Modal</button>

          <Modal onClose={() => setOpen(false)} open={open}>
            TESTE MODAL
          </Modal>

          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Vite.js example in TypeScript
          </Typography>

          <h1>Test</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </QueryWrapper>
  )
}

export default function Router() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary fallback={<h1>Deu Ruim</h1>}>
              <Routes>
                <Route index element={<h1>Olá Mundo</h1>} />
                <Route path="/loja" element={<LayoutAuthenticate />}>
                  <Route index element={<h1>Home</h1>} />
                  <Route path="products" element={<h1>Product</h1>} />
                  <Route path="contact" element={<h1>Contact</h1>} />
                </Route>
                <Route path="/a" element={<Test />} />
                <Route path="/login" element={makeLogin()} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
