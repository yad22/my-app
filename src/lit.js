import React from "react";
import "./lit.css";

function Room() {
    const [isLit, setLit] = React.useState(false);
    const brightness = isLit ? "lit": "dark";

    let [incTemp, setTemp] = React.useState(36);

    let [isOn, setState] = React.useState(true);
  
    return (
      <div className={`room ${brightness}`}>
        The room is {isLit ? "lit": "dark"}
        <br/>
        <button onClick={()=> setLit(!isLit)}>
            flip
        </button>
        <br/>
        The temperature is {incTemp}
        <button onClick={()=> setTemp(++incTemp)}>
            Increase
        </button>
        <button onClick={()=> setTemp(--incTemp)}>
            Decrease
        </button>
        <br/>
        The light is {isOn ? "ON" : "OFF"}
        <button onClick={() => setState(isOn = true)}>ON</button>
        <button onClick={() => setState((isOn = false))}>OFF</button>

      </div>
    )
  };
export default Room;