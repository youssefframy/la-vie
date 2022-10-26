import { Link } from "react-router-dom";

const Header : React.FC = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="flex justify-evenly items-center w-11/12 px-10 pt-10 sm:px-4 border-b border-gray dark:border-gray">
          <Link to="/signup" className="text-3xl font-semibold text-gray-800 dark:text-gray-200  py-8 hover:text-green">
            Sign Up
          </Link>
          <Link to="/login" className="text-3xl font-semibold text-gray-800 dark:text-gray-200  hover:text-green">
            Login
          </Link>
        </div>
      </div>
    );
    }

export default Header;