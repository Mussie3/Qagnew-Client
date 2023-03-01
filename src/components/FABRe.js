import features from '../assets/favorite.png';
import advantage from '../assets/advantage.png';
import benefit from '../assets/benefits.png';
import points from '../assets/qagnew_logo.svg';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';


const FABRe = () => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' });
    const { ref: refFeature, inView: isFeatureVisible } = useInView();
    const { ref: refAdvantages, inView: isAdvantageVisible } = useInView();
    const { ref: refBenefit, inView: isBenefitVisible } = useInView();

    const handleScroll = (e) => {
        if (e.currentTarget.id === 'feat'){
            const element = document.getElementById('feat');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (e.currentTarget.id === 'adv') {
            const element = document.getElementById('advant');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const element = document.getElementById('benefit');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="w-full bg-[#DDDDDD]">
            <div className="snap-x snap-mandatory overflow-y-hidden flex h-[calc(67%-60px)] w-full scrollbar-none">
                <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id='feat'>
                    <div className='w-screen flex items-center h-full justify-center py-10'>
                        <div className={`w-[400px] h-[400px] bg-[#3E6D9C] rounded-[15px] shadow-lg`}>
                            <div className="flex w-full p-2">
                                <div className={`flex w-2/3 ${isSmall ? 'text-md' : 'text-lg'} p-4 font-MaruBuri_Regular font-semibold text-white`}>강뉴는 이런 서비스 입니다</div>
                                <div className="w-1/3 flex justify-end"><img src={features} ref={refFeature} alt='features-icon' className="w-12 w-12 h-12"/></div>
                            </div>
                            <div className={`${isSmall ? 'pt-4' : 'pt-6'}`}>
                                <div className={`p-4 flex`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>합리적인 비용으로 우수한 개발자를 월 단위로 고용할 수 있습니다.</div>
                                </div>
                                <div className={`flex w-full p-4`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>주니어부터 풀스택까지 다양한 인력을 제공합니다.</div>
                                </div>
                                <div className={`p-4 flex`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>통역, 분쟁조정 등 서비스 이용에 필요한 다양한 부가서비스를 제공합니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="snap-start flex-shrink-0 w-full flex items-center justify-center">
                    <div className='w-screen flex items-center h-full justify-center py-10' id='advant'>
                        <div className="w-[400px] h-[400px] bg-[#E97777] rounded-[15px] shadow-lg">
                            <div className="flex w-full p-2" >
                                <div className={`flex w-2/3 ${isSmall ? 'text-md' : 'text-lg'} p-4 font-MaruBuri_Regular font-semibold text-white`}>강뉴는 이런 서비스 입니다</div>
                                <div className="w-1/3 flex justify-end"><img src={advantage} ref={refAdvantages} alt='features-icon' className="w-12 h-12"/></div>
                            </div>
                            <div className={`${isSmall ? 'pt-4' : 'pt-6'}`}>
                                <div className={`p-4 flex`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>합리적인 비용으로 우수한 개발자를 월 단위로 고용할 수 있습니다.</div>
                                </div>
                                <div className={`p-4 flex w-full`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>주니어부터 풀스택까지 다양한 인력을 제공합니다.</div>
                                </div>
                                <div className={`p-4 flex`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>통역, 분쟁조정 등 서비스 이용에 필요한 다양한 부가서비스를 제공합니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="snap-start flex-shrink-0 w-screen flex items-center justify-center" id='benefit'>
                    <div className='w-screen flex items-center h-full justify-center py-10 relative'>
                        <div className="w-[400px] h-[400px] bg-[#905E96] rounded-[15px] shadow-lg">
                            <div className="flex w-full p-2">
                                <div className={`flex w-2/3 ${isSmall ? 'text-md' : 'text-lg'} p-4 font-MaruBuri_Regular font-semibold text-white`}>강뉴는 이런 서비스 입니다</div>
                                <div className="w-1/3 flex justify-end"><img src={benefit} ref={refBenefit} alt='features-icon' className="w-12 h-12"/></div>
                            </div>
                            <div className={`${isSmall ? 'pt-4' : 'pt-6'}`}>
                                <div className={`p-4 flex`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>합리적인 비용으로 우수한 개발자를 월 단위로 고용할 수 있습니다.</div>
                                </div>
                                <div className={`p-4 flex w-full`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>주니어부터 풀스택까지 다양한 인력을 제공합니다.</div>
                                </div>
                                <div className={`p-4 flex`}>
                                    <div className="p-1 w-1/12 w-8 h-8"><img src={points} alt='' className="w-6"/></div>
                                    <div className={`p-1 w-11/12 ${isSmall ? 'text-sm' : 'text-lg'} font-MaruBuri_Regular font-semibold text-white`}>통역, 분쟁조정 등 서비스 이용에 필요한 다양한 부가서비스를 제공합니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="w-full flex justify-center items-center py-6">
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isFeatureVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="feat" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isAdvantageVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="adv" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isBenefitVisible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="ben" onClick={handleScroll}/></div>
            </div>              
        </div>
    )
}

export default FABRe;