import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center gap-3 shadow-xl 
      bg-white px-2 py-3 rounded-3xl">
        <button
        onClick={ () => setcolor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor :"red"}}>Red</button>
        <button 
        onClick={ () => setcolor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor :"green"}}>Green</button>
        <button 
        onClick={ () => setcolor("Blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor :"Blue"}}>Blue</button>
        <button 
        onClick={ () => setcolor("Olive")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor :"Olive"}}>Olive</button>
        <button 
        onClick={ () => setcolor("Gray")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor :"Gray"}}>Gray</button>
        <button 
        onClick={ () => setcolor("Yellow")}
        className="outline-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor :"Yellow"}}>Yellow</button>
        <button 
        onClick={ () => setcolor("Pink")}
        className="outline-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor :"Pink"}}>Pink</button>
        <button 
        onClick={ () => setcolor("Purple")}
        className="outline-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor :"Pink"}}>Purple</button>
        <button 
        onClick={ () => setcolor("Lavender")}
        className="outline-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor :"Lavender"}}>Lavender</button>
        <button 
        onClick={ () => setcolor("White")}
        className="outline-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor :"White"}}>White</button>
        <button 
        onClick={ () => setcolor("Black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor :"Black"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
