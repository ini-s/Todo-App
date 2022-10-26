import React from 'react';
import ListInput from "./ListInput"
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
export default function List(props){
return(
    <DragDropContext onDragEnd={props.dragEnd}>
        <Droppable droppableId='characters'>
        {(provided) => (
            <div className={props.darkMode? "list characters" :"list light-list characters"} {...provided.droppableProps} ref={provided.innerRef}>
                {props.todo.map((item, index)=>{
                    return(
                        <ListInput 
                        key={item.id}
                        id={item.id}
                        index ={index}
                        delete={()=>props.deleteItem(item.id)}
                        item={item.todo}
                        todo={props.todo}
                        checked={item.isChecked}
                        boxChange={()=>props.change(item.id)}
                    />
                    )
                }
                )}
            </div>
        )}
        </Droppable>
        
    </DragDropContext>
)
}