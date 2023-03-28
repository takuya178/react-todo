const AddTodo = ({ addTodo, inputText, inputState }) => {
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