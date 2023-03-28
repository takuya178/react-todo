import { useContext, createContext, useReducer } from "react";

const createTodoContext = createContext();
const createDispatch = createContext();

const INIT_TODO_LIST = [
  {
    id: 1,
    value: "TODO1",
    edit: false
  },
  {
    id: 2,
    value: "TODO2",
    edit: false
  }
]

const reducer = (todos, { type, objectTodo, id }) => {
  switch (type) {
    case "add":
      return [...todos, objectTodo];
    case "delete":
      const filterTodo = todos.filter((todo) => {
        return todo.id !== id;
      });
      return filterTodo;
    case "change":
      const toggleTodo = todos.map((todo) => {
        if (todo.id === objectTodo.id) {
          todo.edit = objectTodo.edit;
        }
        return todo
      });
      return [...toggleTodo];
    case "update":
      const updateTodo = todos.map((todo) => {
        if (todo.id === objectTodo.id) {
          todo.value = objectTodo.value;
          todo.edit = objectTodo.edit;
        }
        return todo
      });
      return [...updateTodo];
    default:
      throw new Error("エラーが発生しました。");
  }
}

const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(reducer, INIT_TODO_LIST)
  return (
    <createTodoContext.Provider value={todoList}>
      <createDispatch.Provider value={dispatch}>
        { children }
      </createDispatch.Provider>
    </createTodoContext.Provider>
  );
}

const useTodoList = () => useContext(createTodoContext);
const useDispatch = () => useContext(createDispatch);

export { TodoProvider, useTodoList, useDispatch }
