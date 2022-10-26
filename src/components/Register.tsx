import { Link } from "react-router-dom";

const Register = () => {
    return (
            <div className="flex justify-center items-center w-[100%]">
              <h1 className="pr-2 font-Poppins text-sm text-gray font-semibold">Don't have an account?</h1>
              <Link to="/signup" className="text-sm text-green leading-0">
                Sign up
              </Link>
            </div>
    )
};

export default Register;