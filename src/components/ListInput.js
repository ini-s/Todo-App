import React from "react"
import {IoMdClose} from "react-icons/io"
import {Draggable} from 'react-beautiful-dnd'
export default function ListInput(props){
    const strike = props.checked && "line-through"
    return(
        <Draggable draggableId={props.id} index={props.index}>
            {(provided)=>(
                <div className="list-box d-flex align-items-center"
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}>
                    <label>
                    <input className="checkbox" type="checkbox" name="checkbox" checked={props.checked} 
                    onChange={props.boxChange}/>
                    <span  style={{textDecoration: strike}}> {props.item}</span>
                    </label>
                    <IoMdClose className="delete" onClick={props.delete}/>
                </div>
            )}
        </Draggable>
    )
}