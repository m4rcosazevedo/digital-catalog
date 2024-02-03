import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

export default function LayoutAuthenticate() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
