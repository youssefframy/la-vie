import Logo from '../assets/logo.png';

interface Props {
    list: string[];
}

const Navbar = ({list} : Props) => {
    return (
      <nav className="bg-white px-2 sm:px-4 py-6 w-full top-0 left-0 ">
        {/* display flex with padding and responsive text color white*/}
        <div className="flex justify-between items-center">
            <img src={Logo} alt="logo" className='px-6'/>
            {list.map((item, index) => {
                return (
                    <h1 key={index} className="text-lg font-semibold hover:text-gray-900 dark:hover:text-gray-100">{item}</h1>
                )}
            )}
            <button className='bg-green w-100 h-12 px-10 rounded-lg text-white text-center font-semibold Poppins hover:opacity-90'>Sign Up</button>
        </div>
      </nav>
    );
}

export default Navbar;