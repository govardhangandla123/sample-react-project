import React, { Component } from "react";
import './login.css';
import Appp from "./loginone";
const Button=(props)=>{
    return(
        <div>
            <p>
                {props.children}
            </p>
  
        </div>
    );
}; 
export default Button;