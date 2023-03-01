
const Card = (props) => {
    return (
        <div className={`h-full bg-[#F7F7F7] shadow-lg shadow-[#00000029] mx-4 rounded-[20px] ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;