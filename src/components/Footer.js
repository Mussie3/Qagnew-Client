import React from 'react';
import logo from '../assets/qagnew_reverse.svg';
import {ReactComponent as Telegram} from '../assets/telegram.svg';
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg';
import {ReactComponent as YouTube} from '../assets/youtube.svg';

const Footer = () => {
    return (
    <div className="flex w-[1200px] h-[180px]">
        <div className='w-1/12'>
            <img src={logo} alt="qagnew-logo" className="w-20 h-20"/>
        </div>
        <div className="w-11/12 flex">
            <div className='w-1/2 h-full'>
                <div className="h-2/3">
                    <div className="py-2">
                        <div className="font-MaruBuri_Regular font-semibold">Seoul Office</div>
                        <div className="font-MaruBuri_Regular text-sm">서울특별시 중구 을지로 251, 2층</div>
                    </div>
                    <div className="py-2 border-b-[1px]">
                        <div className="font-MaruBuri_Regular font-semibold">Addis Ababa Office</div>
                        <div className="font-MaruBuri_Regular text-sm">Room 303, 3rd floor, Grace Plaza, Namibia Avenue, Bole, Addis Ababa</div>
                    </div>
                </div>
                <div className="h-1/3 font-MaruBuri_Regular font-semibold text-sm flex items-center">© 2022 KeplerLab Co., Ltd. All rights reserved.</div>
            </div>
            <div className='w-1/2 h-full'>
                <div className="h-2/3 border-b-[1px] flex items-center justify-end">
                    <div className="px-2"><LinkedIn className="w-[30px] h-[30px]"/></div>
                    <div className="px-2"><Telegram className="w-[30px] h-[30px]"/></div>
                    <div className="px-2"><YouTube className="w-[30px] h-[30px]"/></div>
                </div>
                <div className="h-1/3 flex justify-end items-center">
                    <div className="pr-8 font-MaruBuri_Regular font-semibold">이용약관</div>
                    <div className="pl-8 font-MaruBuri_Regular font-semibold">개인정보보호</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;

