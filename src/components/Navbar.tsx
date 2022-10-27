import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

interface Props {
    list: string[];
    auth: boolean;
}

const Navbar = ({list, auth} : Props) => {
    return (
      <nav className="bg-white sm:px-4 py-6 w-full top-0 left-0 ">
        {/* display flex with padding and responsive text color white*/}
        <div className="flex justify-between items-center">
            <img src={Logo} alt="logo" className='px-6'/>
            {list.map((item, index) => {
                const link = item.toLowerCase();
                return (
                    <Link to={`/${link}`} key={index} className="flex-3 text-lg font-semibold hover:text-gray-900 dark:hover:text-gray-100">{item}</Link>
                )}
            )}
            {auth 
                ?<div className='mr-5'>
                    <ShoppingCartOutlinedIcon className="text-lg mx-2" />
                    <NotificationsNoneOutlinedIcon className="text-lg mx-2" />
                    <AccountCircleOutlinedIcon className="text-lg mx-2" />
                </div> 
                : <Link to="/signup" className='flex justify-center items-center bg-green w-100 h-12 px-10 rounded-lg text-white text-center font-semibold Poppins hover:opacity-90 mr-5'>Sign Up</Link>
            }
        </div>
      </nav>
    );
}

export default Navbar;