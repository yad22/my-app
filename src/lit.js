import React from "react";
import ReactDOM from "react-dom";
import "./lit.css";

function Room() {
    const [isLit, setLit] = React.useState(false);
    
    const brightness = isLit ? "lit": "dark";
  
    return (
      <div className={`room ${brightness}`}>
        The room is {isLit ? "lit": "dark"}
        <br/>
        <button onClick={()=> setLit(!isLit)}>
            flip
        </button>
      </div>
    )
  };
export default Room;