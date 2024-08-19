// Reference Air BnB React Style Guide

import React from "react";
import ReactDOM from "react-dom/client"; 
import Heading from ".Heading"          // The extension .jsx is optional


const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <React.StrictMode>
    <div>
      <Heading />     //Custom heading component
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  </React.StrictMode>
); 