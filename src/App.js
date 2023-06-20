import React, { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator'
import BoxForm from './components/BoxForm';

function App() {
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">

      <BoxGenerator boxes={boxes} />
      <BoxForm setBoxes={setBoxes} boxes={boxes} />

    </div>
  );
}

export default App;
