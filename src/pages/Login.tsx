import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AuthFooter from '../components/AuthFooter';

const Login : React.FC = () => {
    const loginList : string[] = ['Home', 'Shop', 'Blog', 'About', 'Community'];

    return (
      <div>
        <Navbar list={loginList} />
        <Header />
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-start w-[60%] m-5 p-5">
            <h1 className="font-Poppins text-xl text-darkgray mt-4">Email</h1>
            <input type="text" className="lg-input" />
            <h1 className="font-Poppins text-xl text-darkgray mt-4">Password</h1>
            <input type="password" className="lg-input" />
            <div className="flex w-[100%] justify-between pb-5">
                <div className='flex justify-center align-center'>
                    <input type="checkbox" className="w-5 h-5"/>
                    <h1 className='ml-2 text-darkgray font-semibold text-l leading-[20px]'>Remember me</h1>
                </div>
                <h1 className="font-Poppins font-bold text-green border-b">Forget password ?</h1>
            </div>
            <button className="lg-btn">Login</button>
            <div className='flex justify-center items-center w-[100%]'>
                <h1 className='pr-2 font-Poppins text-sm text-gray font-semibold'>Don't have an account?</h1>
                <Link to='/register' className='text-sm text-green leading-0'> Sign up</Link>
            </div>
            <AuthFooter/>
          </div>
        </div>
      </div>
    );
}

export default Login;