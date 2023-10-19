import React, { Component } from "react";
import './login.css';
import Appp from "./loginone";
const Button=(props)=>{
    return(
        <div>
            <button>          {props.children}
            </button>
  
        </div>
    );
}; 
export default Button;