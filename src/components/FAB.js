import React from 'react';
import { useInView } from 'react-intersection-observer';
import features from '../assets/favorite.png';
import advantage from '../assets/advantage.png';
import benefit from '../assets/benefits.png';
import points from '../assets/qagnew_logo.svg';

const FAB = (props) => {
    const { ref: refFeature, inView: isFeatureVisible } = useInView();
    const { ref: refAdvantages, inView: isAdvantageVisible } = useInView();
    const { ref: refBenefit, inView: isBenefitVisible } = useInView();
  return (
    <div className="flex w-screen bg-[#DDDDDD]">
        <div className="w-1/2 h-screen flex justify-center items-center">
            <div className='text-center'>
                <div className={`${isFeatureVisible? 'text-7xl text-[#000] transition-transform delay-500 duration-150 ease-out' : 'text-5xl text-[#696969] transition duration-150 ease-in'}`}>Features</div>
                <div className={`pt-8 ${isAdvantageVisible? 'text-7xl text-[#000] transition-transform delay-500 duration-150 ease-out' : 'text-5xl text-[#696969]  duration-150 ease-in'}`}>Advantages</div>
                <div className={`pt-8 ${isBenefitVisible? 'text-7xl text-[#000] transition-transform delay-500 duration-150 ease-out' : 'text-5xl text-[#696969]  duration-150 ease-in'}`}>Benefits</div>
            </div>
        </div>
        <div className="snap-y overflow-x-hidden min-h-screen w-1/2 scrollbar-none">
            <div className="snap-start h-3/4 relative flex">
                <div className="w-[400px] absolute bottom-0 h-[400px] bg-[#3E6D9C] rounded-[15px] shadow-lg">
                    <div className="flex w-full p-2">
                        <div className='flex w-2/3 p-4 font-MaruBuri_Regular font-semibold text-white text-lg'>강뉴는 이런 서비스 입니다</div>
                        <div className="w-1/3 flex justify-end"><img src={features} alt='features-icon' className="w-12 w-12 h-12"/></div>
                    </div>
                    <div className='pt-6'>
                        <div className={`p-4 flex`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12  font-MaruBuri_Regular font-semibold text-white' ref={refFeature}>합리적인 비용으로 우수한 개발자를 월 단위로 고용할 수 있습니다.</div>
                        </div>
                        <div className={`p-4 flex w-full`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12 font-MaruBuri_Regular font-semibold text-white'>주니어부터 풀스택까지 다양한 인력을 제공합니다.</div>
                        </div>
                        <div className={`p-4 flex`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12 font-MaruBuri_Regular font-semibold text-white'>통역, 분쟁조정 등 서비스 이용에 필요한 다양한 부가서비스를 제공합니다.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snap-start h-3/4 flex items-center">
                <div className="w-[400px] h-[400px] bg-[#E97777] rounded-[15px] shadow-lg">
                    <div className="flex w-full p-2">
                        <div className='flex w-2/3 p-4 font-MaruBuri_Regular font-semibold text-white text-lg'>강뉴는 이런 서비스 입니다</div>
                        <div className="w-1/3 flex justify-end"><img src={advantage} alt='features-icon' className="w-12 h-12"/></div>
                    </div>
                    <div className='pt-6'>
                        <div className={`p-4 flex`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12  font-MaruBuri_Regular font-semibold text-white'>합리적인 비용으로 우수한 개발자를 월 단위로 고용할 수 있습니다.</div>
                        </div>
                        <div className={`p-4 flex w-full`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12 font-MaruBuri_Regular font-semibold text-white'  ref={refAdvantages}>주니어부터 풀스택까지 다양한 인력을 제공합니다.</div>
                        </div>
                        <div className={`p-4 flex`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12 font-MaruBuri_Regular font-semibold text-white'>통역, 분쟁조정 등 서비스 이용에 필요한 다양한 부가서비스를 제공합니다.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snap-start h-3/4 flex relative">
                <div className="w-[400px] h-[400px] bg-[#905E96] rounded-[15px] shadow-lg">
                    <div className="flex w-full p-2">
                        <div className='flex w-2/3 p-4 font-MaruBuri_Regular font-semibold text-white text-lg'>강뉴는 이런 서비스 입니다</div>
                        <div className="w-1/3 flex justify-end"><img src={benefit} alt='features-icon' className="w-12 h-12"/></div>
                    </div>
                    <div className='pt-6'>
                        <div className={`p-4 flex`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12  font-MaruBuri_Regular font-semibold text-white'>합리적인 비용으로 우수한 개발자를 월 단위로 고용할 수 있습니다.</div>
                        </div>
                        <div className={`p-4 flex w-full`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12 font-MaruBuri_Regular font-semibold text-white'>주니어부터 풀스택까지 다양한 인력을 제공합니다.</div>
                        </div>
                        <div className={`p-4 flex`}>
                            <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                            <div className='p-1 w-11/12 font-MaruBuri_Regular font-semibold text-white'  ref={refBenefit}>통역, 분쟁조정 등 서비스 이용에 필요한 다양한 부가서비스를 제공합니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAB;
