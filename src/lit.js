import React from "react";
import "./lit.css";

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
export default Room;