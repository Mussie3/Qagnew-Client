import { useEffect, useState } from "react";
import ConclusionRe from "../components/ConclusionRe";
import ContactRe from "../components/ContactRe";
import FAB from "../components/FAB";
import FABRe from "../components/FABRe";
import FAQRe from "../components/FAQRe";
import FooterRe from "../components/FooterRe";
import HeaderRe from "../components/HeaderRe";
import HeroRe from "../components/HeroRe";
import NewsRe from "../components/NewsRe";
import PartnersRe from "../components/PartnersRe";
import ProcessStepRe from "../components/ProcessStepRe";
import TestimonialRe from "../components/TestimonialRe";
import animationData from '../assets/80753-alot-of-things-going-in-the-head.json';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import points from '../assets/qagnew_logo.svg';
import { useMediaQuery } from 'react-responsive';


const HomeRe = (props) => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' });
    const { ref: ref_2, inView: isSecondVisible } = useInView();
    const [emailHero, setEmailHero] = useState('');
    const emailHeroHandler = val => {
        console.log('Hero_Val');
        console.log(val);
        setEmailHero(val);
      }
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    const handleRequest = () => {
        const element = document.getElementById('section_9');
        element.scrollIntoView({behavior:'smooth'});
    }

    useEffect(()=>{
        if(props.value === 'section_9'){
            const element = document.getElementById('section_9');
            element.scrollIntoView({behavior:'smooth'});
        }
    },[]);

    return (
        <div>
            <HeaderRe onRequestMade={handleRequest}/>
            <HeroRe emailAdded={emailHeroHandler} id="section_1"/>
            <div className={`py-5`}></div>
            <div className="flex justify-center" ref={ref_2} id="section_2">
                <div className="w-full">
                    <div className='flex justify-center'><div className={`flex ${isSmall ? 'text-2xl p-2' : 'text-4xl p-4'} text-[#000000] text-center flex justify-center items-center w-2/3 font-MaruBuri_Regular font-semibold ${isSecondVisible ? 'transition translate-y-0 opacity-100 duration-500 ease-in' : 'transition -translate-y-20 opacity-0 duration-500 ease-out'}`}>강뉴는 어떤 곳에 필요할까요?</div></div>
                    <div className="justify-center">
                        <div className={`pt-10 ${isSecondVisible ? 'opacity-100 duration-500 ease-in' : 'opacity-0 duration-500 ease-out'}`}>
                        <Lottie 
                            options={defaultOptions}
                            height={isSmall ? 200 : 300}
                            width={isSmall ? 200 : 300}
                        />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-11/12">
                                <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 opacity-100 duration-500 ease-in' : 'transition translate-x-2 opacity-0 duration-500 ease-out'}`}>
                                    <img src={points} alt='' className={`${isSmall ? 'w-6 h-6' : 'w-8 h-8'}`}/>
                                    <div className='p-1 font-MaruBuri_Regular font-semibold'>대부분의 초기 스타트업</div>
                                </div>
                                <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-100 opacity-100 duration-500 ease-in' : 'transition translate-x-2 opacity-0 duration-500 ease-out'}`}>
                                    <img src={points} alt='' className={`${isSmall ? 'w-6 h-6' : 'w-8 h-8'}`}/>
                                    <div className={`${isSmall ? 'text-sm' : ''} p-1 font-MaruBuri_Regular  font-semibold`}>개발자가 필요한 비IT 기업</div>
                                </div>
                                <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-200 opacity-100 duration-500 ease-in' : 'transition translate-x-2 opacity-0 duration-500 ease-out'}`}>
                                    <img src={points} alt='' className={`${isSmall ? 'w-6 h-6' : 'w-8 h-8'}`}/>
                                    <div className={`${isSmall ? 'text-sm' : ''} p-1 font-MaruBuri_Regular  font-semibold`}>프로젝트를 진행중이나 정규채용에 부담을 느끼는 기업</div>
                                </div>
                                <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-300 opacity-100 duration-500 ease-in' : 'transition translate-x-2 opacity-0 duration-500 ease-out'}`}>
                                    <img src={points} alt='' className={`${isSmall ? 'w-6 h-6' : 'w-8 h-8'}`}/>
                                    <div className={`${isSmall ? 'text-sm' : ''} p-1 font-MaruBuri_Regular  font-semibold`}>대규모 프로젝트에 많은 개발자를 투입해야 되는 기업</div>
                                </div>
                                <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-500 opacity-100 duration-500 ease-in' : 'transition translate-x-2 opacity-0 duration-500 ease-out'}`}>
                                    <img src={points} alt='' className={`${isSmall ? 'w-6 h-6' : 'w-8 h-8'}`}/>
                                    <div className={`${isSmall ? 'text-sm' : ''} p-1 font-MaruBuri_Regular  font-semibold`}>개발 역량 및 경험이 없는 신규/예비 창업가</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FABRe id="section_3"/>
            <div className={`py-5`}></div>
            <FAQRe id="section_4"/>
            <div className={`py-5`}></div>
            <ProcessStepRe id="section_5 "/>
            <div className={`py-5`}></div>
            <NewsRe id="section_6"/>
            <div className={`py-5`}></div>
            <TestimonialRe id="section_7"/>
            <div className={`py-5`}></div>
            <PartnersRe id="section_8"/>
            <div className={`py-5`}></div>
            <ContactRe emailHeroVal={emailHero} id="section_9"/>
            <div className={`py-5`}></div>
            <ConclusionRe id="section_10"/>
            <div className={`py-5`}></div>
            <FooterRe/>
        </div>
    );
}

export default HomeRe;