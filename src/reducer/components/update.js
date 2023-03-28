import { useState } from "react";
import { useDispatch } from "../Context/context";

const UpdateTodo = ({ todo }) => {
  const [editState, setEdit] = useState("");
  const dispatch = useDispatch();

  const inputEdit = (e) => {
    setEdit(e.target.value);
  }
  
    const updateTodo = (todo) => {
    const updatedTodo = {
      ...todo,
      value: editState,
      edit: !todo.edit
    }
    dispatch({ type: "update", objectTodo: updatedTodo });
  }

  return (
    <p key={todo.id}><input key={todo.id} value={editState} onChange={inputEdit} />
      <button onClick={() => updateTodo(todo)}>更新</button>
    </p> 
  );
}

export default UpdateTodo;
