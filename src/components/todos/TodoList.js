const TodoList = ({ todos }) => {
  return (
    <>
      <h1>Todos</h1>
      {
        <ul>
          { todos.map( t => (
            <li key={t.id}>
              {t.title}
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default TodoList;