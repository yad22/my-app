import React from 'react';
import './App.css';

import Hello from "./hello";
import "./practice_css.css";


function App({name, age, developer}) {
  return <div className="whole">

            <h1>A SIMPLE SAMPLE REACT PAGE</h1>
            App.js updated by <strong>{name}</strong> who is {age} years old, to create lists with React

            <br/>

            <Hello xName={name}></Hello>
            <br/>
            <Room></Room>

            <br/> <hr/>
            <b>Programming Topics</b>
            <ol>
              <li id="bold">Python</li>
              <li id="bold">JavaScript</li>
              <li id="bold">HTML
                <ul>
                  <li>Make a sample project</li>
                </ul>
              </li>
              <li id="bold">CSS</li>
              <li id="bold">
                Web Development
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React js</li>
                </ul>
              </li>
            </ol>
            <hr/>
          </div>
}



function Room() {
    const [isLit, setLit] = React.useState(false);
    const brightness = isLit ? "lit": "dark";

    let [incTemp, setTemp] = React.useState(36);

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
