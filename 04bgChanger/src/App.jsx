import { useState } from "react";
import "./App.css";

function App() {
  // State to manage the background color
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Color Selector UI */}
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Red Button */}
          <button
            className="outline-none px-4 rounded-full py-1"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          {/* Blue Button */}
          <button
            className="outline-none px-4 rounded-full py-1"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>

          {/* Green Button */}
          <button
            className="outline-none px-4 rounded-full py-1"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
