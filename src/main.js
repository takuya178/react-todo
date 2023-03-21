import { ContextProvider } from "./Context/Context";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import SearchTodo from "./component/SearchTodo";

const Todo = () => {
  return (
      <ContextProvider>
        <AddTodo />
        <SearchTodo />
        <TodoList />
      </ContextProvider>
  );
}

export default Todo