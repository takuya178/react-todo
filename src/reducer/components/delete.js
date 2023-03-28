import { useDispatch } from "../Context/context";

const DeleteTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch({ type: "delete", id: id });
  }
  
  return (
    <button onClick={() => deleteTodo(todo.id)}>削除</button> 
  )
}

export default DeleteTodo;
