import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import CustomButton from "./CustomButton";

const AuthFooter = () => {
  return (
    <div className="flex flex-col justify-center w-[100%]">
      <div className="flex items-center justify-center space-x-2 my-8 w-[100%]">
        <span className="h-px w-64 bg-gray"></span>
        <span className="text-green text-xs">or continue with</span>
        <span className="h-px w-64 bg-gray"></span>
      </div>
      <div className="w-[100%] flex justify-between">
        <CustomButton label="Google" Image={Google} color="white" textColor="darkgray"/>
        <CustomButton label="Facebook" Image={Facebook} color="white" textColor="darkgray"/>
      </div>
    </div>
  );
};

export default AuthFooter;
