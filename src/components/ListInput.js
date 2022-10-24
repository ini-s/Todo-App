import React from "react"
import {IoMdClose} from "react-icons/io"
export default function ListInput(props){
    const strike = props.checked && "line-through"
    return(
        <div className="list-box d-flex align-items-center" ref={props.innerRef}>
            <label >
            <input className="checkbox" type="checkbox" name="checkbox" checked={props.checked} 
            onChange={props.boxChange}/>
            <span  style={{textDecoration: strike}}> {props.item}</span>
            </label>
            <IoMdClose className="delete" onClick={props.delete}/>
        </div>
    )
}