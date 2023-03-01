import { useMediaQuery } from 'react-responsive';

const newsArray = [
    {
        id: 0,
        title: '에티오피아 대학에서 개발자 구해오는 스타트업',
        author: '이시은 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        par_1: '개발자 중개 스타트업 케플러랩은 자사 플랫폼 ‘강뉴 프로젝트(강뉴)’ 확장을 위해 에티오피아 아디스아바바 국립대‧아다마 과학기술대와 전략적 파트너십을 체결했다고 24일 밝혔다.',
        par_2: '강뉴는 평판과 포트폴리오 심사를 거친 해외 개발자‧디자이너 등을 중개해주는 서비스다. 지난 9월 출시됐다. 시니어급 개발자를 국내에 비해 절반 이하 비용으로 채용할 수 있다. 사업 근간은 에티오피아에 두고 있다. 본사 차원에서도 현재 12명의 에티오피아 개발자가 플랫폼 개발에 함께하고 있다. 강뉴는 6‧25 전쟁 때 에티오피아가 한국으로 파병한 부대 이름이기도 하다.',
        par_3: '아디스아바바 국립대와 아다마 과학기술대는 현지 명문으로 손꼽힌다. 1950년 설립된 아디스아바바 국립대는 에티오피아에서 가장 오래된 대학이다. 케플러랩은 이 대학들의 컴퓨터공학 전공 학생을 대상으로 멘토링 프로그램을 제공한다. 대학 측은 강뉴에 필요한 전반적인 지원을 한다.',
        link: 'https://www.hankyung.com/it/article/202211241252i',
        image: 'https://img.hankyung.com/photo/202211/01.31911270.1.jpg',

    },
    {
        id: 1,
        title: '케플러랩 조영훈 CEO, “강뉴는 기업과 개발자 모두가 윈윈하는 구조를 만들어 나갑니다”',
        author: '케플러랩 조영훈',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'https://blog.naver.com/keplerlab2022/222925198040',
        image: 'https://postfiles.pstatic.net/MjAyMjExMTBfNDcg/MDAxNjY4MDYyNzg3MDkz.2Tk8O9Fplj6qFK7CWR5kw6OR7ugNdWcjOEDViH2dw20g.6wjhNVdnAa3bmj1Oj6P_XeLju-iWBRPsN4GVMua5mtkg.JPEG.keplerlab2022/SE-afc2d22b-f3a0-4918-a9a0-e216630d3660.jpg?type=w773',

    },
    {
        id: 2,
        title: '케플러랩·오션스바이오, 전자약 솔루션 개발 맞손',
        author: '강석오 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'http://www.datanet.co.kr/news/articleView.html?idxno=179671',
        image: 'http://www.datanet.co.kr/news/photo/202212/179671_102882_4824.jpg',

    },
    {
        id: 3,
        title: '경기 둔화에 채용 줄이고 해외로 눈 돌린 스타트업',
        author: '오규진 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'https://www.yna.co.kr/view/AKR20221126038400017?input=1195m',
        image: 'https://img2.yna.co.kr/photo/cms/2019/11/15/45/PCM20191115000045990_P4.jpg',

    },
    {
        id: 4,
        title: '"한국 개발자 연봉의 30% 수준"…국내 스타트업 사로잡았다',
        author: '이상은 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'https://www.hankyung.com/economy/article/202211277514i?mibextid=Zxz2cZ&fbclid=IwAR05RBCeMMeIjchvxJnPYj_Q1e2iKhASq5iHUaWBUMdHPjJTNnudlokl2lU',
        image: 'https://img.hankyung.com/photo/202211/01.31944644.1.jpg',

    },
    {
        id: 5,
        title: '[ChatGPT] 비만/과체중과 수면무호흡/코골이의 악순환의 고리와 해결 방안',
        author: '클리오닉의원',
        date: new Date().toLocaleDateString("ko-KR"),
        link:'https://blog.naver.com/clionic_/223010151136',
        image: 'https://postfiles.pstatic.net/MjAyMzAyMDlfMyAg/MDAxNjc1OTEyMzIwOTA2.M4FTHYjZfR5JUIxsxixug8ihKpEHviIX55UpfIsAEgUg.pe-NcmDH-3mM7uU87V5sdByevbsGxB34y43aSsbwWLIg.JPEG.snake5th/20230111_mmnm_Clionic0807.jpg?type=w966',

    },
    {
        id: 6,
        title: '케플러랩·오션스바이오, 전자약 솔루션 개발 맞손',
        author: '강석오 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'http://www.datanet.co.kr/news/articleView.html?idxno=179671',
        image: 'http://www.datanet.co.kr/news/photo/202212/179671_102882_4824.jpg',

    },
    {
        id: 7,
        title: '케플러랩·오션스바이오, 전자약 솔루션 개발 맞손',
        author: '강석오 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'http://www.datanet.co.kr/news/articleView.html?idxno=179671',
        image: 'http://www.datanet.co.kr/news/photo/202212/179671_102882_4824.jpg',

    },
    {
        id: 8,
        title: '어떤 곳이 강뉴 프로젝트를 이용할 수 있을까요?',
        author: '케플러랩 조영훈',
        date: new Date().toLocaleDateString("ko-KR"),
        link:'https://brunch.co.kr/@d95457f059f54f3/7',
        image: 'http://www.datanet.co.kr/news/photo/202212/179671_102882_4824.jpg',

    },
    {
        id: 9,
        title: '[Game Changer] Asleep is working so its users can sleep better',
        author: 'Sarah Chea',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'https://koreajoongangdaily.joins.com/2023/02/05/business/industry/korea/20230205070006436.html',
        image: 'https://koreajoongangdaily.joins.com/data/photo/2023/02/05/b96f003a-8e7d-4c68-9d2b-889c16f14bf8.jpg',

    },
    {
        id: 10,
        title: '케플러랩·오션스바이오, 전자약 솔루션 개발 맞손',
        author: '강석오 기자',
        date: new Date().toLocaleDateString("ko-KR"),
        link: 'http://www.datanet.co.kr/news/articleView.html?idxno=179671',
        image: 'http://www.datanet.co.kr/news/photo/202212/179671_102882_4824.jpg',

    }

];

const News = (props) => {

    const isMedium = useMediaQuery({ query: '(max-width: 1500px)' });
    const mainNews = newsArray.filter(news => +news.id === 0);
    const picNews = newsArray.filter(news => +news.id < 6 && +news.id !== 0);
    const regNews = newsArray.filter(news=> +news.id >= 6 && +news.id < 11)
    return (
        <div>
            <div className="w-screen h-[80px]"></div>
            <div className="flex justify-center w-full">
                <div className={` ${isMedium ?  'w-full' : 'w-[1200px]'}  h-[calc(100%-80px)] flex`}>
                    <div className="w-1/2 p-2">
                        <div><a href={mainNews[0].link} target="_blank" rel="noopener noreferrer"><img src={mainNews[0].image} alt="news-image" className="rounded-[15px] w-4/5"/></a></div>
                        <div className="font-MaruBuri_Regular text-xl font-semibold py-2"><a href={mainNews[0].link} target="_blank" rel="noopener noreferrer">{mainNews[0].title}</a></div>
                        <div className="flex w-full font-MaruBuri_Regular text-sm py-3">
                            <div className="w-1/4">{mainNews[0].author}</div>
                            <div className="w-1/4">{mainNews[0].date}</div>
                        </div>
                        <div className="pr-4">
                            <div className="font-MaruBuri_Regular text-md py-1">{mainNews[0].par_1}</div>
                            <div className="font-MaruBuri_Regular text-md py-1">{mainNews[0].par_2}</div>
                        </div>
                    </div>
                    <div className="grid grid-row-5 w-1/2 px-8">
                        {
                            picNews.map((data)=>
                            <div key={data.id} className="flex w-full border-b-[2px]">
                                <div className="w-1/3 p-2"><a href={data.link} target="_blank" rel="noopener noreferrer"><img src={data.image} alt="news-img" className="rounded-[5px] w-[200px]"/></a></div>
                                <div className="w-2/3 p-2 h-full">
                                    <div className="h-2/3 font-MaruBuri_Regular font-semibold text-ellipsis overflow-hidden"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></div>
                                    <div className="h-1/3 flex items-end w-full">
                                        <div className="font-MaruBuri_Regular text-sm w-1/2">{data.author}</div>
                                        <div className="font-MaruBuri_Regular text-sm w-1/2">{data.date}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    {/* <div className="grid grod-row-5 w-1/3 px-8">
                        {
                            regNews.map((data)=>
                            <div className="flex w-full border-b-[2px]">
                                <div className="w-full p-2 h-full">
                                    <div className="h-1/2 font-MaruBuri_Regular font-semibold text-ellipsis overflow-hidden"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></div>
                                    <div className="h-1/2 flex items-end w-full">
                                        <div className="font-MaruBuri_Regular text-sm w-1/2">{data.author}</div>
                                        <div className="font-MaruBuri_Regular text-sm w-1/2">{data.date}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default News;