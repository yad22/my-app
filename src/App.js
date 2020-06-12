import React from 'react';
import './App.css';

import Hello from "./hello";
import "./practice_css.css";
import Hi from "./practice_sample_hi";

import "./lit.css";





function App({name, age, developer}) {
  return <div className="whole">
            <div>
              <Room></Room>
            </div>
            <h1>A SIMPLE SAMPLE REACT PAGE</h1>
            A div in App.js updated by <strong>{name}</strong> who is {age - 2} years old, to create lists with React
            <br/>
            <Hello xName={name}></Hello>
            <br/> <hr/>
            <b>ToDoList</b>
            <ol>
              <li id="bold">Python</li>
              <li id="bold">JavaScript</li>
              <li id="bold">HTML
                <ul>
                  <li>Make a sample project</li>
                </ul>
              </li>
              <li id="bold">CSS</li>
              <li id="bold">Medical Studies
                <ul>
                  <li>Reproductive</li>
                  <li>DRG</li>
                  <li>Ortho</li>
                </ul>
              </li>
            </ol>
            <hr/>
            <h2>Sample Calculation by JS in JSX</h2>
            <p> Product of 20 and 10 is equal to {20*10} </p>
            <hr/>
            <Hi nameY={name}></Hi>
          </div>
}



function Room() {
    const [isLit, setLit] = React.useState(false);
    const brightness = isLit ? "lit": "dark";

    let [incTemp, setTemp] = React.useState(0);

    let [isOn, setState] = React.useState(true);
    
    const classOnOff = isOn ? "lit" : "dark";


    const changetemp = incTemp ? "lit": "dark";

    return (
      <div>

        <div className={`room ${brightness}`}>
          <strong>The room is {isLit ? "lit": "dark"}</strong>
          <br/><br/>
          <button onClick={()=> setLit(!isLit)}>
              flip
          </button>
        </div>

        <br/>

        <div className={`room ${changetemp}`}>
          <strong>The temperature is {incTemp}</strong>
          <br/><br/>
          <button onClick={()=> setTemp(++incTemp)}>
              +
          </button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={()=> setTemp(--incTemp)}>
              -
          </button>
        </div>
        <br/>
        <div className={`room ${classOnOff}`}>
          <br/>
          The light is {isOn ? "ON" : "OFF"}
          <br/><br/>
          <button onClick={() => setState(isOn = true)}>ON</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => setState((isOn = false))}>OFF</button>

        </div>
        
      </div>
    )
  };

export default App;
