import { useState } from 'react';
import { ReactComponent as Left } from '../assets/chevron-left-icon.svg';
import { ReactComponent as Right } from '../assets/chevron-right-icon.svg';
import Questions from '../UI/Questions';
import QARe from '../UI/QARe';
import support from '../assets/customer-service.png' 

const faqData = [
    {
        id: 0,
        question: '강뉴는 어떤 서비스인가요?',
        answer: 'Junior부터 Lead 개발자까지 필요한 개발인력을 에티오피아 탑티어 대학의 컴공출신의 인재로 월 구독 형태의 합리적인 비용으로 원격채용을 할 수 있는 글로벌 개발자 원격 채용 중계 플랫폼입니다.'

    },
    {
        id: 1,
        question: '개발자의 전문성은 어떤가요?',
        answer: '컴퓨터공학과 학사 출신이 최소 기준으로, 짧게는 1년부터 길게는 10년 이상의 경력자들이 강뉴에 등록됩니다. 플랫폼 특성상 대체적으로 영어는 유창하게 구사할 수 있으며, 해외 기업과의 외주 경험이 있는 개발자들을 우선시합니다. 매칭 된 프리랜서가 최소 기준에 미달 시 고객사에 개발자를 소개하지 않습니다.'  
    },
    {
        id: 2,
        question: '해외개발자, 신뢰할 수 있나요?',
        answer: '강뉴에서 매칭된 에티오피아 개발자들은 고객에게 제안 전, 자체적으로 검수를 진행합니다. 제출된 이력서를 바탕으로 실제 업무를 수행할 수 있는 기술을 갖고 있는지, GitHub 등을 검토하여 실제 역량은 어떤지, 이전 프로젝트 등도 검토하고 가능하다면 이력서 진위 여부도 판단합니다. 아무나 유입될 수 있는 타 플랫폼 대비, Hybrid Closed Pool을 유지합니다.'
    },
    {
        id: 3,
        question: '아이디어만 있는데 강뉴를 이용할 수 있나요?',
        answer: '아무리 개발자를 고용하더라도 개발에 대한 이해 없이 성공적인 개발을 이루어내기 어렵습니다. 이것은 한국 개발자를 고용하더라도 마찬가지입니다. 그러기에 비개발자 출신 대표님들의 경우 창업멤버로 개발자들을 모시기도 합니다. 강뉴에서는 이와같은 경험을 가진 시니어 풀스택 개발자도 제안이 가능합니다. 강뉴를 통해 PM을 포함한 개발팀 세팅은 가능하지만, 아이디어를 가진 분께서 적극적인 소통이 전제가 되어야 완성도 높은 제품을 만드실 수 있습니다.' 
    },
    {
        id: 4,
        question: '계약 후 보호받을 수 있나요?',
        answer: '강뉴에서는 고객 및 피고용인의 권익보호를 위해 강뉴 에스크로 시스템을 도입하고 있습니다. 월 구독비용은 사전에 고객에게 청구되며, 개발자에게 급여지급은 한달 뒤 계약과정 및 결과에 문제가 없는것을 합의 후 지급합니다. 만약 개발자가 업무를 정당한 사유 없이 진행하지 않거나, 현저하게 능력이 떨어진 경우 프리랜서에게 지급할 비용을 100% 환불해 드립니다.'
    },
    {
        id: 5,
        question: '영어가 약한데 소통이 가능한가요?',
        answer: '개발과정은 대부분 문서로 진행하게 되고, 문서에 대한 소통은 번역 소프트웨어 등을 이용해 무리없이 소통하실 수 있습니다. 제품과 상호 업무지시에 대한 이해를 위해 정기적인 온라인 미팅을 권장드리며, 언어적으로 미팅에 어려움이 있는 경우 부가서비스로 통역지원 서비스를 제공하고 있습니다.'   
    },
    {
        id: 6,
        question: '외주용역개발 서비스도 제공하나요?',
        answer: '강뉴에서는 외주 용역 개발 서비스는 제공하지 않습니다. 외주 용역 개발의 형태로 서비스 진행을 원하는 경우 시니어 풀스택 개발자를 포함한 개발팀 채용을 제안드리며, 아이디어를 가진 분께서 적극적인 소통이 전제가 되어야 완성도 높은 제품을 만드실 수 있습니다.'  
    },
    {
        id: 7,
        question: '서비스 이용 시, 4대보험 등 국내 노동법을 준수해야 하나요?',
        answer: '개발자 채용에 대한 법적 제한은 외주용역과 동일하다고 생각하시면 됩니다. 노동법의 적용은 케플러랩과 개발자간의 계약사항이므로 고객사에는 적용되지 않습니다. 고객사에는 계약금액에 대한 부가세만 부과됩니다.' 
    }
];

const FAQ = (props) => {

  return (
    <div className="w-full">
        <div className="w-full flex justify-center h-1/4 flex items-end"><div className="w-11/12 py-8 font-MaruBuri_Regular font-semibold text-[#FFC60B] text-3xl select-none">자주 묻는 질문</div></div>
        <div className="w-full flex justify-center">
        <div className="w-4/5 justify-center">
            <div className="w-full flex h-3/4 pt-1">
                <div className="w-full">
                    <div>
                        {faqData.map(data =>
                            <QARe
                            key={data.id}
                            id={data.id}
                            answer={data.answer}
                            question={data.question}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FAQ;