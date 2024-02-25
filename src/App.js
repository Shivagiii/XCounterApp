
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] =  useState(0);
  function handleIncrement(e){
    setCount(count+1 );

  }
  function handleDecrement(){
    setCount(count-1 );
  }
  return (
    <div className="App">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
   
    </div>
  );
}

export default App;
