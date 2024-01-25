import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }

    // For Multiple Value Update Of Counter
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button type="button" onClick={addValue}>
        Add Count
      </button>
      <br />
      <button type="button" onClick={removeValue}>
        Remove Count
      </button>
    </>
  );
}

export default App;
