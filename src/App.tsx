import { Button } from './components/ui/button/button'

function App() {
  return (
    <div>
      <h1 className="text-3xl">Hello world!</h1>
      <Button>Click me</Button>

      <Button>Button</Button>

      <Button asChild>
        <a href="/login">Login</a>
      </Button>
    </div>
  )
}

export default App
