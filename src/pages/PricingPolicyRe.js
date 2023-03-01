import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {FaPlus, FaEquals, FaLessThan} from 'react-icons/fa';
import {BsArrowRight, BsArrowDown} from 'react-icons/bs';
import HeaderRe from '../components/HeaderRe';
import FooterRe from '../components/FooterRe';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

export default function PricingPolicyRe(props) {

    const navigate = useNavigate()

    const handleRequest = () => {
        props.valueGotten("section_9");
    }
   
    const isSmall = useMediaQuery({ query: '(max-width: 399px)' });
  return (
    <div className="">
        <div className="w-full flex justify-center"><HeaderRe onRequestMade={handleRequest}/></div>
        <div className="w-full flex justify-center">
            <div className="w-4/5">
                <div className={`font-semibold font-MaruBuri_Bold ${isSmall?'text-xl':'text-2xl'} py-6 text-[#FFC60B]`}>Price policy (가격정책)</div>
                <div className={`font-MaruBuri_Regular font-semibold ${isSmall?'text-md w-full':'text-lg w-4/5'} py-6`}>
                    강뉴에서는 글로벌 원격채용 서비스를 제공하고 있습니다. <br/> 부족한 개발인력을 강뉴를 통해 채용해보세요.
                </div>
                <div className="py-10">
                    <div className="bg-[#000] text-white flex w-full rounded-[20px] py-4 my-2">
                        <div className={`w-1/5 flex items-center justify-center text-center ${isSmall?'text-[10px]':'text-sm'}`}>채용비용 <br/>(개발자 급여)</div>
                        <div className="border-dashed border-[#FFC60B] border-[2px]"/>
                        <div className={`w-1/5 ${isSmall?'text-[10px]':'text-sm'} flex items-center justify-center`}>협의</div>
                        <div className="border-dashed border-[#FFC60B] border-[2px]"/>
                        <div className={`w-3/5 px-2 ${isSmall?'text-[10px]':'text-sm'}`}>연차 + 활용기술 + 언어력 + 역할을 고려하여 적정 가격을 제안 드립니다.(C++나 Java script 활용가능한 Junior 레벨 기준 2,500$/월 부터)</div>
                    </div>
                    <div className="p-6"><FaPlus className="text-4xl text-[#FFC60B]"/></div>
                    <div className="bg-[#000] text-white flex w-full rounded-[20px] py-4 my-2">
                        <div className={`w-1/5 flex items-center justify-center text-center ${isSmall?'text-[10px]':'text-sm'}`}>플랫폼 비용 <br/>(부대비용 포함)</div>
                        <div className="border-dashed border-[#FFC60B] border-[2px]"/>
                        <div className={`w-1/5 ${isSmall?'text-[10px]':'text-sm'} flex items-center justify-center`}>채용비용의 25%</div>
                        <div className="border-dashed border-[#FFC60B] border-[2px]"/>
                        <div className={`w-3/5 px-2 ${isSmall?'text-[10px]':'text-sm'}`}>플랫폼 이용료는 채용비용의 25% 입니다. (플랫폼 운영비용, 국제송금, 인력 관리비용 등이 포함되어 있습니다.)</div>
                    </div>
                    <div className="p-6"><FaPlus className="text-4xl text-[#FFC60B]"/></div>
                    <div className="bg-[#000] text-white flex w-full rounded-[20px] py-4 my-2">
                        <div className={`w-1/5 flex items-center justify-center text-center ${isSmall?'text-[10px]':'text-sm'}`}>부가서비스 <br/>(선택사항)</div>
                        <div className="border-dashed border-[#FFC60B] border-[2px]"/>
                        <div className={`w-1/5 ${isSmall?'text-[10px]':'text-sm'} flex items-center justify-center`}>선택사항</div>
                        <div className="border-dashed border-[#FFC60B] border-[2px]"/>
                        <div className={`w-3/5 px-2 ${isSmall?'text-[10px]':'text-sm'}`}>통역지원 서비스 : 500$/월 (최대 50시간) <br/>분쟁조정 서비스 : 150$/건</div>
                    </div>
                    <div className="p-6"><FaEquals className="text-4xl text-[#FFC60B]"/></div>
                    <div className="flex w-full font-MaruBuri_Regular font-semibold">
                        <div className={`w-1/5 flex items-center justify-center text-center ${isSmall?'text-sm':'text-lg'} rounded-[10px] py-4 my-2 bg-[#FFC60B]`}>월 구독료</div>
                        <div className="w-1/5 flex items-center justify-center">
                            <FaLessThan className="text-4xl text-[#FFC60B]"/>
                        </div>
                        <div className={`w-3/5 px-2 flex items-center rounded-[10px] py-4 my-2 bg-[#FFC60B] ${isSmall?'text-sm':'text-lg'}`}>리크루팅 비용, 기회비용, 개발자 급여, 복지비용, 인센티브, 급여상승, 부대비용 등</div>
                    </div>
                    <div className={`font-MaruBuri_Regular my-8 font-semibold ${isSmall?'text-xl':'text-3xl'} text-3xl rounded-[10px] py-4 my-2 text-center bg-[#FFC60B]`}>Senior / JavaScript / 2,000$/월 부터</div>
                </div>
                <div className="">
                    <div className={`font-semibold font-MaruBuri_Bold ${isSmall?'text-xl':'text-2xl'} py-6 text-[#FFC60B]`}>강뉴 에스크로 구독 시스템</div>
                    <div className={`font-MaruBuri_Regular font-semibold ${isSmall?'text-md w-full':'text-lg w-4/5'} py-6`}>강뉴 에스크로 시스템으로 약속불이행에 대한 대항력을 가질 수 있습니다. <br/>분쟁조정과정에서 시간과 비용을 줄일 수 있습니다.</div>
                </div>
                <div className="w-full py-10">
                    <div className='flex justify-center'><div className={`w-2/12 bg-[#000] text-[#fff] font-MaruBuri_Bold font-semibold ${isSmall?'text-lg h-40 w-40':'text-2xl h-48 w-48'} rounded-full flex items-center justify-center`}>고객</div></div>
                    <div className="w-full flex items-center justify-center">
                        <div className='flex'>
                            <div className="flex justify-center"><BsArrowDown className="text-5xl"/></div>
                            <div className="flex items-center text-sm">선불결제</div>
                        </div>
                    </div>
                    <div className='w-full h-[150px] py-2 rounded-[20px] bg-[#FFC60B] flex'>
                        <div className={`font-MaruBuri_Bold font-semibold ${isSmall?'text-lg':'text-xl'} flex items-center justify-center w-1/4`}>강뉴</div>
                        <div className="flex items-center h-full"><div className="border-solid border-[#000] w-[2px] h-2/3 border-[2px]"/></div>
                        <div className='w-3/4 flex items-center'>
                            <ul className={`list-disc font-MaruBuri_Bold ${isSmall ? 'text-[10px] px-4' : 'text-sm px-8'}`}>
                                <li className="py-2">매월 진행상황 확인 후 급여지급</li>
                                <li className="py-2">분쟁 발생 시 서비스중지 및 화의 또는 분쟁조정 진행</li>
                                <li className="py-2">대응인력 지원 및 빠른 후속인력 배치</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className='flex'>
                            <div className="flex justify-center"><BsArrowDown className="text-5xl"/></div>
                            <div className="flex items-center text-sm">후불결제</div>
                        </div>
                    </div>
                    <div className='flex justify-center'><div className={`w-2/12 bg-[#000] text-[#fff] font-MaruBuri_Bold font-semibold ${isSmall?'text-lg h-40 w-40':'text-2xl w-48 h-48'} rounded-full flex items-center justify-center`}>개발자</div></div>
                </div>
            </div>
        </div>
        <FooterRe/>
    </div>
  )
}