import { ReactComponent as Quote } from '../assets/quotes.svg';
import { ReactComponent as Right } from '../assets/chevron-right-icon.svg';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';
import Overlay from '../UI/Overlay';
import OverlayRe from '../UI/OverlayRe';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

const testimonials = [
    {
        id: 0,
        company: 'Adler',
        position: 'CEO',
        name: '한세진 대표',
        summery: '현재 에티오피아의 인재 두 분께서, 아들러에서 성실하게 업무에 임해주시고 계십니다.실력과 핏 모두 잘 맞아, 한국으로 모셔서 한 장소에서 일하는 것도 논의할 정도입니다.',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/testimonial%2Fadler.png?alt=media&token=ca98b6fe-a58b-48cd-93ef-e021af4fc6dd',
        profile_pic: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/testimonial%2Fadler-ceo.png?alt=media&token=5f720018-7515-4c27-b2b7-bc8fdc225f1d',
        detail: '안녕하세요, 아들러 대표 한세진입니다. 강뉴 덕분에, 글로벌 팀 구축의 꿈을 실현할 수 있었습니다. 현재 에티오피아의 인재 두분께서, 아들러에서 성실하게 업무에 임해주시고 계십니다. 실력과 핏 모두 잘 맞아, 한국으로 모셔서 한 장소에서 일하는 것도 논의할 정도입니다. 아들러의 채용 프로세스에 딱 맞춰 주시는 점, 계약, 비자 문제 도와주시는건 감동적이였습니다. 저의 채용에 대한 시야를 넓혀주신, 케플러랩 팀원분들께 감사드립니다.개발자 채용으로 고민하신 분들은, 꼭 선택지로 고려해 보시길 강력 추천드립니다.'
    },
    {
        id: 1,
        company: 'OceansBio',
        position: 'CEO',
        name: '이현웅 대표',
        summery: '의뢰인이 만들어야 하는 소프트웨어를 이해하고, 공부하고, 더 나은 방법을 고민하여 제안하는 소프트웨어 엔지니어 팀.',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/testimonial%2Foceansbio.png?alt=media&token=49b89cb5-aec5-49ee-84a4-26f5c37e556c',
        profile_pic: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/testimonial%2Foceansbio-ceo.png?alt=media&token=0e494090-4b1e-4a31-b3d7-664bd6822074',
        detail: '우리 기업은 이식형/웨어러블형 의료기기를 제어하고 모니터링하는 어플리케이션을 개발하는 과정에서 강뉴를 만났습니다. 프로젝트 팀원 개개인의 전문성이 높고, 개발자 선정 과정은 케플러랩에서 정량 평가를 거친 후 그 결과 보고서를 의뢰인에게 전달해줍니다. 현지인 풀스택 총괄 개발자와 프로젝트 매니저가 팀에 포함되고 한국 팀에서도 프로젝트의 진행 간에 아낌없는 지원을 실시하여 프로젝트의 진행에 불편함이 없고 매끄럽습니다. 특히, 의뢰인이 소프트웨어 엔지니어링에 전문 지식이 부족하더라도 프로젝트 매니저와 총괄 개발자가 의뢰인의 니즈와 해당 시장 및 규제 상황등을 파악하여 스스로 요구사항을 보정하고 적극적으로 방법을 제안하므로, 인증 및 규제상의 체크포인트가 명확한 의료기기 소프트웨어 개발에 추천합니다.'
    },

]

const TestimonialRe = (props) => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' });

    const [wasClicked, setWasClicked] = useState(false);
    const [selected, setSelected] = useState();
    const { ref: refTest0, inView: isTest0Visible } = useInView();
    const { ref: refTest1, inView: isTest1Visible } = useInView();

    const handleScroll = () => {

    }

    const handleClick = (event) => {
        setSelected(+event.currentTarget.id);      
        setWasClicked(true);
    }
    const handleClose = (event) => {
        setWasClicked(false); 
    }
    useEffect(() => {
      const timerValue = setTimeout(()=>{
        const element1 = document.getElementById('testimonial_0');
        const element2 = document.getElementById('testimonial_1');
        if(!wasClicked) {
            if(isTest0Visible) {
                element2.scrollIntoView({ behavior: 'smooth' })
            }
            if(isTest1Visible) {
                element1.scrollIntoView({ behavior: 'smooth' })
            }
        }
      }, 5000)
    
      return () => { clearTimeout(timerValue)}
    }, [isTest0Visible, isTest1Visible, wasClicked])
    
    return (
        <div className="h-full w-full realtive">
            {wasClicked && 
            <OverlayRe
                selected = {selected}  
                onClick={handleClose}
                company={testimonials[selected].company}
                position= {testimonials[selected].position}
                name={testimonials[selected].name}
                summery= {testimonials[selected].summery}
                logo={testimonials[selected].logo}
                profile_pic={testimonials[selected].profile_pic} 
                detail={testimonials[selected].detail}
                wasClicked={wasClicked}
            />}
            <div className="flex items-end w-full justify-center"><div className={`w-11/12 font-MaruBuri_Regular text-center py-8 ${isSmall ? 'text-xl' : 'text-3xl'} font-semibold`}>강뉴는 다양한 고객/기관과 성장의 가치를 함께합니다.</div></div>
            <div className="snap-x snap-mandatory overflow-y-hidden flex w-full scrollbar-none">
                {
                    testimonials.map((data)=>
                    <div key={data.id} className="snap-start flex-shrink-0 w-full flex items-center justify-center">
                        <Card className="w-[350px]">
                            <div className="flex w-full h-2/6" ref={data.id === 0 ? refTest0 : refTest1} id={`testimonial_${data.id}`}>
                                <div className="w-2/5 px-4 pt-6"><img src={data.profile_pic} alt="profile_pic" className="w-28"/></div>
                                <div className="w-3/5 flex items-end p-4">
                                    <div>
                                        <div className="py-2 font-MaruBuri_Regular font-semibold text-sm">{data.name}</div>
                                        <div className="py-2 font-MaruBuri_Regular text-sm">{data.company}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 h-3/6 py-3">
                                <div><Quote className="fill-[#FFC60B] w-10 h-10"/></div>
                                <div className={`font-MaruBuri_Regular  ${isSmall ? 'text-[10px]' : 'text-sm'} font-semibold py-1 px-2 leading-7`}>{data.summery}</div>
                            </div>
                            <div className="flex w-full items-end p-4 h-1/6">
                                <div className="w-1/2"><button id={data.id} onClick={handleClick} className={`font-MaruBuri_Regular ${isSmall ? 'text-[10px]' : 'text-sm'} px-4 font-semibold flex items-center`}>더 읽어보기 <span className="flex px-2"><Right className="fill-[#FFC60B] w-2 h-2"/><Right className="fill-[#FFC60B] w-2 h-2"/></span><span></span></button></div>
                                <div className="w-1/2 flex justify-end"><img src={data.logo} className="w-20" alt="testimonial-logo"/></div>
                            </div>
                        </Card>
                    </div>
                    )
                }    
            </div>
            <div className="w-full flex justify-center items-center py-6">
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isTest0Visible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="test1" onClick={handleScroll}/></div>
                <div className="px-2"><div className={`w-[15px] h-[15px] ${isTest1Visible ? 'bg-[#FFC60B]' : 'bg-[#000]'} rounded-full border-none`} id="test2" onClick={handleScroll}/></div>
            </div>
            {/* <div className="w-screen h-[15%]"></div> */}
            {/* <div className="w-screen h-1/4">
                <div className="flex w-screen h-1/3 justify-center items-end font-MaruBuri_Regular p-4 text-xl font-semibold">점점 더 많은 고객이 매일 Qagnew 를 사용하고 있습니다.</div>
                <div className="w-full flex h-2/3 justify-center p-4">
                    {partners.map(data=>
                    <div className="w-1/8 h-full px-4">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src={data.logo} alt='partner-logo' className="w-24"/>
                        </div>
                    </div>
                    )}
                </div>
            </div> */}
        </div>
    );
}

export default TestimonialRe