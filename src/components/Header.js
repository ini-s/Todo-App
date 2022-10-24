import React from 'react';
import { BsSunFill, BsMoon} from "react-icons/bs";
export default function Header(props){
    return(
        <div className="header">
            <div className="text d-flex justify-content-between align-items-center">
                <h1>T O D O</h1>
                <div onClick={props.toggle} className="sun">
                    {props.darkMode?  <BsSunFill/>  :
                    <BsMoon/>
                    }
                </div>
            </div>
        </div>
    )
}