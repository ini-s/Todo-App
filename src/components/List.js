import React from 'react';
import ListInput from "./ListInput"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
export default function List(props){
return(
    <DragDropContext>
        <Droppable droppableId='characters'>
        {(provided) => (
            <div className={props.darkMode? "list characters" :"list light-list characters"} {...provided.droppableProps} ref={provided.innerRef}>
            {props.todo.map((item, index)=>
            <Draggable  key={item.id} draggableId={item.id} index={index}>
                {(provided)=>(
                     <ListInput 
                     ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                     id={item.id}
                     delete={()=>props.deleteItem(item.id)}
                     item={item.todo}
                     todo={props.todo}
                     checked={item.isChecked}
                     boxChange={()=>props.change(item.id)}
                 />
                )}
            </Draggable>
            )}
            </div>
        )}
        </Droppable>
        
    </DragDropContext>
)
}