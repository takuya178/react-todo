import { useDispatch } from "../Context/context";
import DeleteTodo from "./delete";

const ToggleTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleEditForm = (todo) => {
  const toggleForm = {
    ...todo,
    edit: !todo.edit
  }
    dispatch({ type: "change", objectTodo: toggleForm });
  }
  
  return (
    <>
      <p 
        key={todo.id} 
        onDoubleClick={() => toggleEditForm(todo)}
      >
      {todo.value}
      </p>
      <DeleteTodo todo={todo} />
    </>
  );
}

export default ToggleTodo;
