import React, {useState, useEffect} from 'react';
export default function Filter(props){
    const [items, setItems]=useState(props.todo.filter(item=> item.isChecked === false).length)
    useEffect(()=>{
        setItems(props.todo.filter(item=> item.isChecked === false).length)
    }, [props.todo])
    return(
        <div className={props.darkMode?"filter d-flex justify-content-evenly align-items-center":
        "filter d-flex justify-content-evenly align-items-center light-filter"}>
            <div className="items-left filter-items">{items} {items > 1? "items": "item"} left</div>
            <div className="status d-flex justify-content-between align-items-center">
                <div className={props.activeBtn==="all"? "all filter-items": "filter-items"} onClick={()=>props.all("all")}>All</div>
                <div className={props.activeBtn==="active"? "active filter-items": "filter-items"} onClick={()=>props.active("active")}>Active</div>
                <div className={props.activeBtn==="completed"? "completed filter-items": "filter-items"} onClick={()=>props.complete("complete")}>Completed</div>
            </div>
            <div className="clear filter-items" onClick={props.clear}>Clear Completed</div>
        </div>
    )
}