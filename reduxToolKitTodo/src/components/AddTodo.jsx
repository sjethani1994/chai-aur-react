import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ isEditClicked, valuesToUpdate, setIsEditClicked }) {
  console.log(valuesToUpdate);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const editTodoHandler = (e) => {
    e.preventDefault();
    console.log(input);
    const updatedValues = {
      id: valuesToUpdate.id,
      text: input,
    };
    dispatch(updateTodo(updatedValues));
    setIsEditClicked(false);
    setInput("");
  };

  // Use useEffect to update the input when valuesToUpdate changes
  useEffect(() => {
    setInput(valuesToUpdate.text || "");
  }, [valuesToUpdate]);

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {!isEditClicked ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      ) : (
        <button
          type="button"
          onClick={editTodoHandler}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          update Todo
        </button>
      )}
    </form>
  );
}

export default AddTodo;
