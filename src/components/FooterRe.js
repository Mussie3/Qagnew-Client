import React from 'react';
import logo from '../assets/qagnew_reverse.svg';
import {ReactComponent as Telegram} from '../assets/telegram.svg';
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg';
import {ReactComponent as YouTube} from '../assets/youtube.svg';
import { useMediaQuery } from 'react-responsive';

const FooterRe = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 399px)' })
    return (
    <div className="h-[180px]">
        <div className="w-11/12 flex py-2">
            <div className={`w-1/5 flex justify-center`}>
                <img src={logo} alt="qagnew-logo" className={` ${isSmall? 'w-10 h-10 mt-2' : 'w-14 h-14'}`}/>
            </div>
            <div className='w-4/5 h-full'>
                <div className="h-2/3">
                    <div className="py-2">
                        <div className={`font-MaruBuri_Regular ${isSmall?'text-sm':''} font-semibold`}>Seoul Office</div>
                        <div className={`font-MaruBuri_Regular ${isSmall?'text-[10px]':'text-sm'} `}>서울특별시 중구 을지로 251, 2층</div>
                    </div>
                    <div className="py-2 border-b-[1px]">
                        <div className={`font-MaruBuri_Regular ${isSmall?'text-sm':''} font-semibold`}>Addis Ababa Office</div>
                        <div className={`font-MaruBuri_Regular ${isSmall?'text-[10px]':'text-sm'} `}>Room 303, 3rd floor, Grace Plaza, Namibia Avenue, Bole, Addis Ababa</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex py-2 '>
            <div className={` ${isSmall ? 'w-3/5' : 'w-1/2' } flex justify-end items-center`}>
                <div className={`pr-8 font-MaruBuri_Regular ${isSmall ? 'text-[10px]' : ''} font-semibold`}>이용약관</div>
                <div className={`pl-8 font-MaruBuri_Regular ${isSmall ? 'text-[10px]' : ''} font-semibold`}>개인정보보호</div>
            </div>
            <div className={` ${isSmall ? 'w-2/5' : 'w-1/2' } flex justify-end items-center`}>
                <div className="px-2"><LinkedIn className={`${isSmall ? 'w-[20px] h-[20px]' : 'w-[30px] h-[30px]'}`}/></div>
                <div className="px-2"><Telegram className={`${isSmall ? 'w-[20px] h-[20px]' : 'w-[30px] h-[30px]'}`}/></div>
                <div className="px-2"><YouTube className={`${isSmall ? 'w-[20px] h-[20px]' : 'w-[30px] h-[30px]'}`}/></div>
            </div>
        </div>
        <div className={`bg-[#F7F7F7] w-full font-MaruBuri_Regular font-semibold ${isSmall?'text-[10px]':'text-sm'} flex items-center pb-8 pt-2 px-4`}>© 2022 KeplerLab Co., Ltd. All rights reserved.</div>
    </div>
    )
}

export default FooterRe;