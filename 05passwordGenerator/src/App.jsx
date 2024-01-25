// Importing necessary hooks and styles
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

// Main component function
function App() {
  // State variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Ref for the password input
  const passwordRef = useRef(null);

  // Function to generate a random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}"';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Effect hook to generate a password whenever dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  // Component JSX
  return (
    <>
      {/* Password Generator Form */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-2xl text-white text-center my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            type="button"
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="ml-2">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              checked={charactersAllowed}
              onChange={() => {
                setCharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
