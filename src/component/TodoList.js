import { useMemo } from "react";
import { useStateContext, useSetContext } from "../Context/Context";

const TodoList = () => {
  const { todoState, searchState } = useStateContext();
  const { setTodoList } = useSetContext();
  
  const filteredTodo = useMemo(() => {
    return todoState.filter((todo) => {
      return todo.value.includes(searchState);
    });
  }, [searchState, todoState]);
  
  const deleteHandler = (id) => {
    const newTodo = todoState.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(newTodo);
  };

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
