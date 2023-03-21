import { useStateContext, useSetContext } from "../Context/Context";

const AddTodo = () => {
  const { todoState, inputState } = useStateContext();
  const { setTodoList, setInputText } = useSetContext() 

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      const id = todoState[todoState.length - 1].id + 1;
  
      const newTodo = {
        "id": id,
        "value": inputState
      }
      setTodoList([...todoState, newTodo]);
    }
  } 

  return (
    <div>
      <input
        type="text" 
        value={inputState} 
        onChange={(e) => setInputText(e.target.value)} 
        onKeyDown={addTodo}>
      </input>
    </div>
  );
}

export default AddTodo;
