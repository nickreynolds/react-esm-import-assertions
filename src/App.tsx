import React from 'react';
import { useState } from 'react'
import logo from './logo.svg';
import './App.css' assert { type: 'css' }
import test from "./test.json" assert { type: 'json' }
import fake from "./fake"

function App() {
  console.log("test: ", test)
  console.log("fake: ", fake)
  const [thing, setThing] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Uses Import Assertion to Load JSON
        </p>
        <p>
          {`test: ${JSON.stringify(test)}`}
        </p>
        <p>
          {`thing: ${thing}`}
        </p>
        <button onClick={() => setThing(thing + 1)}>click me</button>
      </header>
    </div>
  );
}

export default App;
