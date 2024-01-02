import { Coin } from "./components/Coin";

function App() { 
  
  return (
    <div className="w-full h-[100dvh] overflow-y-auto bg-black text-white">
      <div className="my-0 mx-auto py-[3rem] max-w-[80%]">
        <Coin />
      </div>
    </div>
  );
}

export default App;
