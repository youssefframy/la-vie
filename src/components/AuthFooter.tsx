import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";

const AuthFooter = () => {
  return (
    <div className="flex flex-col justify-center w-[100%]">
      <div className="flex items-center justify-center space-x-2 my-8 w-[100%]">
        <span className="h-px w-64 bg-gray"></span>
        <span className="text-green text-xs">or continue with</span>
        <span className="h-px w-64 bg-gray"></span>
      </div>
      <div className="w-[100%] flex justify-between">
        <button className="w-[45%] flex justify-center items-center h-16 border border-gray rounded-lg text-[18px] text-darkgray font-medium">
          <img
            src={Google}
            alt="google"
            className="w-12 h-12 mr-4 ml-[-1rem]"
          />
          Continue with Google
        </button>
        <button className="w-[45%] flex justify-center items-center h-16 border border-gray rounded-lg text-[18px] text-darkgray font-medium">
          <img
            src={Facebook}
            alt="google"
            className="w-4 h-6 mr-4 ml-[-1rem]"
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default AuthFooter;
