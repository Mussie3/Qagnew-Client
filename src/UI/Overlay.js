import React, { useEffect } from 'react'
import { ReactComponent as Left } from '../assets/chevron-left-icon.svg';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Quote } from '../assets/quotes.svg';
import Card from '../UI/Card';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Overlay = (props) => {

    const isMedium = useMediaQuery({ query: '(max-width: 1500px)' });
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
        <div className="flex w-screen h-[60%] items-center relative">
                {
                    +props.selected <= 1 ?
                        <Card className={`absolute flex z-100 w-[62%] animate-fadeColor ${+props.selected === 1 ? `${isMedium ? 'left-[33%]' : 'left-[27.5%]' }` : `${isMedium ? 'left-[0%]' : 'left-[2.5%]' }`}`}> 
                            <div className={`${isMedium?'w-1/2':'w-1/3'} h-full`}>
                                <div className={`flex w-full h-2/6`}>
                                    <div className="w-1/3 px-2 pt-12 animate-fadeIn"><img src={props.profile_pic} alt="profile_pic" className="w-24"/></div>
                                    <div className="w-2/3 flex items-end p-4 animate-fadeIn">
                                        <div>
                                            <div className="py-2 font-MaruBuri_Regular font-semibold text-sm animate-fade">{props.name}</div>
                                            <div className="py-2 font-MaruBuri_Regular text-sm animate-fade">{props.company}, {props.position}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 h-3/6">
                                    <div><Quote className="fill-[#FFC60B] w-10 h-10 animate-fadeIn"/></div>
                                    <div className="font-MaruBuri_Regular text-sm font-semibold py-1 px-2 leading-6 animate-fadeIn">{props.summery}</div>
                                </div>
                                <div className="flex w-full items-end p-4 h-1/6">
                                    <div className={`${isMedium ? 'w-2/3' : 'w-1/2'}`}><button onClick={props.onClick} className={`font-MaruBuri_Regular text-sm px-4 font-semibold flex items-center animate-fadeIn`}>최소화<span className="flex px-2"><Left className="fill-[#FFC60B] w-2 h-2"/><Left className="fill-[#FFC60B] w-2 h-2"/></span><span></span></button></div>
                                    <div className={`${isMedium ? 'w-1/3' : 'w-1/2'} flex justify-end`}><img src={props.logo} className="w-20 animate-fadeIn" alt="testimonial-logo"/></div>
                                </div>
                            </div>
                            <div className="flex items-center h-full"><div className="h-2/3 border-dashed border-l-[4px] items-center py-2 animate-fadeIn"/></div>
                            <div className={`${isMedium? 'w-1/2' : 'w-2/3'} h-full flex items-center relative`}>
                                <div className={`${isMedium ? 'px-6' : 'px-10'} h-full`}>
                                    <div ref={refDetail} className={`${isMedium ? 'h-1/12' : 'h-1/3'} flex items-end`}><Quote className="fill-[#FFC60B] w-10 h-10"/></div>
                                    <div className={`font-MaruBuri_Regular leading-6 ${isMedium ? 'h-11/12 text-[10px]' : 'h-2/3 text-sm'} h-full font-semibold py-1 px-2 leading-6 ${visibility && isDetailVisible ? 'transition translate-x-0 opacity-100 delay-300 duration-500 ease-in' : 'transition -translate-x-20 opacity-0 delay-300 duration-500 ease-out'}`}>
                                        {props.detail}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        :
                        <Card className={`absolute flex z-100 w-[62%] ${+props.selected === 2 ? 'right-[27.5%]' : 'right-[2.5%]'}`}>
                            <div className={`${isMedium?'w-1/2':'w-2/3'} flex items-center`}>
                                <div className={`${isMedium?'px-4':'px-10'}`}>
                                    <div ref={refDetail}><Quote className="fill-[#FFC60B] w-10 h-10"/></div>
                                    <div className={`font-MaruBuri_Regular leading-6 text-sm font-semibold py-1 px-2 leading-6 ${visibility && isDetailVisible ? 'transition translate-x-0 opacity-100 delay-300 duration-500 ease-in' : 'transition -translate-x-20 opacity-0 delay-300 duration-500 ease-out'}`}>
                                        {props.detail}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-full"><div className="h-2/3 border-dashed border-l-[4px] items-center py-2"/></div> 
                            <div className={`${isMedium?'w-1/2':'w-1/3'}`}>
                                <div className="flex w-full h-2/6">
                                    <div className="w-1/3 p-2"><img src={props.profile_pic} alt="profile_pic" className="w-24 h-24"/></div>
                                    <div className="w-2/3 flex items-end p-4">
                                        <div>
                                            <div className="py-2 font-MaruBuri_Regular font-semibold text-sm">{props.name}</div>
                                            <div className="py-2 font-MaruBuri_Regular text-sm">{props.company}, {props.position}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isMedium? 'px-2' : 'px-6'} h-3/6`}>
                                    <div><Quote className="fill-[#FFC60B] w-10 h-10"/></div>
                                    <div className="font-MaruBuri_Regular text-sm font-semibold py-1 px-2">{props.summery}</div>
                                </div>
                                <div className="flex w-full items-end p-4 h-1/6">
                                    <div className="w-1/2"><button onClick={props.onClick} className="font-MaruBuri_Regular text-sm px-4 font-semibold flex items-center">최소화<span className="flex px-2"><Left className="fill-[#FFC60B] w-2 h-2"/><Left className="fill-[#FFC60B] w-2 h-2"/></span><span></span></button></div>
                                    <div className="w-1/2 flex justify-end"><img src={props.logo} className="w-20" alt="testimonial-logo"/></div>
                                </div>
                            </div>
                        </Card>
                }
        </div>
        <div className="w-screen h-[15%]"></div>
    </div>
  )
}

export default Overlay;
