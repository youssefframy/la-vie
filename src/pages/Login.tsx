import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';



const Login : React.FC = () => {
    const loginList : string[] = ['Home', 'Shop', 'Blog', 'About', 'Community'];

    return (
        <div>
            <Header list={loginList}/>
        </div>
    )
}

export default Login;