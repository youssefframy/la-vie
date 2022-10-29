
interface Props {
    label: string;
}

const CustomButton = ({label} : Props) => {
    return (
        <button className="lg-btn">{label}</button>
    );
}

export default CustomButton;