import NavItem from './nav-item'

export default function Nav() {
  return (
    <nav>
      <ul className="list-none pl-0 flex gap-4">
        <NavItem to="/loja">Home</NavItem>
        <NavItem to="/loja/products">Products</NavItem>
        <NavItem to="/loja/contact">Contact</NavItem>
      </ul>
    </nav>
  )
}
