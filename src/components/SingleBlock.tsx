
type Props = {
    color: string,
};

const SingeBlock: React.FC<Props> = ({ color }) => {

    return (
    <>
        <div className={`single-block ${color}`}></div>
    </>)
};

export default SingeBlock;