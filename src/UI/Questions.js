import React, { useState } from 'react'

const Questions = (props) => {

    const handleClick = event => {
        props.selectedQ(event.target.id);
    }
  return (
    <div className={`w-full p-3 rounded-[5px] text-sm select-none my-2 bg-[#F7F7F7] font-MaruBuri_Regular font-semibold cursor-pointer ${+props.selected === props.id ? 'text-[#000000] border-[1px] border-[#000000]' : 'text-[#888888]'} `} id={props.id} onClick={handleClick}>
        {props.question}
    </div>
  )
}

export default Questions;
