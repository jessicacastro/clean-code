interface HeaderProps {
  onCreateNewTodo: () => void;
}
export const Header = ({ onCreateNewTodo }: HeaderProps) => {
  return(
    <header>
      <h1>My new revolutionary to-do list app!</h1>

      <button onClick={onCreateNewTodo}>Add new todo</button>
    </header>
  )
}