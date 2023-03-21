import { useState, useMemo } from "react";

const Todo = () => {
  const INIT_TODO_LIST = [
    {
      "id": 1,
      "value": "Todo1"
    },
    {
      "id": 2,
      "value": "Todo2"
    }
  ]

  const [todoState, setTodoList] = useState(INIT_TODO_LIST);
  const [inputState, inputText] = useState("");
  const [searchState, searchText] = useState("");
    
  const addTodo = (e) => {
    if (e.key === 'Enter') {
      const id = todoState[todoState.length - 1].id + 1;
  
      const newTodo = {
        "id": id,
        "value": inputState
      }
      setTodoList([...todoState, newTodo]);
    }
  }
  
  const deleteButton = (id) => {
    const newTodo = todoState.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(newTodo);
  }

  const filteredTodo = useMemo(() => {
    return todoState.filter((todo) => {
      return todo.value.includes(searchState);
    });
  }, [searchState, todoState]);

  return (
    <>
      <div>
      <input type="text" value={inputState} onChange={(e) => inputText(e.target.value)} onKeyDown={addTodo}></input>
      </div>
      <div>
        <input type="text" value={searchState} onChange={(e) => searchText(e.target.value)}></input>
      </div>
      <div>
        {filteredTodo.map((todo) => {
          return <div key={todo.id}>
            <p>{todo.value}<button onClick={() => deleteButton(todo.id)}>削除</button></p>
            </div>
        })}
      </div>
    </>
  );
}

export default Todo