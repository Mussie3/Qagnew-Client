import React from 'react';
import {ReactComponent as Circle} from '../assets/circle.svg';
import {ReactComponent as Design} from '../assets/circle-design.svg';
import { useMediaQuery } from 'react-responsive';

const Background = (props) => {
    const isMedium = useMediaQuery({ query: '(max-width: 1500px)' });
    return (
    <div className={`relative ${props.className}`}>
        <Circle className="absolute w-[650px] fill-[#F3F3F3]/[30%]"/>
        <Circle className="absolute w-[450px] fill-[#E0EDF4]/[50%]"/>
        <Circle className="absolute w-[200px] fill-[#FBFBEF]/[30%]"/>
        <Design className={`absolute -left-20 fill-[#E0EDF4]/[50%] -top-12 ${isMedium?'w-[300px]':'w-[500px]'}`}/>
        <Design className={`absolute fill-[#E0EDF4]/[50%] -bottom-12 ${isMedium?'w-[300px] -right-48':'w-[500px] -right-72'}`}/>
        <div className="absolute z-100">
            {props.children}
        </div>
    </div>
    )
}

export default Background;