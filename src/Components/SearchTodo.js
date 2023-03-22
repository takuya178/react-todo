const SearchTodo = ({ searchState, searchInput }) => {
  return (
    <div>
      <input 
        type="text"
        value={searchState} 
        onChange={searchInput}>
      </input>
    </div> 
  );
}

export default SearchTodo
