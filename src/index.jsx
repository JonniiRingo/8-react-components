// Reference Air BnB React Style Guide

import React from "react";
import ReactDOM from "react-dom/client"; 
import Heading from "./Heading";       // The extension .jsx is optional
import List from "./List";


const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <React.StrictMode>
    <div>
      <Heading />     
      <List />       
    </div>
  </React.StrictMode>
); 