import { Nav } from '../nav'

export default function Header() {
  return (
    <header className="bg-slate-600 p-4 flex items-center justify-between text-white">
      <div>LOGO</div>
      <Nav />
      <div>Login/Register</div>
    </header>
  )
}
