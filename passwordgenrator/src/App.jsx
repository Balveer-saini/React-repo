import { useCallback, useEffect, useRef, useState } from "react";

function App()
{
  const [length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[characterAllowed, setCharacterAllowed] = useState(false);
  const[password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str+= "~`!@#$%^&*()_+=-{[}];<>/?";

    for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    } 
    
    setPassword(pass);
    }, [length,numberAllowed, characterAllowed, setPassword]);

  
  const copyPasswordToClipboard = useCallback(() => 
    {
      passwordRef.current?.select();
      window.Navigator.clipboard.writeText(password)
    }, [password])


      useEffect(() => {
        passwordgenerator()
      }, [length, numberAllowed, characterAllowed, passwordgenerator])

    return (
    <>
    <div className="text-white py-3 px-4 md bg-gray-500 text-center w-full max-w-md mx-auto rounded-lg my-14"> 
      <h1 className="text-white text-center my-3"> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        placeholder="password"
        className="outline-none w-full py-3 px-3"
        readOnly
        ref={passwordRef}
        />
        <button
        className="text-white outline-none bg-blue-700 px-3 py-1 shrink-0 hover:bg-gray-700"
        onClick={copyPasswordToClipboard}
        >Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min = {3}
          max={30}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked = {characterAllowed}
          id="characterInput"
          onChange={() => {
            setCharacterAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Characters</label>
        </div>
      </div>

    </div>


    </>
)}

  export default App;