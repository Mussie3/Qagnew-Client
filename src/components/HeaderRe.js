import React, { useState } from 'react';
import logo from '../assets/qagnew_black_yellow_logo.svg';
import Hamburger from 'hamburger-react';
import {BiMenuAltRight} from 'react-icons/bi';
import {RxCross1} from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const HeaderRe = (props) => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' })

    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSmoothScroll = () => {
        props.onRequestMade(true);
    }
    

    const handleSelected = e => {
        if(e.currentTarget.value === 'English'){
            window.open("https://qagnew.com/", "_self");
            document.getElementById('selectedValue').value = '한국인';
        }
    }
  return (
    <div className="w-full h-[80px] flex bg-[#F7F7F7]">
        <div className="fixed z-20 flex w-full bg-[#f7f7f7]">
            <div className="flex p-2 w-1/3 cursor-pointer" onClick={()=>{navigate("/")}}>
                <img className="w-16 p-2" src={logo} alt='logo_react'/>
                <div className="text-xl p-2 pt-5" style={{fontFamily: 'Comfortaa', fontWeight: 900}}>Qagnew</div>
            </div>
            <div className="w-2/3 flex items-center justify-end">
                {!isSmall && 
                <div className="py-1 px-3">
                    <Link to="/#section_9"><button className="text-[#FFC60B] bg-[#000000] rounded-[5px] py-2 px-4 font-semibold hover:text-[#000000] hover:bg-[#FFC60B]" onClick={handleSmoothScroll}>문의하기</button></Link>
                </div>
                }
                <div className="px-6">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#000"/>
                </div>
            </div>
            {isOpen ? 
            <div className="fixed right-0 bottom-0 h-[calc(100%-85px)] z-10 bg-[#f7f7f7] w-1/2 translation-all translate-x-0 duration-1000 ease-in">
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <div><div className="p-4 font-MaruBuri_Regular text-center font-semibold cursor-pointer" onClick={()=>{navigate("/about"); setOpen(false)}}>About 강뉴</div></div>
                        <div className="p-4"><div className="w-full rounded-full h-[2px] border-none bg-[#D3D3D3]"/></div>
                        <div><div className="p-4 font-MaruBuri_Regular text-center font-semibold cursor-pointer" onClick={()=>{navigate("/price-policy"); setOpen(false)}}>가격정책</div></div>
                        <div className="p-4"><div className="w-full rounded-full h-[2px] border-none bg-[#D3D3D3]"/></div>
                        <div className="flex justify-center py-2 bg-[#f7f7f7]">
                            <select onChange={handleSelected} id="selectedValue" className="outline-none font-semibold bg-[#f7f7f7]">
                                <option value="한국인" className="font-MaruBuri_Regular font-semibold py-3">한국인</option>
                                <option value="English" className="font-MaruBuri_Regular font-semibold p-1">English</option>
                            </select>
                        </div>
                        <div className="p-4"><div className="w-full rounded-full h-[2px] border-none bg-[#D3D3D3]"/></div>
                        {isSmall &&
                        <div className="flex items-center justify-center">
                            <Link to="/#section_9"><button className="text-[#FFC60B] bg-[#000000] rounded-[5px] py-2 px-4 font-semibold hover:text-[#000000] cursor-pointer hover:bg-[#FFC60B]" onClick={handleSmoothScroll}>문의하기</button></Link>
                        </div>}
                    </div>
                </div>
            </div>:
            <div className="fixed -right-[100%] bottom-0 h-[calc(100%-85px)] z-10 bg-[#fff] w-1/2 translation-all duration-1000 ease-out">
            </div>
            }
            {/* <div className="p-4"><div className="w-0.5 rounded-full h-[3rem] bg-[#D3D3D3]"/></div>
            <div className="flex p-2">
                <div className="p-5">
                    <select onChange={handleSelected} id="selectedValue" className="outline-none font-semibold bg-[#F7F7F7]">
                        <option value="한국인" className="font-MaruBuri_Regular font-semibold p-1">한국인</option>
                        <option value="English" className="font-MaruBuri_Regular font-semibold p-1">English</option>
                    </select>
                </div>
            </div> */}
        </div>
        {/* <div className='flex justify-end w-1/2 p-4'>
            <div className="p-4 font-MaruBuri_Regular font-semibold">About 강뉴</div>
            <div className="p-4 font-MaruBuri_Regular font-semibold">가격정책</div>
            <div className="py-1 px-3">
                <button className="text-[#FFC60B] bg-[#000000] rounded-[5px] py-2 px-4 font-semibold hover:text-[#000000] hover:bg-[#FFC60B]">문의하기</button>
            </div>
        </div> */}
    </div>
  )
}

export default HeaderRe;
