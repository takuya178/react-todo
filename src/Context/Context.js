import { useContext, createContext, useState } from "react"

export const StateContext = createContext();
export const SetContext = createContext(); 

const ContextProvider = ({ children }) => {
  const INIT_TODO_LIST = [
    {
      "id": 1,
      "value": "Todo1"
    },
    {
      "id": 2,
      "value": "Todo2"
    }
  ]

  const [todoState, setTodoList] = useState(INIT_TODO_LIST);
  const [inputState, setInputText] = useState("");
  const [searchState, setSearchText] = useState(""); 
  
  return (
    <StateContext.Provider value={{todoState, inputState, searchState}}>
      <SetContext.Provider value={{setTodoList, setInputText, setSearchText}}>
        {children}
      </SetContext.Provider>
    </StateContext.Provider>
  );
}

const useStateContext = () => useContext(StateContext);
const useSetContext = () => useContext(SetContext);

export { ContextProvider, useStateContext, useSetContext }
