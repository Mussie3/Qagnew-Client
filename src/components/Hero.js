import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  const { ref: refHero, inView: isHeroVisible } = useInView();
  const [emailHero, setEmailHero] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.emailAdded(emailHero);
    const element = document.getElementById('section_9');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setEmailHero('');
  }

  return (
    <div className="w-[1400px] relative h-screen bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/images%2FHero%20(2).png?alt=media&token=274fab20-bece-4028-b8d0-da65f612825a')]">
       <div className="text-[#ffffff] absolute bottom-[5%] px-8">
          <div className={`text-6xl font-bold font-MaruBuri_Bold px-4 ${isHeroVisible ? 'transition translate-x-0 opacity-100 duration-500 ease-in' : 'transition -translate-x-20 opacity-0 duration-500 ease-out'}`} ref={refHero}>글로벌 개발자 <span className="text-[#FFC60B]">원격채용 플랫폼</span></div>
          <div className={`text-5xl pt-5 font-bold font-MaruBuri_Bold px-4 ${isHeroVisible ? 'transition translate-x-0 delay-100 opacity-100 duration-500 ease-in' : 'transition -translate-x-20 opacity-0 duration-500 ease-out'}`}>Global software engineering platform</div>
          <div className={`w-2/3 text-3xl pt-10 font-MaruBuri_Redular px-4 ${isHeroVisible ? 'transition translate-x-0 delay-200 opacity-100 duration-500 ease-in' : 'transition -translate-x-20 opacity-0 duration-500 ease-out'}`}>Junior부터 Lead 개발자까지 우수 대학의 컴퓨터공학 전공 개발자를 월 구독형태의 합리적인 비용으로 원격채용 할 수 있습니다.</div>
          <div>
            <form onSubmit={handleSubmit} className={`p-4 pt-8 ${isHeroVisible ? 'opacity-100 duration-500 delay-200 ease-in' : 'opacity-0'}`}>
              <input type="email" value={emailHero} className="p-2 rounded-l-[5px] h-12 w-96 border-none text-[#000000]" placeholder='이메일을 입력하세요' onChange={(e)=>{setEmailHero(e.target.value)}}/>
              <button className="bg-[#FFC60B] text-[#000000] h-12 font-semibold font-MaruBuri_Bold p-2 rounded-r-[5px] w-32 hover:bg-[#000000] hover:text-[#FFC60B]" type='submit'>문의하기</button>
              <div className="pt-3 font-MaruBuri_Bold">이메일로도 직접 문의하실수 있습니다 — <a className='' target="_blank" rel="noopener noreferrer" href="mailto:contact@keplerlab.io">contact@keplerlab.io</a></div>
            </form>
          </div>
        </div> 
    </div>
  )
}

export default Hero;
