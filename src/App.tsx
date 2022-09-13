import React from 'react';
import logo from './logo.svg';
import './App.css' assert { type: 'css' }
import test from "./test.json" assert { type: 'json' }

function App() {
  console.log("test: ", test)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Uses Import Assertion to Load JSON
        </p>
        <p>
          {`test: ${JSON.stringify(test)}`}
        </p>
      </header>
    </div>
  );
}

export default App;
