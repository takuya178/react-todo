import { useStateContext, useSetContext } from "../Context/Context";

const SearchTodo = () => {
  const { searchState } = useStateContext();
  const { setSearchText } = useSetContext()
  
  return (
    <div>
      <input 
        type="text"
        value={searchState} 
        onChange={(e) => setSearchText(e.target.value)}>
      </input>
    </div> 
  );
}

export default SearchTodo
