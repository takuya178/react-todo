const TodoList = ({ filteredTodo, deleteHandler }) => {
  return (
      <div>
        {filteredTodo.map((todo) => {
          return <div key={todo.id}>
            <p>{todo.value}<button onClick={() => deleteHandler(todo.id)}>削除</button></p>
          </div>
        })}
      </div>
  );
}

export default TodoList;
