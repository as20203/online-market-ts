import React from 'react';
import './Login.scss';
import Header from '../Landing/Header/Header';
const Login:React.FC = () =>{
    return (
        <div className='login-main'>
            <Header />
            <h1>This will be the login page.</h1>
        </div>
    )
}

export default Login;