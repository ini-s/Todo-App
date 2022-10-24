import React from 'react';
import {FaPlus} from "react-icons/fa"
export default function Input(props){
    return(
        <div className={props.darkMode?"input d-flex justify-content-between align-items-center":
        "input d-flex justify-content-between align-items-center light-input"}>
            <input
            name="input-text"
            onChange={props.change} 
            type="text" value={props.val} 
            placeholder="Create a new todo..."/>
            <FaPlus onClick={props.add} className="plus"/>
        </div>
    )
}