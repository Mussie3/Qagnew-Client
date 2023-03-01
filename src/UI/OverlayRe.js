import React, { useEffect } from 'react'
import { ReactComponent as Left } from '../assets/chevron-left-icon.svg';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Quote } from '../assets/quotes.svg';
import Card from '../UI/Card';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Overlay = (props) => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' });

    const { ref: refDetail, inView: isDetailVisible } = useInView();
    const [visibility, setVisibility] = useState(false);

    useEffect(()=>{
        const TimerValue = setTimeout(()=>{
            if(props.wasClicked === true) {
                setVisibility(true);
            } else {
                setVisibility(false);
            }
        },500);

        return ()=>{clearTimeout(TimerValue)}
    },[props.wasClicked]);
  return (
    <div className="absolute w-screen h-screen bg-[#000000]/[50%] z-10" onClick={props.onClick}>
        <div className="flex w-screen h-[25%]"></div>
        <div className="flex w-screen h-[60%] items-center justify-center relative">
                        <Card className={`absolute flex z-100 ${isSmall ? 'w-[300px]' : 'w-[400px]'} animate-fadeColor`}> 
                            <div className="w-full h-full flex items-center relative">
                                <div className="px-10 pt-10">
                                    <div ref={refDetail} className="flex items-end h-1/5"><Quote className="fill-[#FFC60B] w-10 h-10"/></div>
                                    <div className={`font-MaruBuri_Regular leading-6 h-3/5 h-full ${isSmall ? 'text-[8px]' : 'text-[10px]'} font-semibold py-1 px-2 leading-6 ${visibility && isDetailVisible ? 'transition translate-x-0 opacity-100 delay-300 duration-500 ease-in' : 'transition -translate-x-20 opacity-0 delay-300 duration-500 ease-out'}`}>
                                        {props.detail}
                                    </div>
                                    <div className="w-full h-1/5 pb-10"><button onClick={props.onClick} className={`font-MaruBuri_Regular px-4 ${isSmall ? 'text-[10px]' : 'text-sm'} font-semibold flex items-center animate-fadeIn`}>최소화<span className="flex px-2"><Left className="fill-[#FFC60B] w-2 h-2"/><Left className="fill-[#FFC60B] w-2 h-2"/></span><span></span></button></div>
                                </div>
                            </div>
                        </Card>
        </div>
        <div className="w-screen h-[15%]"></div>
    </div>
  )
}   

export default Overlay;