
const Cell = (props) => {
    return <div onClick={props.onClick} className={props.className}>{props.children}</div>;
};

export default Cell;