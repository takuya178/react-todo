import useTodo from "./CustomHooks/todoHook";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import SearchTodo from "./Components/SearchTodo";

const Todo = () => {
  const {
    inputState,
    searchState,
    inputText,
    searchInput,
    addTodo,
    deleteHandler,
    filteredTodo,
  } = useTodo();

  return (
      <>
        <AddTodo 
          addTodo={addTodo} 
          inputText={inputText} 
          inputState={inputState}
        />
        <SearchTodo 
          searchInput={searchInput} 
          searchState={searchState} 
        />
        <TodoList 
          filteredTodo={filteredTodo} 
          deleteHandler={deleteHandler} 
        />
      </>
  );
}

export default Todo