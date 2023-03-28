import { useState } from "react";
import { useTodoList, useDispatch } from "../Context/context";

const AddTodo = () => {
  const todoList = useTodoList();
  const dispatch = useDispatch();
  const [inputState, setInput] = useState("")

  const inputText = (e) => {
    setInput(e.target.value);
  }


  const addTodo = (e) => {
    if (e.key === "Enter" && inputState !== "") {
      const id = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
      const newTodo = {
        id: id,
        value: inputState,
        edit: false
      }
      dispatch({ type: "add", objectTodo: newTodo });
      setInput("");
    }
  }
  
  return (
    <div>
      <input 
        type="text"
        value={inputState}
        onChange={inputText}
        onKeyDown={addTodo}
      >
      </input>
    </div>
  );
}

export default AddTodo;
