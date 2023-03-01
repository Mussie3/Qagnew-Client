import React from 'react';
import FooterRe from '../components/FooterRe';
import HeaderRe from '../components/HeaderRe';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const AboutRe = () => {

    const navigate = useNavigate();

    const handleRequest = () => {
        navigate("/#section_9");
    }

    const isMedium = useMediaQuery({ query: '(max-width: 1500px)' });
    const { ref: ref_1, inView: isImageSectionVisible } = useInView();
    return (
        <div className="">
        <HeaderRe onRequestMade={handleRequest}/>
        <div className="w-full">
            <div className="w-full h-[400px]"><img src={'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/images%2Fabout_imag.png?alt=media&token=c952e501-bbd7-4ffc-9f41-648704b812cf'} alt="qagnew_img" className="w-full h-full object-cover"/></div>
            <div className="w-full flex justify-center py-10">
                <div className={`w-4/5`}>
                    <div className={`font-semibold font-MaruBuri_Bold text-xl py-6`}>강뉴는 개발자의 책임감있는 업무수행을 위해 에티오피아 수도인 아디스아바바에 사무실 개설하고 IT 전문인력으로 구성된 관리 인력을 운영하고 있습니다.</div>
                    <div className={`font-semibold font-MaruBuri_Bold text-lg py-6 text-[#FFC60B]`}>Quality Control에 집중합니다.</div>
                    <div className={`py-2`}>
                        <div className={`w-full py-4`}>
                            <div className={`w-full flex items-center justify-center bg-[#808080] py-3 text-xl text-white px-3 rounded-[15px]`}>Vision Program</div>
                            <div className={`w-full flex items-center py-2`}>투명한 정보공유로 지속적인 양질의 일자리 공급을 약속하고, 1세대 리더를 양성의 비전과 미션을 공유해 지속적인 개발자 공급과 책임감 있는 업무수행이 가능하도록 시스템을 구축했습니다.</div>
                        </div>
                        <div className={`w-full py-4`}>
                            <div className={`w-full flex items-center justify-center bg-[#808080] py-3 text-xl text-white px-3 rounded-[15px]`}>Tech Manager</div>
                            <div className={`w-full flex items-center py-2`}>테크매니저는 고객과 개발자의 기술적 소통 역할을 담당합니다. 국가간 문화 및 언어 차이에 대한 이해를 돕고, 업무수행 모니터링을 통해 고객이 원하는 결과를 도출 할 수 있도록 기술지원을 합니다.</div>
                        </div>
                        <div className={`w-full py-4`}>
                            <div className={`w-full flex items-center justify-center bg-[#808080] py-3 text-xl text-white px-3 rounded-[15px]`}>Local Office</div>
                            <div className={`w-full flex items-center py-2`}>현지에 제공된 공유오피스는 불안정한 네트워크 환경에 대한 리스크를 배제하고, 양질의 업무 환경을 제공하여 업무환경에 의한 리스크를 최소화합니다.</div>
                        </div>
                    </div>
                    <div className={`font-semibold font-MaruBuri_Bold text-2xl py-6 text-[#FFC60B]`}>강뉴 in history</div>
                    <div className="py-20 relative">
                        <div className="w-full">
                            <div className="w-full"><img src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/images%2Farmy.mil-62741-2010-01-27-160137.jpg?alt=media&token=d8c7345d-197c-4362-85a3-84e88088ab48" className={`flex items-center ${isImageSectionVisible ? 'translate-all translate-y-0 opacity-100 delay-100 duration-500' : 'translate-all -translate-y-24 delay-100 opacity-0 duration-500'} -rotate-12 rounded-[10px] shadow-lg`}/></div>
                            <div className="w-full"><img src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/images%2Fqagnew_2.png?alt=media&token=7a9ec473-6227-4c5f-83e1-31199d714a8e"className={`rotate-12 rounded-[10px] ${isImageSectionVisible ? 'translate-all translate-y-0 opacity-100 delay-300 duration-500' : 'translate-all -translate-y-24 delay-300 opacity-0 duration-500'}`}/></div>
                            <div className="w-full"><img src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/images%2Farmy.mil-62746-2010-01-27-160143.jpg?alt=media&token=81774843-a38e-43e6-8928-cb756e6ac697"className={`rotate-12 rounded-[10px] shadow-lg ${isImageSectionVisible ? 'translate-all translate-y-0 delay-500 opacity-100 duration-500' : 'translate-all -translate-y-24 delay-500 opacity-0 duration-500'}`}/></div>
                        </div>
                        <div ref={ref_1} className="absolute top-[50%]"></div>
                    </div>
                    <div className={`font-MaruBuri_Bold leading-8 font-semibold px-2`}>
                        강뉴는 한국전쟁에 병사를 지원한 아프리카 유일의 국가인 에티오피아에서 파병한 부대이름인 강뉴부대의 이름입니다. 에티오피아인들의 근면성실함과 책임감있는 국민성은 한국전쟁 파병을 통해 대한민국의 발전의 초석이 되었습니다. 케플러랩은 에티오피아의 우수한 IT 개발인력을 육성/지원하여 한국 내 개발인력 부족문제를 해결하고, 에티오피아에 양질의 일자리를 제공하기 위해 해외 개발인력 채용중개 플랫폼 “강뉴” 서비스를 론칭했습니다.
                    </div>
                    <div className="">
                        <div className={`font-semibold font-MaruBuri_Bold text-2xl py-6 text-[#FFC60B]`}>Why 에티오피아?</div>
                        <div className={`py-4`}>
                            <div className={`font-semibold font-MaruBuri_Bold text-lg bg-[#FFC60B] rounded-[10px] w-full p-3 text-center`}>S급 인재</div>
                            <div className={`font-semibold font-MaruBuri_Bold py-4`}>에티오피아 탑티어 4개 대학과 MOU를 맺고, 현지 커뮤니티를 통해 우수 인재들이 강뉴로 유입되는 플랫폼을 구축했습니다. 에티오피아에 주목한 이유는 다른 개발도상국과 달리 유능한 인재들이 미국, 유럽 등 선진 시장으로 진출할 기회를 얻지 못하는 상황이며, 이러한 인재를 IT개발인력 부족으로 속도를 내지 못하고 있는 한국시장의 현주소에 대안을 제시하고자 강뉴 서비스를 소개하게 되었습니다.</div>
                        </div>
                        <div className={`py-4`}>
                            <div className={`font-semibold font-MaruBuri_Bold text-lg bg-[#FFC60B] rounded-[10px] w-full p-3 text-center`}>동기부여를 통한 우수한 퀄리티컨트롤</div>
                            <div className={`font-semibold font-MaruBuri_Bold py-4`}>케플러랩은 미션과 비전을 공유해 착취의 경제가 아닌 새로운 개척시장의 주역이라는 비전을 에티오피아 개발자들과 공유하고, 자국의 경제발전과 양질의 노동시장을 확대할 수 있는 1세대 리더로써 책임감을 갖고 업무에 임하게 하는 비전체인을 구축하였습니다. 에티오피아인들의 강한 애국심과 역사적 주체성은 이를 가능케 만든 원동력으로, 프로필만 교환하고 채용하는 중계역이 아닌 양질의 결과물을 지속적으로 제공할 수 있는 플랫폼입니다.</div>
                        </div>
                        <div className={`py-4`}>
                            <div className={`font-semibold font-MaruBuri_Bold text-lg bg-[#FFC60B] rounded-[10px] w-full p-3 text-center`}>합리적인 비용</div>
                            <div className={`font-semibold font-MaruBuri_Bold py-4`}>에티오피아는 우수한 교육수준에 비해 국가경제력이 낮아 선진국 대비 20%, 국내 대비 30%, 인도 대비 60%, 베트남 대비 80% 수준으로 우수한 실력 대비 합리적인 비용으로 우수한 실력의 개발자를 채용하실 수 있습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterRe/>
    </div>
    )
}

export default AboutRe;