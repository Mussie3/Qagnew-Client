import { useEffect, useState } from "react";
import Calendar from "../UI/Calendar";
import Time from "../UI/Time";
import {RxCrossCircled} from 'react-icons/rx';
import emailjs from '@emailjs/browser';
import useInput from "../hooks/use-Input";

let dateEntered = false;

const ContactRe = (props) => {

    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');
    const [thirdDate, setThirdDate] = useState('');
    const [tempDate, setTempDate] = useState('')
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dateSelected, setDateSelected] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateEntry, setDateEntry] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [email, setEmail] = useState(props.emailHeroVal);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [emailWasTouched, setEmailWasTouched] = useState(false);


    
    const {value: name, handleValue: handleName, handleValueBlur: handleNameBlur, valueIsValid: nameIsValid, valueWasTouched: nameWasTouched, reset: resetName} = useInput();
    const {value: companyName, handleValue: handleCompanyName, handleValueBlur: handleCompanyNameBlur, valueIsValid: companyNameIsValid, valueWasTouched: companyNameWasTouched, reset: resetCompanyName} = useInput();
    const {value: message, handleValue: handleMessage, handleValueBlur: handleMessageBlur, valueIsValid: messageIsValid, valueWasTouched: messageWasTouched, reset: resetMessage} = useInput();
    const {value: phone, handleValue: handleTelephone, reset: resetTelephone} = useInput('');

    const [formIsValid, setFormIsValid] = useState(false);

    const handleEmail = e => {
        if(e.target.value.includes('@') || email.includes('@') || props.emailHeroVal.includes('@')) {
            setEmailIsValid(true);
        }else {setEmailIsValid(false);}
        setEmail(e.target.value);
    }

    const handleEmailBlur = () =>{
        setEmailWasTouched(true);
    }


    const handelSelectedDate = (val) => {
        console.log(val);
        setSelectedDate(val);
        if(firstDate.length === 0) {
            setTempDate(()=> {return val.toLocaleDateString("ko-KR")});
            setDateSelected(true);
        } else if(secondDate.length === 0) {
            setTempDate(()=> {return val.toLocaleDateString("ko-KR")});
            setDateSelected(true);
        } else {
            setTempDate(()=> {return val.toLocaleDateString("ko-KR")});
            setDateSelected(true);
        }
      }
    const handleSelectedTime = (val) => {
        if(firstDate.length <= 12) {
          setFirstDate(prev=> {return `${tempDate} ${val}` });
          if(secondDate.trim().length <= 1) {
            setSecondDate('|');
          } else if (thirdDate.trim().length <= 1) {
            setThirdDate('|');
          }
          setDateSelected(false);
        } else if(secondDate.length <= 12) {
          setSecondDate(prev=> {return `${tempDate} ${val}` });
          setDateSelected(false);
          if(thirdDate.trim().length <= 1) {
            setThirdDate('|');
          }
        } else {
          setThirdDate(prev=> {return `${tempDate} ${val}` });
          setDateSelected(false);
        }
      }
    const handleCalendarReveal = () => {
        setDateEntry(true);
        setFormIsValid(companyNameIsValid && nameIsValid && (email.includes('@') || props.emailHeroVal !== 0) && messageIsValid && firstDate.trim().length > 1);
        setFirstDate('');
        setFirstDate('|');
    }

    const handleClick = event => {
        if(event.currentTarget.id === "first") {
            setFirstDate('|');
            if (secondDate.length <= 1) {
                setSecondDate('');
            } else if (thirdDate.length <= 1) {
                setThirdDate('');
            }
            setDateSelected(false);}
        if(event.currentTarget.id === "second") {
            if(firstDate.length <= 1){
                setFirstDate('|');
                setThirdDate(''); 
                setSecondDate('')
            } else if (thirdDate.length <= 1) {
                setSecondDate('|'); 
                setThirdDate('');
            } else {
                setSecondDate('|'); 
            }
            setDateSelected(false);}
        if(event.currentTarget.id === "third") {
            if(firstDate.length <= 1 || secondDate.length <= 1){
                setThirdDate('');   
            } else {
                setThirdDate('|'); 
            }
            setDateSelected(false);}
      }

      const handleClickEmail = () => {
        setClicked(true);
        setEmail(props.emailHeroVal);
        setEmailIsValid(true);
      }

      useEffect(()=>{
        setFormIsValid(()=> {
            if(dateEntry) {
                dateEntered = firstDate.length > 20
            } else {
                dateEntered = firstDate.length <= 20;
            }
            return companyNameIsValid && nameIsValid && (email.includes('@') || props.emailHeroVal !== 0) && messageIsValid && dateEntered;
            
        });
      },[companyNameIsValid, nameIsValid, email, messageIsValid, firstDate, dateEntry])

      const handleSubmit = (e) => {
        e.preventDefault();

        const EnteredValue = {
            company: companyName,
            name: name,
            email: email,
            phone: phone,
            message: message,
            firstDate: firstDate,
            secondDate: secondDate,
            thirdDate: thirdDate
        }

        emailjs.send('service_kd853dx','template_sa38rbi', EnteredValue, 'GJjgD29Mm-Bx4PYuE')
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
            console.log('FAILED...', err);
            });
        resetName();
        setEmail('');
        resetCompanyName();
        resetTelephone();
        resetMessage();
        setFormIsValid(false);
        setDateEntry(false);
        setFirstDate('');
        setSecondDate('');
        setThirdDate('');
      }

    return (
        <div className="w-full h-full" id={props.id}>
            <div className="flex items-end w-full justify-center"><div className="w-11/12 font-MaruBuri_Regular py-8 text-3xl font-semibold">서비스 문의하기</div></div>
            <div className="w-full flex justify-center h-full">
                <div className="w-11/12 justify-center">
                    <form className="w-full">
                        <div className={`${dateEntry ? 'w-full animate-fadeIn' : 'w-full'} p-2 h-full`}>
                            <div className="flex w-full h-1/4">
                                <div className="w-1/2">
                                    <div className="p-2"><label htmlFor="company">회사명 <span className="text-[#FFC60B] text-xl">*</span></label></div>
                                    <div className="p-2"><input name="company" id='company' type="text" value={companyName} onBlur={handleCompanyNameBlur} onChange={handleCompanyName} placeholder="회사명을 입력해주세요." className={`font-MaruBuri_Regular shadow-inner outline-none shadow-[#000]/[20%] rounded-[10px] border-[1px] ${(companyNameIsValid && companyNameWasTouched) || !companyNameWasTouched? 'border-[#000]/[5%]' : 'border-[#FF0000]'} p-2 text-sm w-full h-[50px]`}/></div>
                                </div>
                                <div className="w-1/2">
                                    <div className="p-2"><label htmlFor="name">담당자 <span className="text-[#FFC60B] text-xl">*</span></label></div>
                                    <div className="p-2"><input name="name" id='name' type="text" value={name} onBlur={handleNameBlur} onChange={handleName} placeholder="담당자 성함을 입력해주세요." className={`font-MaruBuri_Regular shadow-inner shadow-[#000]/[20%] outline-none rounded-[10px] border-[1px] ${(nameIsValid && nameWasTouched) || !nameWasTouched? 'border-[#000]/[5%]' : 'border-[#FF0000]'}  p-2 text-sm w-full h-[50px]`}/></div>
                                </div>
                            </div>
                            <div className="flex w-full h-1/4">
                                <div className="w-1/2">
                                    <div className="p-2"><label htmlFor="email">이메일 <span className="text-[#FFC60B] text-xl">*</span></label></div>
                                    <div className="p-2">
                                        {props.emailHeroVal.length !== 0 && !clicked ? <div className={`shadow-inner rounded-[10px] outline-none shadow-[#000]/[20%] border-[1px] border-[#000]/[5%] py-3 px-2 text-sm w-full h-[50px]`} onClick={handleClickEmail}>{props.emailHeroVal}</div> : <input name="email" id="email" type="email" value={email} onBlur={handleEmailBlur} onChange={handleEmail} placeholder="이메일 주소를 입력해주세요." className={`shadow-inner rounded-[10px] outline-none shadow-[#000]/[20%] border-[1px] ${(emailIsValid && emailWasTouched) || !emailWasTouched? 'border-[#000]/[5%]' : 'border-[#FF0000]'} p-2 text-sm w-full h-[50px]`}/>}
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="p-2"><label htmlFor="phone">연락처</label></div>
                                    <div className="p-2"><input name="phone" id="phone" type="tel" value={phone} onChange={handleTelephone} placeholder="연락처를 입력해주세요." className={`shadow-inner font-MaruBuri_Regular shadow-[#000]/[20%] rounded-[10px] outline-none border-[1px] border-[#000]/[5%] p-2 text-sm w-full h-[50px]`}/></div>
                                </div>
                            </div>
                            <div className="w-full h-[300px]">
                                <div className="p-2"><label>요청사항 <span className="text-[#FFC60B] text-xl">*</span></label></div>
                                <div className="p-2 h-2/3"><textarea name="message" onChange={handleMessage} value={message} onBlur={handleMessageBlur} className={`shadow-inner font-MaruBuri_Regular shadow-[#000]/[20%] rounded-[15px] outline-none border-[1px] ${(messageIsValid && messageWasTouched) || !messageWasTouched ? 'border-[#000]/[5%]' : 'border-[#FF0000]'} p-2 text-sm w-full h-full`} placeholder="ex. 전문기술, 채용인원, 프로젝트 등 채용을 원하시는 개발자의 요구사항을 입력해주세요."/></div>
                            </div>
                        </div>
                    </form>
                    {dateEntry ?
                            <div className={`w-full animate-fadeIn px-4`}>
                                <div className={`bg-[#F7F7F7] rounded-xl w-full p-2 shadow-lg shadow-[#000]/[20%] ${dateSelected ? 'h-[80%] shadow-xl transition ease-in duration-500 delay-300' : 'h-[65%] transition ease-in duration-500'}`}>
                                <div className={`${dateEntry ? 'w-full animate-fadeIn' : 'w-full'}`}>
                                    <div className="w-full p-2">
                                        <div className="px-2 py-1 font-MaruBuri_Regular">1순위 <span className="text-[#FFC60B] text-xl">*</span></div>
                                        <div className="p-2 flex shadow-inner shadow-[#000]/[20%] rounded-[10px] border-[1px] border-[#000]/[5%] h-[50px]">
                                            <div className={`text-sm w-full flex items-center cursor-pointer ${dateEntry && firstDate.trim().length <= 1 && 'animate-bounce'}`}>{firstDate}</div>
                                            <div className="w-1/3 flex justify-end p-1"><RxCrossCircled className={`text-xl text-[#808080] hover:text-[#000] ${firstDate.trim().length !== 0 && dateEntry ? 'visible' : 'invisible'}`} onClick={handleClick} id="first"/></div>
                                        </div>
                                    </div>
                                    <div className="w-full p-2">
                                        <div className="px-2 py-1 font-MaruBuri_Regular">2순위</div>
                                        <div className="p-2 flex shadow-inner shadow-[#000]/[20%] rounded-[10px] border-[1px] border-[#000]/[5%] h-[50px]">
                                            <div className={`text-sm w-full flex items-center ${dateEntry && secondDate.trim().length <= 1 && 'animate-bounce'}`}>{secondDate}</div>
                                            <div className="w-1/3 flex justify-end p-1"><RxCrossCircled className={`text-xl text-[#808080] hover:text-[#000] ${secondDate.trim().length !== 0 ? 'visible' : 'invisible'}`} onClick={handleClick} id="second"/></div>
                                        </div>
                                    </div>
                                    <div className="w-full p-2">
                                        <div className="px-2 py-1 font-MaruBuri_Regular">3순위</div>
                                        <div className="p-2 flex shadow-inner shadow-[#000]/[20%] rounded-[10px] border-[1px] border-[#000]/[5%] h-[50px]">
                                            <div className={`text-sm w-full flex items-center ${dateEntry && thirdDate.trim().length <= 1 && 'animate-bounce'}`}>{thirdDate}</div>
                                            <div className="w-1/3 flex justify-end p-1"><RxCrossCircled className={`text-xl text-[#808080] hover:text-[#000] ${thirdDate.trim().length !== 0 ? 'visible' : 'invisible'}`} onClick={handleClick} id="third"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-2 animate-fadeIn">
                                    <Calendar value={currentDate} onChange={setCurrentDate} selectedDate={handelSelectedDate}/>
                                    <div className={`flex justify-center ${ dateSelected ? 'duration-500 transition-all ease-in opacity-100 mx-2':'opacity-0 mx-2 duration-500 transition-all ease-out'}`}>
                                        <Time selectedTime={handleSelectedTime} value={selectedDate}/>
                                    </div>
                                </div>
                                </div>
                            </div>
                                 :
                                <div className="font-MaruBuri_Regular font-semibold" onClick={handleCalendarReveal}>미팅이 가능한 시간을 선택해주세요. 일정이 확정되면 연락을 드립니다.</div>
                            }
                    <div className={`flex w-full py-6 items-end`}>
                        <div className="w-full h-full items-center pb-6 flex"><button onClick={handleSubmit} disabled={formIsValid ? false : true} className={`w-full ${formIsValid ? 'cursor-pointer text-[#FFC60B] bg-[#000]' : 'cursor-not-allowed text-[#fff] bg-[#808080]'} rounded-[10px] py-4`}>문의하기</button></div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ContactRe;