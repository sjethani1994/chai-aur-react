import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


const anotherElement = (
  <a href="https://google.com" target="_blank" rel="noreferrer">Chai aur Code</a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me",
  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  //   <reactElement />
  // </React.StrictMode>

  reactElement
);
