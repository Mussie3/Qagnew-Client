import React, { useState } from 'react';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

const Questions = (props) => {

    const [open, setOpen] = useState(false);

    const handleClick = event => {
        setOpen(prev => !prev);
    }
  return (
    <div className="bg-[#F7F7F7]  rounded-b-[5px]">
        <div className={`w-full flex p-3 rounded-[5px] ${open ? 'text-[#000000]' : 'text-[#888888]'} text-sm select-none my-2 bg-[#F7F7F7] font-MaruBuri_Regular font-semibold cursor-pointer`} id={props.id} onClick={handleClick}>
            <div className="w-4/5">{props.question}</div>
            <div className="w-1/5 flex justify-end">{open ? <AiFillCaretUp/> : <AiFillCaretDown/>}</div>
        </div>
        {open && <div className="flex justify-center w-full py-2"><div className="border-b-[3px] border-[#E0E0E0] w-4/5 "/></div>}
        {open && <div className="text-sm px-2 py-1">{props.answer}</div>}
    </div>
  )
}

export default Questions;