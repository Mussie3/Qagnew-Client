import { ReactComponent as Logo } from '../assets/logoQ.svg';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Left } from '../assets/chevron-left-icon.svg';
import { ReactComponent as Right } from '../assets/chevron-right-icon.svg';
import { ReactComponent as Inqury } from '../assets/Inqury.svg';
import { ReactComponent as Selection } from '../assets/selection.svg';
import { ReactComponent as Interview } from '../assets/interview.svg';
import { ReactComponent as Contract } from '../assets/contract.svg';
import { ReactComponent as Support } from '../assets/support.svg';
import { useState } from 'react';

const ProcessStep = (props) => {

    const [scrollValue, setScrollValue] = useState(1);

    const { ref: ref_1, inView: isFisrtVisible } = useInView();
    const { ref: ref_2, inView: isSecondVisible } = useInView();
    const { ref: ref_3, inView: isThirdVisible } = useInView();
    const { ref: ref_4, inView: isFourthVisible } = useInView();
    const { ref: ref_5, inView: isfifthVisible } = useInView();

    const handleScroll = (offset) => {
        if(offset.currentTarget.id === 'prev' && scrollValue === 1){
            setScrollValue(1)
        } else if(offset.currentTarget.id === 'prev' && scrollValue !== 1) {
            setScrollValue(prev=> {return +prev-1});
        } else if (offset.currentTarget.id === 'next' && scrollValue !== 5) {
            setScrollValue(prev=> {return +prev+1});
        } else {
            setScrollValue(5);
        }
    }

  return (
    <div className="">
        <div className="w-screen h-[33%] relative">
            <div className="absolute top-[50%] left-[5%]">
                <div className="text-3xl font-MaruBuri_Regular font-semibold">간편한 프로세스와 엄선된 검증 레포트를 경험해보세요.</div>
                <div className="flex w-screen pt-10">
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isFisrtVisible || isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] ' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isFisrtVisible || isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300'}`}>1</div>
                            <div className="absolute top-12 text-sm font-MaruBuri_Regular font-semibold">채용문의</div>
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isFisrtVisible || isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all  ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300 '}`}>2</div>
                            <div className="absolute top-12 text-sm font-MaruBuri_Regular font-semibold">지원자 모집</div>
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isSecondVisible || isThirdVisible || isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isThirdVisible || isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isThirdVisible || isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300 '}`}>3</div>
                            <div className="absolute top-12 text-sm font-MaruBuri_Regular font-semibold">면접 및 선발</div>
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isThirdVisible || isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-1/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isFourthVisible || isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isFourthVisible || isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300 '}`}>4</div>
                            <div className="absolute top-12 text-sm font-MaruBuri_Regular font-semibold">계약진행</div>
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isFourthVisible || isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                    <div className="flex w-2/6 relative">
                        <div className="w-10 h-10">
                            <Logo className={`w-10 h-10 ${isfifthVisible ? 'fill-[#FFC60B] stroke-[#FFC60B] transition-all ease-out' : 'fill-[#e0e0e0] delay-300 stroke-[#e0e0e0]'}`}/>
                            <div className={`justify-center -translate-y-9 items-center flex text-2xl ${isfifthVisible ? 'text-[#000000]' : 'text-[#e0e0e0] delay-300'}`}>5</div>
                            <div className="absolute top-12 text-sm font-MaruBuri_Regular font-semibold">기술지원</div>
                        </div>
                        <div className={`h-[3px] w-[calc(100%-2rem)] bg-[#e0e0e0] absolute left-9 top-[40%]`}>
                            <div className={`h-[3px] bg-[#FFC60B] ${isfifthVisible ? 'w-full transition-all duration-1000 ease-out':'w-0 transition-all duration-300 ease-out'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div className="snap-x snap-mandatory overflow-y-hidden flex h-[calc(67%-60px)] w-screen scrollbar-none">
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${1}`}>
                <div className='w-11/12 flex items-center h-full pt-20'>
                    <div ref={ref_1} className="w-1/2 px-5">
                        <div className="text-xl font-MaruBuri_Regular font-semibold">Step1 채용문의</div>
                        <div className="text-2xl py-4 font-MaruBuri_Regular font-semibold">필요한 개발자를 문의해보세요.</div>
                        <div  className="text-xl py-4 font-MaruBuri_Regular">니즈에 적합한 지원자를 제안하기 위해 채용을 원하는 지원자의 요구사항을 확인합니다.</div>
                        <ul className="list-disc px-10 font-MaruBuri_Regular">
                            <li className="py-2">전문지식, 경력 등 기술관련 사항을 확인합니다.</li>
                            <li className="py-2">급여, 근무조건 및 기간 등 인사관련 사항을 확인합니다.</li>
                            <li className="py-2">기타 채용과 관련된 요구사항을 확인합니다.</li>
                        </ul>
                    </div>
                    <div className="w-1/2 flex">
                        <div className='w-full'><Inqury className="w-3/4"/></div>
                    </div>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${2}`}>
                <div className='w-11/12 flex items-center h-full pt-20'>
                    <div ref={ref_2} className="w-1/2 px-5">
                        <div className="text-xl py-4 font-MaruBuri_Regular font-semibold">Step2 지원자 모집</div>
                        <div className="text-2xl py-4 font-MaruBuri_Regular font-semibold">요구사항에 맞는 지원자를 모집하고 검증합니다.</div>
                        <ul className="font-MaruBuri_Regular">
                            <li className="py-2">요청된 요구사항에 최적화된 개발인력을 지원받는 절차입니다.</li>
                            <li className="py-2">최대 2주까지 소요되며, 모집 속도에 따라 2주 내로 지원자 정보를 안내해 드립니다.</li>
                            <li className="py-2">지원자 정보는 전체 모집인원 중 선발된 인원에 대한 검증레포트로 제공됩니다.</li>
                        </ul>
                    </div>
                    <div className="w-1/2 flex">
                        <div className="w-full"><Selection className="w-3/4"/></div>
                    </div>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${3}`}>
                <div className='w-11/12 flex items-center h-full pt-20'>
                    <div ref={ref_3} className="w-1/2 px-5">
                        <div className="text-xl py-4 font-MaruBuri_Regular font-semibold">Step3 면접 및 선발</div>
                        <div className="text-2xl py-4 font-MaruBuri_Regular font-semibold">검증된 개발자들 중 최종 합격자를 선발합니다.</div>
                        <ul className="font-MaruBuri_Regular">
                            <li className="py-2">지원자들 중 인터뷰를 원하실 경우 화상면접을 진행하실 수 있습니다.</li>
                            <li className="py-2">검증레포트. 이력서, 면접 자료를 토대로 최종 합격자를 선발합니다.</li>
                        </ul>
                    </div>
                    <div className="w-1/2 flex">
                        <div className="w-full"><Interview className="w-3/4"/></div>
                    </div>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${4}`}>
                <div className='w-11/12 flex items-center h-full pt-20'>
                    <div ref={ref_4} className="w-1/2 px-5">
                        <div className="text-xl py-4 font-MaruBuri_Regular font-semibold">Step4 계약진행</div>
                        <div className="text-2xl py-4 font-MaruBuri_Regular font-semibold">최종 합격자의 계약 협의가 진행됩니다.</div>
                        <ul className="font-MaruBuri_Regular">
                            <li className="py-2">고객과 최종합격자간 협의를 통해 계약내용을 최종 확인합니다.</li>
                            <li className="py-2">계약이 확정되면 Kickoff 미팅을 통해 서비스 진행에 필요한 합의사항을 확인합니다.</li>
                        </ul>
                    </div>
                    <div className="w-1/2 flex">
                        <div className='w-full'><Contract className="w-3/4"/></div>
                    </div>
                </div>
            </div>
            <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id={`process-${5}`}>
                <div className='w-11/12 flex items-center h-full pt-20'>
                    <div ref={ref_5} className="w-1/2 px-5">
                        <div className="text-xl py-4 font-MaruBuri_Regular font-semibold">Step5 기술지원</div>
                        <div className="text-2xl py-4 font-MaruBuri_Regular font-semibold">서비스 시작 이후 매니저를 통해 업무 관리 및 기술지원을 받으실 수 있습니다.</div>
                        <div className="font-MaruBuri_Regular py-2">
                            계약이 체결되는 과정에서 본사에 소속된 테크매니저가 배정되고, Kickoff 미팅을 통해 안내 받으실 수 있습니다. 테크매니저는 계약된 개발자의 업무진행상황을 모니터링 하고, 고객은 매니저에게 기술 지원을 요청할 수 있습니다.
                        </div>
                    </div>
                    <div className="w-1/2 flex">
                        <div className='w-full'><Support className="w-3/4"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[60px] flex w-11/12 justify-end">
            {isfifthVisible ? <div callsName={`p-2 transition-opacity ease-in duration-500 opacity-100`}><button className="font-MaruBuri_Regular rounded-[5px] font-semibold text-lg px-4 py-2 bg-[#FFC60B]">문의하기</button></div> : <div className='text-xl font-MaruBuri_Regular font-semibold h-10 p-2'>요구 사항 지정</div>}
            <div className='flex px-4 py-2 h-10'>
                <div className="h-6"><a href={`#process-${scrollValue}`}><Left onClick={handleScroll} id="prev" style={{color: '#e0e0e0'}} className={`w-6 h-6 select-none ${isFisrtVisible ? 'fill-[#e0e0e0]  cursor-not-allowed': 'fill-[#000000] cursor-pointer' }`}/></a></div>
                <div className="h-6"><a href={`#process-${scrollValue}`}><Right onClick={handleScroll} id="next" className={`w-6 h-6 select-none ${isfifthVisible ? 'fill-[#A7A7A7] cursor-not-allowed': 'fill-[#000000]  cursor-pointer' }`}/></a></div>
            </div>
        </div>
    </div>
  )
}


export default ProcessStep;
