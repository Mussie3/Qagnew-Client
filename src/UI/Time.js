import React, { useEffect, useState } from 'react';
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';


const availableTimes = [
    {
        id: 0,
        actualHour: 9,
        hour: 9,
        minute: 0,
        refTime: 'AM'
    },
    {
        id: 1,
        actualHour: 9,
        hour:  9,
        minute: 30,
        refTime: 'AM'
    },
    {
        id: 2,
        actualHour: 10,
        hour: 10,
        minute: 0,
        refTime: 'AM'
    },
    {
        id: 3,
        actualHour: 10,
        hour: 10,
        minute: 30,
        refTime: 'AM'
    },
    {
        id: 4,
        actualHour: 11,
        hour: 11,
        minute: 0,
        refTime: 'AM'
    },
    {
        id: 5,
        actualHour: 11,
        hour: 11,
        minute: 30,
        refTime: 'AM'
    },
    {
        id: 6,
        actualHour: 12,
        hour: 12,
        minute: 0,
        refTime: 'PM'
    },
    {
        id: 7,
        actualHour: 12,
        hour: 12,
        minute: 30,
        refTime: 'PM'
    },
    {
        id: 8,
        actualHour: 13,
        hour: 1,
        minute: 0,
        refTime: 'PM'
    },
    {
        id: 9,
        actualHour: 13,
        hour: 1,
        minute: 30,
        refTime: 'PM'
    },
    {
        id: 10,
        actualHour: 14,
        hour: 2,
        minute: 0,
        refTime: 'PM'
    },
    {
        id: 11,
        actualHour: 14,
        hour: 2,
        minute: 30,
        refTime: 'PM'
    },
    {
        id: 12,
        actualHour: 15,
        hour: 3,
        minute: 0,
        refTime: 'PM'
    },
    {
        id: 13,
        actualHour: 15,
        hour: 3,
        minute: 30,
        refTime: 'PM'
    },
    {
        id: 14,
        actualHour: 16,
        hour: 4,
        minute: 0,
        refTime: 'PM'
    },
    {
        id: 15,
        actualHour: 16,
        hour: 4,
        minute: 30,
        refTime: 'PM'
    },
    {
        id: 16,
        actualHour: 17,
        hour: 5,
        minute: 0,
        refTime: 'PM'
    },
];

let count = 0;
let newArray = [];

export default function Time (props) {
    const date = new Date();;
    let notAvailable = false;
    const [isToday, setIsToday] = useState(true);
    let val = false;

    if (isToday) {
        for (let index = 0 ; index < availableTimes.length ; index++) {
            if(date.getHours() < availableTimes[index].actualHour) {
                console.log('here we go');
                newArray = availableTimes.filter(prev => prev.id >= index);
                val = true;
                break;
            } else if (date.getHours() === availableTimes[index].actualHour && date.getHours() < 16) {
                console.log('here we what');
                if (date.getMinutes() >= 0 && date.getMinutes() < 30) { 
                    newArray = availableTimes.filter(prev => ((prev.id === index && prev.minute === 30) || prev.id > index));
                }
                else {
                    newArray = availableTimes.filter(prev => (prev.id > index+1));
                }
                val = true;
                break;
            }
        }
        if(!val){
            console.log('No here I am')
            newArray = [availableTimes[0]] 
            notAvailable = true;
        }
    } else {
        console.log('Here I am')
        newArray = availableTimes;
    }

    const [hour, setHour] = useState(newArray[0].hour);
    const [minute, setMinute] = useState(newArray[0].minute);
    const [refTime, setRefTime] = useState(newArray[0].refTime);

    const IncreaseTime = () => {
        if(count+1 === newArray.length){
            setHour(newArray[0].hour); 
            setMinute(newArray[0].minute);
            setRefTime(newArray[0].refTime)
            count = 0;
            return;
        }
        count++;
        setHour(newArray[count].hour); 
        setMinute(newArray[count].minute);
        setRefTime(newArray[count].refTime);
    }
    const DecreaseTime = () => {
        console.log(newArray);
        if(count === 0){
            setHour(newArray[newArray.length-1].hour);
            setMinute(newArray[newArray.length-1].minute);   
            setRefTime(newArray[newArray.length-1].refTime);
            count = newArray.length-1;
            return;
        }
        count--;
        setHour(newArray[count].hour); 
        setMinute(newArray[count].minute);
        setRefTime(newArray[count].refTime);
    }

    const handleTimeSelect = (e) => {
        e.preventDefault();
        props.selectedTime(`${hour < 10 ? '0'+hour : hour}:${minute < 10 ? '0'+minute : minute} ${refTime}`);
    }

    useEffect(()=>{
        if (date.getDate() === props.value.getDate() && date.getMonth() === props.value.getMonth() && date.getFullYear() === props.value.getFullYear()) {
            setIsToday(true);
        } else {
            setIsToday(false); 
        }
    }, [props.value]);

  return (
    <div>
        {!notAvailable ?
        <div className="mt-2 flex px-5 py-2 w-full">
            <div>
                <button className="flex justify-center w-full cursor-pointer select-none" onClick={IncreaseTime}><AiOutlineUp className={`text-xl`}/></button>
                <div className="flex">
                    <div className="flex items-center">
                        <div className="text-xl select-none">{hour < 10 ? '0' + hour : hour}</div>
                    </div>
                    <div className="text-xl mx-3 flex items-center select-none">:</div>
                    <div className="mx-2 flex items-center">
                        <div className="text-xl select-none">{minute < 10 ? '0' + minute : minute}</div>
                    </div>
                    <div className='mx-2 flex items-center'>
                        <div className="text-xl cursor-pointer select-none">{refTime}</div>
                    </div>
                </div>
                <button className={`flex w-full justify-center cursor-pointer select-none`} onClick={DecreaseTime}><AiOutlineDown className={`text-xl`}/></button>
            </div>
            <div className="flex items-center w-full px-1"><div className={`border-none rounded-[5px] w-[70px] text-sm font-semibold px-2 py-1 bg-[#FFC60B] text-[#000] cursor-pointer hover:bg-[#000] hover:text-[#FFC60B] w-full my-2 select-none`} onClick={handleTimeSelect}>선택</div></div>
        </div>
        :<p className="py-4 font-MaruBuri_Regular">미팅가능시간 : 9:00~17:00</p>}
    </div>
  )
}