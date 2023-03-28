import { useMemo, useState } from "react";
import { useTodoList } from "../Context/context";
import UpdateTodo from "./update";
import ToggleTodo from "./toggleTodo";

const ListTodo = () => {
  const todoList = useTodoList();
  const [searchState, setSearch] = useState("");

  const memoryTodoList = useMemo(() => {
    return todoList.filter((todo) => {
      return todo.value.includes(searchState);
    });
  }, [searchState, todoList]);
  
  const searchText = (e) => {
    setSearch(e.target.value);
  }
  
  return (
    <>
    <div>
      <input
        type="text"
        value={searchState}
        onChange={searchText}
        >
      </input>
    </div>
    <div>
      {memoryTodoList.map((todo) => {
        return (todo.edit) ?
          <UpdateTodo todo={todo} /> :
          <ToggleTodo todo={todo} />
      })}
    </div> 
    </>
  );
}

export default ListTodo;
