import React from 'react';

import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header" > <strong> <b> SCAN COMPILER </b></strong>
      </header>

      <header className = "App-footer">
        <hr/>
        <textarea cols = "50" type = "code" placeholder = "Type your code here" id = "UserInput" className = "inline-textarea">
          </textarea>
          <hr/>
          <input type = "submit" value = "RUN" className = "run_btn" ></input>
          <hr/>
        <textarea cols = "50" placeholder = "Result" className =  "inline-textarea" >
          </textarea>
          <hr/>
      </header>
    </div>
  );
}


export default App;
