import { useState } from "react";

export default function AddNums() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");

  function calculateTotal(e) {
    e.preventDefault();
    setTotal(num1 + num2);
  }

  return (
    <div className="App">
      <h1>React Snippets</h1>

      <form onSubmit={calculateTotal}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(+e.target.value)}
          name="num1"
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          name="num2"
          placeholder="number 2"
        />

        <input type="submit" value="Add Numbers" />
      </form>

      <p>Total: {total || ""}</p>
    </div>
  );
}
