import React from 'react';
import logo from './logo.svg';
import "./practice_css_2.css";

function Hello({xName}) {
  return <p className="myname">
      This is para in hello.js from {xName}, which is a sample of how to link one function file to another
  </p>
}

export default Hello;