import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgotPassword";
import CustomButton from "../components/CustomButton";
import AuthFooter from "../components/AuthFooter";

const Signup = () => {
    const signupList : string[] = ['Home', 'About', 'Shop', 'Blog'];
    const signedIn : boolean = false;

    return (
      <div>
        <Navbar list={signupList} auth={signedIn} />
        <Header />

        {/* SignUp Inputs */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-start w-[60%] m-5 p-5">
            <div className="flex justify-between items-start w-[100%]">
              <FormInput label="First Name" type="text" />
              <FormInput label="Last Name" type="text" />
            </div>

            <FormInput label="Email" type="text" />
            <FormInput label="Password" type="password" />
            <FormInput label="Confirm Password" type="password" />

            <ForgotPassword />

            <CustomButton label="Sign Up" />

            <Register />
            <AuthFooter />
          </div>
        </div>
      </div>
    );
}

export default Signup;