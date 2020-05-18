import React, {useState} from 'react';
import './App.css';
import './Button.css';
import Process from './Process';



const UI = () => {
  var [isRed, setRed] = useState('');
  var [temp,istemp] = useState(0);

  var update = e => {
    setRed(e.target.value);
    istemp(0);
  };

  var click = () => {
    istemp(0+1);
  };

  return (
    <div className="App">
      <header className="App-header" > <strong> <b> SCAN COMPILER </b></strong></header>
    
      <header className = "App-footer">
        <hr/>
        <textarea 
          type = "code" 
          placeholder = "Type your code here" 
          className = "inline-textarea" 
          value = {isRed} 
          onChange = {update}>
        </textarea>
        <hr/>
        <button className = "Button.css" onClick = {click}> RUN </button>
        <hr/>
        <Process isRed={isRed} temp={temp}/>
        <hr/>
      </header>
    </div>    
  );
}
export default UI;