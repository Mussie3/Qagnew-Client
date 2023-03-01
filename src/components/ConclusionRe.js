import Footer from "./Footer";
import Typewriter from 'typewriter-effect';
import BackgroundRe from "../UI/BackgroundRe";


const ConclusionRe = () => {
    return (
    <div>
        <div className="h-[250px] relative flex justify-center">
            <div className="flex justify-center items-center h-full w-10/12">
                <div className="text-2xl px-4 font-MaruBuri_Regular text-center font-semibold">
                <Typewriter
                        options={{
                            strings: [`개발에 필요한 시간과 비용을 줄일 수 있습니다.`, 
                                    `내부 자원은 더 가치있는 일에 집중하세요.`,
                                    `더 많은 기회에 투자하세요.`],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1000,
                        }}
                    />

                </div>
            </div>
        </div> 
    </div>
    )
}

export default ConclusionRe;