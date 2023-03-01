import { useEffect, useState } from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
import Header from '../components/Header';
import Lottie from 'react-lottie';
import points from '../assets/qagnew_logo.svg';
import animationData from '../assets/80753-alot-of-things-going-in-the-head.json';
import Hero from '../components/Hero';
import FAB from '../components/FAB';
import { useInView } from 'react-intersection-observer';
import ProcessStep from '../components/ProcessStep';
import FAQ from '../components/FAQ';
import Partners from '../components/Partners';
import Card from '../UI/Card';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import News from '../components/News';
import Conclusion from '../components/Conclusion';
import Footer from '../components/Footer';
import { useMediaQuery } from 'react-responsive';


const Home = (props) => {

  const isMedium = useMediaQuery({ query: '(max-width: 1500px)' });
  const { ref: ref_1, inView: isFirstVisible } = useInView();
  const { ref: ref_2, inView: isSecondVisible } = useInView();
  const { ref: ref_3, inView: isThirdVisible } = useInView();
  const { ref: ref_4, inView: isFourthVisible } = useInView();
  const { ref: ref_5, inView: isFifthVisible } = useInView();
  const { ref: ref_6, inView: isSixthVisible } = useInView();
  const { ref: ref_7, inView: isSeventhVisible } = useInView();
  const { ref: ref_8, inView: isEigthVisible } = useInView();
  const { ref: ref_9, inView: isNinethVisible } = useInView();
  const { ref: ref_10, inView: isTenthVisible } = useInView();
  const [currentSection, setCurentSection] = useState('section_1');
  const [emailHero, setEmailHero] = useState('');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleRequestMade = (availableLogic) => {
      const element = document.getElementById('section_9');
      element.scrollIntoView({behavior: 'smooth'});
  }
  const emailHeroHandler = val => {
    console.log('Hero_Val');
    console.log(val);
    setEmailHero(val);
  }
  useEffect(()=>{
    if(props.value === 'section_9'){
      const element = document.getElementById('section_9');
      element.scrollIntoView({behavior:'smooth'});
    }
  },[props.value]);


  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden scroll-smooth scrollbar scrollbar-thumb-gray-900 scrollbar-thumb-rounded-lg scrollbar-track-gray-100">
      <div className="fixed z-20 bg-[#F7F7F7]">
        <div className="w-full flex justify-center">
          <div className="w-screen flex justify-center">
              <Header onRequestMade={handleRequestMade}/>
          </div>
        </div>
      </div>
      <section className="snap-center w-screen h-screen object-cover" id="section_1">
        <div className="w-full justify-center flex">
        <div className="w-full h-screen flex justify-center relative">
          <Hero emailAdded={emailHeroHandler}/>
          <div className='opacity-0 absolute top-[10%]' ref={ref_1}>1</div>            
        </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_2">
      <div className="w-full flex justify-center">
          <div className="w-3/4">
            <div className="pt-[15%]">
              <div className='flex justify-center'><div className={`p-4 flex ${isMedium ? 'text-3xl' : 'text-4xl'} text-[#000000] text-center flex justify-center items-center w-2/3 font-MaruBuri_Regular font-semibold ${isSecondVisible ? 'transition translate-y-0 opacity-100 duration-500 ease-in' : 'transition -translate-y-20 opacity-0 duration-500 ease-out'}`} ref={ref_2}>강뉴는 어떤 곳에 필요할까요?</div></div>
              <div className="flex justify-center">
                <div className={`pt-10 ${isSecondVisible ? 'opacity-100 duration-500 ease-in' : 'opacity-0 duration-500 ease-out'}`}>
                  <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                  />
                </div>
                <div className={`${isMedium ? 'p-10' : 'p-20'}`}>
                  <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 opacity-100 duration-500 ease-in' : 'transition translate-x-28 opacity-0 duration-500 ease-out'}`}>
                    <img src={points} alt='' className="w-8 h-8"/>
                    <div className={`p-1 font-MaruBuri_Regular font-semibold`}>대부분의 초기 스타트업</div>
                  </div>
                  <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-100 opacity-100 duration-500 ease-in' : 'transition translate-x-28 opacity-0 duration-500 ease-out'}`}>
                    <img src={points} alt='' className="w-8 h-8"/>
                    <div className='p-1 font-MaruBuri_Regular font-semibold'>개발자가 필요한 비IT 기업</div>
                  </div>
                  <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-200 opacity-100 duration-500 ease-in' : 'transition translate-x-28 opacity-0 duration-500 ease-out'}`}>
                    <img src={points} alt='' className="w-8 h-8"/>
                    <div className='p-1 font-MaruBuri_Regular font-semibold'>프로젝트를 진행중이나 정규채용에 부담을 느끼는 기업</div>
                  </div>
                  <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-300 opacity-100 duration-500 ease-in' : 'transition translate-x-28 opacity-0 duration-500 ease-out'}`}>
                    <img src={points} alt='' className="w-8 h-8"/>
                    <div className='p-1 font-MaruBuri_Regular font-semibold'>대규모 프로젝트에 많은 개발자를 투입해야 되는 기업</div>
                  </div>
                  <div className={`p-4 flex ${isSecondVisible ? 'transition -translate-x-0 delay-500 opacity-100 duration-500 ease-in' : 'transition translate-x-28 opacity-0 duration-500 ease-out'}`}>
                    <img src={points} alt='' className="w-8 h-8"/>
                    <div className='p-1 font-MaruBuri_Regular font-semibold'>개발 역량 및 경험이 없는 신규/예비 창업가</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen bg-[#DDDDDD]" id="section_3">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
                <FAB /> 
                <div className='opacity-0 absolute top-[10%]' ref={ref_3}>3</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_4">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
                <FAQ/>
                <div className='opacity-0 absolute top-[10%]' ref={ref_4}>4</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_5">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
                <ProcessStep/>
                <div className='opacity-0 absolute top-[10%]' ref={ref_5}>5</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_6">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
                <News/>
                <div className='opacity-0 absolute top-[10%]' ref={ref_6}>6</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_7">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
                <Testimonial/>
                <div className='opacity-0 absolute top-[10%]' ref={ref_7}>7</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_8">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
                <Partners/>
                <div className='opacity-0 absolute top-[10%]' ref={ref_8}>8</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_9">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
            <Contact emailHeroVal={emailHero}/>
            <div className='opacity-0 absolute top-[10%]' ref={ref_9}>9</div>      
          </div>
        </div>
      </section>
      <section className="snap-center w-screen h-screen" id="section_10">
        <div className="w-full justify-center flex">
          <div className="w-full h-screen flex justify-center relative">
              <Conclusion/>
              <div className='opacity-0 absolute top-[10%]' ref={ref_10}>10</div>      
          </div>
        </div>
      </section>
      <div className="fixed right-[7%] top-[50%] -translate-y-2/4 origin-center bg-[#000]/[30%] rounded-full">
        <a className="flex justify-center my-4 mx-1" href="#section_1" onClick={()=>{setCurentSection(val=>{return 'section_1'})}}><GoPrimitiveDot className={`${isFirstVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_2" onClick={()=>{setCurentSection(val=>{return 'section_2'})}}><GoPrimitiveDot className={`${isSecondVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_3" onClick={()=>{setCurentSection(val=>{return 'section_3'})}}><GoPrimitiveDot className={`${isThirdVisible ? 'scale-150 text-[#FFC60B]  transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_4" onClick={()=>{setCurentSection(val=>{return 'section_4'})}}><GoPrimitiveDot className={`${isFourthVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_5" onClick={()=>{setCurentSection(val=>{return 'section_5'})}}><GoPrimitiveDot className={`${isFifthVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_6" onClick={()=>{setCurentSection(val=>{return 'section_6'})}}><GoPrimitiveDot className={`${isSixthVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_7" onClick={()=>{setCurentSection(val=>{return 'section_7'})}}><GoPrimitiveDot className={`${isSeventhVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_8" onClick={()=>{setCurentSection(val=>{return 'section_8'})}}><GoPrimitiveDot className={`${isEigthVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_9" onClick={()=>{setCurentSection(val=>{return 'section_9'})}}><GoPrimitiveDot className={`${isNinethVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
        <a className="flex justify-center my-4 mx-1" href="#section_10" onClick={()=>{setCurentSection(val=>{return 'section_10'})}}><GoPrimitiveDot className={`${isTenthVisible ? 'scale-150 text-[#FFC60B] transition-all duration-150 ease-out': 'scale-100 text-[#fff] transition-all duration-150 ease-in'} transition-all duration-150 ease-out hover:scale-150 origin-center`}/></a>
      </div>
    </div>
  );
}

export default Home;