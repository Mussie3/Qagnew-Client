import React from 'react';
import {ReactComponent as Circle} from '../assets/circle.svg';

const BackgroundRe = (props) => {
    return (
    <div className={`relative ${props.className}`}>
        <Circle className="absolute w-[550px] fill-[#F3F3F3]/[30%]"/>
        <Circle className="absolute w-[350px] fill-[#E0EDF4]/[50%]"/>
        <Circle className="absolute w-[150px] fill-[#FBFBEF]/[30%]"/>
        <div className="absolute z-100">
            {props.children}
        </div>
    </div>
    )
}

export default BackgroundRe;