import Footer from "./Footer";
import Typewriter from 'typewriter-effect';
import Background from "../UI/Background";

const Conclusion = () => {
    return (
    <div className="h-screen">
        <div className="h-[80px] w-full"/>
        <div className="h-[calc(100%-260px)] w-full">
            <Background className="flex justify-center items-center h-full">
                <div className="text-3xl font-MaruBuri_Regular font-semibold">
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
            </Background>
        </div>
        <div className="w-screen flex justify-center"><Footer/></div>  
    </div>
    )
}

export default Conclusion;