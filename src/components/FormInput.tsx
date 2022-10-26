
interface Props {
    label: string;
    type: string;
}

const FormInput = ({ label, type } : Props) => {
    return (
        <div className="w-[100%] pr-10">
            <h1 className="form-font">{label}</h1>
            <input type={type} className="lg-input" />
        </div>
    );
};

export default FormInput;
