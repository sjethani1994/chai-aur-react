import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [valuesToUpdate, setValuesToUpdate] = useState({});
  const [isEditClicked, setIsEditClicked] = useState(false);
  console.log(isEditClicked);
  return (
    <>
      <AddTodo
        isEditClicked={isEditClicked}
        valuesToUpdate={valuesToUpdate}
        setIsEditClicked={setIsEditClicked}
      />
      <Todo
        valuesToUpdate={valuesToUpdate}
        setValuesToUpdate={setValuesToUpdate}
        setIsEditClicked={setIsEditClicked}
      />
    </>
  );
}

export default App;
