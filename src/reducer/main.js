import { TodoProvider } from "./Context/context";
import AddTodo from "./components/add";
import ListTodo from "./components/List";

const Example = () => {;
  return (
    <>
      <TodoProvider>
        <AddTodo />
        <ListTodo />
      </TodoProvider>
    </>
  );
}

export default Example;
