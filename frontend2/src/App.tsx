import { useState } from "react";
import "./App.css";
import MyButton from "./components/Button";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <MyButton onClick={() => setCount(count + 1)} count={count} />
        <Form />
      </div>
    </>
  );
}

export default App;
