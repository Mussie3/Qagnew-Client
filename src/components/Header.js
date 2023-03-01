import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/qagnew_black_yellow_logo.svg';

const Header = (props) => {

    const navigate = useNavigate();

    const handleScroll = () => {
        props.onRequestMade(true);
    }

    const handleSelected = e => {
        if(e.currentTarget.value === 'English'){
            window.open("https://qagnew.com/", "_self");
            document.getElementById('selectedValue').value = '한국인';
        }
    }
  return (
    <div className="w-[1200px] h-[80px] flex">
        <div className="flex w-1/2">
            <div className="flex p-2 cursor-pointer" onClick={()=>{navigate("/")}}>
                <img className="w-16 p-2" src={logo} alt='logo_react'/>
                <div className="text-xl p-2 pt-5" style={{fontFamily: 'Comfortaa', fontWeight: 900}}>Qagnew</div>
            </div>
            <div className="p-4"><div className="w-0.5 rounded-full h-[3rem] bg-[#D3D3D3]"/></div>
            <div className="flex p-2">
                <div className="p-5">
                    <select onChange={handleSelected} id="selectedValue" className="outline-none font-semibold bg-[#F7F7F7]">
                        <option value="한국인" className="font-MaruBuri_Regular font-semibold p-1">한국인</option>
                        <option value="English" className="font-MaruBuri_Regular font-semibold p-1">English</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='flex justify-end w-1/2 p-4'>
            <div className="p-4 font-MaruBuri_Regular font-semibold cursor-pointer" onClick={()=>{navigate("/about")}}>About 강뉴</div>
            <div className="p-4 font-MaruBuri_Regular font-semibold cursor-pointer" onClick={()=>{navigate("/price-policy")}}>가격정책</div>
            <div className="py-1 px-3">
                <a href="/#section_9"><button className="text-[#FFC60B] bg-[#000000] rounded-[5px] py-2 px-4 font-semibold hover:text-[#000000] hover:bg-[#FFC60B]" onClick={handleScroll}>문의하기</button></a>
            </div>
        </div>
    </div>
  )
}

export default Header;
