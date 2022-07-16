import { useContext, useState } from "react";
import { DataContext } from "../App";

export default function Child() {
  const [state, dispatch] = useContext(DataContext);
  const [name, setName] = useState("james");

  console.log(state);

  function handleName() {
    dispatch({
      type: "CHANGE",
      payload: name,
    });
  }

  return (
    <>
      <h2>My context name is {state.name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleName}>Change name to steve</button>
    </>
  );
}
