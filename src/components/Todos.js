import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState(["one", "two"]);
  const [input, setInput] = useState("");

  function addTodo() {
    setTodos((todos) => [...todos, input]);
    setInput("");
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>

      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
