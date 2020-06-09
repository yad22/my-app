import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div><App name="Hasan" age={22} developer={true}/></div>,
  document.getElementById('root')
);

/*
//react has a complier that transforms the below code into the above code
ReactDOM.render(
  React.createElement("div", null, "Hello World with createElement"),
  document.getElementById('root')
);

//creating a child element the long way
ReactDOM.render(
  React.createElement("p", null, React.createElement("h1", null, "Hello from the child element h1")),
  document.getElementById("root")
);
*/
//react identifies first small letter as built-in component and first capital letter as custom component


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
