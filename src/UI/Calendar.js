import { differenceInDays, startOfMonth, endOfMonth, sub, add, format, setDate, isWeekend } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import Cell from "./Cell";

const dayOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일", 
] 

const Calendar = (props) => {
    const currentDate = new Date();
    const startDate = startOfMonth(props.value);
    const endDate = endOfMonth(props.value);
    const numDays = differenceInDays(endDate, startDate) + 1;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonthOnView, setCurrentMonthOnView] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState([new Date().getFullYear, new Date().getMonth]);
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();
    const prevMonth = () => {
        if(sub(props.value, {months: 1}).getFullYear() === currentDate.getFullYear()) {
            if (sub(props.value, {months: 1}).getMonth() === currentDate.getMonth()) {
                props.onChange(sub(props.value, {months: 1}));
                setCurrentMonthOnView(sub(props.value, {months: 1}))
            }
        }
        if(sub(props.value, {months: 1}).getFullYear() > currentDate.getFullYear()) {
            props.onChange(sub(props.value, {months: 1}));
            setCurrentMonthOnView(sub(props.value, {months: 1}))
        }
        if(sub(props.value, {months: 1}).getFullYear() === currentDate.getFullYear()) {
            if (sub(props.value, {months: 1}).getMonth() > currentDate.getMonth()) {
                props.onChange(sub(props.value, {months: 1}));
                setCurrentMonthOnView(sub(props.value, {months: 1}))
            }
        }
        if(sub(props.value, {months: 1}).getFullYear() === currentDate.getFullYear()) {
            if (sub(props.value, {months: 1}).getMonth() === currentDate.getMonth()) {
                if (sub(props.value, {months: 1}).getDate() > currentDate.getDate()) {
                    props.onChange(sub(props.value, {months: 1}));
                    setCurrentMonthOnView(sub(props.value, {months: 1}))
                }
            }
        }
    };
    const nextMonth = () => {
        props.onChange(add(props.value, {months: 1}))
        setCurrentMonthOnView(add(props.value, {months: 1}));
    };

    const handleIndex = (val) => {
        const date = setDate(props.value, val+1);
        setSelectedDate(date);
        console.log(date);
        props.selectedDate(date);
    }
    useEffect(()=>{
        console.log(currentMonthOnView.getMonth()+1);
        setCurrentMonth(()=> {return [currentMonthOnView.getFullYear(), currentMonthOnView.getMonth()+1]});
        console.log('Here');
    },[currentMonthOnView])
    return (
        <div className="flex w-full justify-center">
            <div className="w-[400px]">
                    <div className="flex w-full">
                        <div className="text-end w-1/3 text-xl cursor-pointer select-none" onClick={prevMonth}>{"<"}</div>
                        <div className="w-1/3 text-center p-1 pl-2 select-none font-MaruBuri_Regular font-semibold">{format(props.value, "LLLL yyyy", {locale: ko})}</div>
                        <div className="text-start w-1/3 text-xl cursor-pointer select-none" onClick={nextMonth}>{">"}</div>
                    </div>
                <div className="grid grid-cols-7 items-center justify-center">
                    {dayOfWeek.map(day => <div key={day} className="m-2 text-center text-xs py-2 uppercase select-none font-MaruBuri_Regular font-semibold">{day}</div>)}
                    {Array.from({length: prefixDays}).map((_, index) => 
                    <Cell key={index}/>)}
                    {currentDate.getMonth() === props.value.getMonth() && currentDate.getFullYear() === props.value.getFullYear()
                    ?
                    Array.from({length: numDays}).map((_, index) =>
                    <button key={index} disabled={(currentDate.getDate() <= index + 1) && (new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() !== 6 && new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() !== 0) ? false : true} onClick={()=>handleIndex(index)} className="flex justify-center p-1">
                        { selectedDate.getDate() ===  index + 1 && currentMonthOnView.getMonth() === selectedDate.getMonth() &&  currentMonthOnView.getFullYear() === selectedDate.getFullYear()?
                        <div className={`w-[35px] h-[35px] pt-1 text-md text-center select-none bg-[#FFC60B] rounded-full cursor-pointer`}>{index+1}</div>
                        :
                        <div className={`w-[35px] h-[35px] pt-1 text-md text-center select-none ${(currentDate.getDate() <= index + 1) && (new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() !== 6 && new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() !== 0) ? 'text-black hover:bg-[#FFC60B] hover:border rounded-full cursor-pointer' : 'text-[#D3D3D3] cursor-not-allowed rounded-full'}`}>{index+1}</div>
                        }
                    </button>)
                    : 
                    Array.from({length: numDays}).map((_, index) =>
                    <button key={index} disabled={(new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() === 6 || new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() === 0) ? true : false} onClick={()=>handleIndex(index)} className="flex justify-center p-1">
                        { selectedDate.getDate() ===  index + 1 && currentMonthOnView.getMonth() === selectedDate.getMonth() &&  currentMonthOnView.getFullYear() === selectedDate.getFullYear()?
                        <div className={`w-[35px] h-[35px] pt-1 text-md text-center select-none bg-[#FFC60B] rounded-full cursor-pointer`}>{index+1}</div>
                        :
                        <div className= {`w-[35px] h-[35px] pt-1 ${new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() === 6 || new Date(`${currentMonth[0]}-${currentMonth[1]}-${index+1}`).getDay() === 0 ? 'text-[#D3D3D3] cursor-not-allowed rounded-full' : 'text-black hover:bg-[#FFC60B] hover:border rounded-full cursor-pointer'}`}>{index+1}</div>
                        }
                        
                    </button>)
                    }
                    {console.log('done')}
                    {Array.from({length: suffixDays}).map((_, index) => 
                    <Cell key={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default Calendar;