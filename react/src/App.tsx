import { useState } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Input } from './components/input'

export const App = () => {
  const [todos, setTodo] = useState<string[]>([])

  const handleCreateNewTodo = () => {
    setTodo([...todos, 'New todo'])
  }

  return (
    <div>
      <Header onCreateNewTodo={handleCreateNewTodo}/>

      <Input.Root>
        <Input.Label htmlFor="new-todo">New todo</Input.Label>
        <Input.Icon>📝</Input.Icon>

        <Input.FormField id="new-todo" />
        <Input.ErrorMessage message="This is an error message" />
      </Input.Root>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast</p>
          </div>
          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS</p>
          </div>
        </section>

        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}
