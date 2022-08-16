import './App.css';
import React, { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <h1>Hello world</h1>
      {toggle && <Timer />}
      <button onClick={() => setToggle(prev => !prev)}>{toggle ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
