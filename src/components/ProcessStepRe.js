import { ReactComponent as Logo } from '../assets/logoQ.svg';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Left } from '../assets/chevron-left-icon.svg';
import { ReactComponent as Right } from '../assets/chevron-right-icon.svg';
import { ReactComponent as Inqury } from '../assets/Inqury.svg';
import { ReactComponent as Selection } from '../assets/selection.svg';
import { ReactComponent as Interview } from '../assets/interview.svg';
import { ReactComponent as Contract } from '../assets/contract.svg';
import { ReactComponent as Support } from '../assets/support.svg';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

let count;
const ProcessStepRe = (props) => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' });

    const { ref: ref_1, inView: isFisrtVisible } = useInView();
    const { ref: ref_2, inView: isSecondVisible } = useInView();
    const { ref: ref_3, inView: isThirdVisible } = useInView();
    const { ref: ref_4, inView: isFourthVisible } = useInView();
    const { ref: ref_5, inView: isfifthVisible } = useInView();

    // if(isFisrtVisible){
    //     count = 2;
    // }
    // if(isSecondVisible){
    //     count = 3;
    // }
    // if(isThirdVisible){
    //     count = 4;
    // }
    // if(isFourthVisible){
    //     count = 5;
    // }
    // if(isfifthVisible){
    //     count = 1;
    // }

    const handleScroll = () => {}

    // useEffect(() => {
    //     const timerValue = setTimeout(()=>{
    //         const element = document.getElementById(`process-${count}`);
    //         console.log(element);
    //         console.log(count);
    //         element.scrollIntoView({ behavior: 'smooth' })
    //       }
        
    //     , 5000)
    //     return () => { clearTimeout(timerValue)}
    //   }, [count])
  return (
    <div className="">
        <div className="">
            <div className="">
                <div className="flex w-full pt-6 pl-5">
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isFisrtVisible || isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] ' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isFisrtVisible || isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300'}`}>1</div>
                            {!isSmall && <div className={`absolute ${isSmall ? 'text-[8px]' : 'text-[10px]'} top-12 font-MaruBuri_Regular font-semibold`}>채용문의</div>}
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isFisrtVisible || isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all  ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300 '}`}>2</div>
                            {!isSmall && <div className={`absolute ${isSmall ? 'text-[8px]' : 'text-[10px]'} top-12 font-MaruBuri_Regular font-semibold`}>지원자 모집</div>}
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isThirdVisible || isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isThirdVisible || isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300 '}`}>3</div>
                            {!isSmall && <div className={`absolute ${isSmall ? 'text-[8px]' : 'text-[10px]'} top-12 font-MaruBuri_Regular font-semibold`}>면접 및 선발</div>}
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isThirdVisible || isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300 '}`}>4</div>
                            {!isSmall && <div className={`absolute ${isSmall ? 'text-[8px]' : 'text-[10px]'} top-12 font-MaruBuri_Regular font-semibold`}>계약진행</div>}
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-2/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300'}`}>5</div>
                            {!isSmall && <div className={`absolute ${isSmall ? 'text-[8px]' : 'text-[10px]'} top-12 font-MaruBuri_Regular font-semibold`}>기술지원</div>}
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2.3rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="snap-x snap-mandatory overflow-y-hidden flex w- scrollbar-none">
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${1}`}>
                <div className={` ${isSmall ? 'pt-2' : 'pt-20'} w-11/12 items-center`}>
                    <div className=" flex w-full">
                        <div className={`${isSmall ? 'text-md' : 'text-lg'} w-1/2 flex items-end font-MaruBuri_Regular font-semibold`}>Step1 채용문의</div>
                        <div className="w-1/2 flex">
                            <div className='w-full' ref={ref_1}><Inqury className="w-[150px] h-[150px]"/></div>
                        </div>
                    </div>
                    <div className={`${isSmall ? 'text-lg' : 'text-xl'} py-4 font-MaruBuri_Regular font-semibold`}>필요한 개발자를 문의해보세요.</div>
                    <div  className={`${isSmall ? 'text-md' : 'text-lg'} py-4 font-MaruBuri_Regular`}>니즈에 적합한 지원자를 제안하기 위해 채용을 원하는 지원자의 요구사항을 확인합니다.</div>
                    <ul className={`${isSmall ? 'text-[10px] px-4' : 'text-sm px-10'} list-disc font-MaruBuri_Regular`}>
                        <li className="py-2">전문지식, 경력 등 기술관련 사항을 확인합니다.</li>
                        <li className="py-2">급여, 근무조건 및 기간 등 인사관련 사항을 확인합니다.</li>
                        <li className="py-2">기타 채용과 관련된 요구사항을 확인합니다.</li>
                    </ul>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${2}`}>
                <div className={` ${isSmall ? 'pt-2' : 'pt-20'} w-11/12 items-center`}>
                    <div className="w-full flex">
                        <div className={`${isSmall ? 'text-md' : 'text-lg'} w-1/2 flex items-end font-MaruBuri_Regular font-semibold`}>Step2 지원자 모집</div>
                        <div className="w-1/2 flex">
                        <div className="w-full" ref={ref_2}><Selection className="w-[150px] h-[150px]"/></div>
                        </div>  
                    </div>
                    <div className={`${isSmall ? 'text-lg' : 'text-xl'} py-4 font-MaruBuri_Regular font-semibold`}>요구사항에 맞는 지원자를 모집하고 검증합니다.</div>
                    <ul className={`${isSmall ? 'text-[10px]' : 'text-sm'} font-MaruBuri_Regular`}>
                        <li className="py-2">요청된 요구사항에 최적화된 개발인력을 지원받는 절차입니다.</li>
                        <li className="py-2">최대 2주까지 소요되며, 모집 속도에 따라 2주 내로 지원자 정보를 안내해 드립니다.</li>
                        <li className="py-2">지원자 정보는 전체 모집인원 중 선발된 인원에 대한 검증레포트로 제공됩니다.</li>
                    </ul>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${3}`}>
                <div className={` ${isSmall ? 'pt-2' : 'pt-20'} w-11/12 items-center`}>
                    <div className="w-full flex">
                        <div className={`${isSmall ? 'text-md' : 'text-lg'} w-1/2 flex items-end font-MaruBuri_Regular font-semibold`}>Step3 면접 및 선발</div>
                        <div className="w-1/2 flex">
                            <div className="w-full" ref={ref_3}><Interview className="w-[150px] h-[150px]"/></div>
                        </div>
                    </div>
                    <div className={`${isSmall ? 'text-lg' : 'text-xl'} py-4 font-MaruBuri_Regular font-semibold`}>검증된 개발자들 중 최종 합격자를 선발합니다.</div>
                    <ul className={`${isSmall ? 'text-[10px]' : 'text-sm'} font-MaruBuri_Regular`}>
                        <li className="py-2">지원자들 중 인터뷰를 원하실 경우 화상면접을 진행하실 수 있습니다.</li>
                        <li className="py-2">검증레포트. 이력서, 면접 자료를 토대로 최종 합격자를 선발합니다.</li>
                    </ul>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${4}`}>
                <div className={` ${isSmall ? 'pt-2' : 'pt-20'} w-11/12 items-center`}>
                    <div className="w-full flex">
                        <div className={`${isSmall ? 'text-md' : 'text-lg'} w-1/2 flex items-end font-MaruBuri_Regular font-semibold`}>Step4 계약진행</div>
                        <div className="w-1/2 flex">
                            <div className='w-full' ref={ref_4}><Contract className="w-[150px] h-[150px]"/></div>
                        </div>
                    </div>
                    <div className={`${isSmall ? 'text-lg' : 'text-xl'} py-4 font-MaruBuri_Regular font-semibold`}>최종 합격자의 계약 협의가 진행됩니다.</div>
                     <ul className={`${isSmall ? 'text-[10px]' : 'text-sm'}font-MaruBuri_Regular`}>
                        <li className="py-2">고객과 최종합격자간 협의를 통해 계약내용을 최종 확인합니다.</li>
                        <li className="py-2">계약이 확정되면 Kickoff 미팅을 통해 서비스 진행에 필요한 합의사항을 확인합니다.</li>
                    </ul>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${5}`}>
                <div className={` ${isSmall ? 'pt-2' : 'pt-20'} w-11/12 items-center`}>
                    <div className="w-full flex">
                        <div className={`${isSmall ? 'text-md' : 'text-lg'} w-1/2 flex items-end font-MaruBuri_Regular font-semibold`}>Step5 기술지원</div>
                        <div className="w-1/2">
                            <div className='w-full' ref={ref_5}><Support className="w-[150px] h-[150px]"/></div>
                        </div>
                    </div>
                    <div className={`${isSmall ? 'text-lg' : 'text-xl'} py-4 font-MaruBuri_Regular font-semibold`}>서비스 시작 이후 매니저를 통해 업무 관리 및 기술지원을 받으실 수 있습니다.</div>
                    <div className={`${isSmall ? 'text-[10px]' : 'text-sm'} font-MaruBuri_Regular`}>
                        계약이 체결되는 과정에서 본사에 소속된 테크매니저가 배정되고, Kickoff 미팅을 통해 안내 받으실 수 있습니다. 테크매니저는 계약된 개발자의 업무진행상황을 모니터링 하고, 고객은 매니저에게 기술 지원을 요청할 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[60px] flex w-11/12 justify-center">
            <div className="w-full flex justify-center items-center py-6">
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isFisrtVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="process_1" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isSecondVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="process_2" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isThirdVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="process_3" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isFourthVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="process_4" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isfifthVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="process_5" onClick={handleScroll}/></div>
            </div> 
        </div>
    </div>
  )
}


export default ProcessStepRe;