import { useState, useMemo } from "react"

const useTodo = () => {
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
  const [inputState, setInputText] = useState("");
  const [searchState, setSearchText] = useState(""); 
  
  const inputText = (e) => {
    setInputText(e.target.value);
  }
  
  const searchInput = (e) => {
    setSearchText(e.target.value);
  }
  
  const addTodo = (e) => {
    if (e.key === 'Enter' && inputState !== '') {
      const id = todoState[todoState.length - 1].id + 1;
  
      const newTodo = {
        "id": id,
        "value": inputState
      }
      setTodoList([...todoState, newTodo]);
      setInputText("");
    }
  }

  const deleteHandler = (id) => {
    const newTodo = todoState.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(newTodo);
  };

  const filteredTodo = useMemo(() => {
    return todoState.filter((todo) => {
      return todo.value.includes(searchState);
    });
  }, [searchState, todoState]) 
  
  return {
    inputState,
    searchState,
    inputText,
    searchInput,
    addTodo,
    deleteHandler,
    filteredTodo,
  }
}

export default useTodo;
