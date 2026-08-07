import { useState } from "react";
import { APITester } from "../APITester";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl font-bold">DS Social</div>
      <div className="text-2xl">
        <APITester />
      </div>
      <div className="text-2xl">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Clica aqui sei la teste
        </button>
        <div>{count}</div>
      </div>
    </div>
  );        
  }