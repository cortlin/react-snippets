//import { createContext, useContext, useState, useReducer } from "react";
//import NameReducer from "./components/NameReducer";
import Todos from "./components/Todos";

import "./App.css";
// import AddNums from "./components/AddNums";

// export const DataContext = createContext();

// const initialState = {
//   name: "Tony",
// };

function App() {
  //const [state, dispatch] = useReducer(NameReducer, initialState);

  return (
    <>
      <Todos />
    </>
  );
}

export default App;
