import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // it return the index value of string 0,1,2,3....

      let pass = str.charAt(char);
    }

    setPassword(pass);

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()";
  }, [length, numAllow, charAllow, setPassword]);
  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700">
      <h1 className="text-4xl text-white text-center"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mt-4">
          <input 
          type="text" 
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly />
          <button>Copy</button> 
        </div>
      </div>
    </>
  );
}

export default App;
