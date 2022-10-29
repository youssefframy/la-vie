interface Props {
  label: string;
  Image: any;
  color: string;
  textColor: string;
}


const CustomButton : React.FC<Props> = ({label, Image, color, textColor} : Props) => {
    return (
      <button className={`w-[45%] bg-${color} flex justify-center items-center h-16 border border-gray rounded-lg text-[1rem] text-${textColor} font-medium`}>
        <img src={Image} alt="label" className="h-[2rem] mr-4 ml-[-1rem]" />
        Continue with {label}
      </button>
    );
}

export default CustomButton;