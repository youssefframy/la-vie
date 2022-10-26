
interface Props {
    label: string;
    type: string;
}

const FormInput = ({ label, type } : Props) => {
    return (
        <div>
            <h1 className="form-font">Email</h1>
            <input type="text" className="lg-input" />
        </div>
    );
};

export default FormInput;
