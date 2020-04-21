import React, { useEffect} from 'react';
import './Login.scss';
import Header from '../Generic/Header/Header';
import {normalHeader} from '../Generic/Header/HeaderLinks/HeaderLinks';
import Footer from '../Generic/Footer/Footer';
import InputFormGroup from '../Generic/Forms/FormGroup/InputFormGroup/InputFormGroup';
import LinkFormGroup from '../Generic/Forms/FormGroup/LinkFormGroup/LinkFormGroup';
import FormButton from '../Generic/Forms/FormButton/FormButton';
import useForm from '../../utils/useForm';

const Login:React.FC = () =>{
    let [login,handleLogin] = useForm({username:'',password:''});
   

    const onSubmit = (e: any) =>{
        e.preventDefault();
        console.log(login);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='login-main'>
            <Header  children={normalHeader}/>
            <div className='login-main-content'>
                <div className='login-form-main'>
                    <h2>Login with Online Market</h2>
                    <form onSubmit={onSubmit}>
                        <InputFormGroup onChange={handleLogin} value={login.username} labelName='Username:'name='username'  type='text' placeholder='Enter username'  />
                        <InputFormGroup onChange={handleLogin} value={login.password} labelName='Password:' name='password'  type='password' placeholder='Enter password'  />
                        <LinkFormGroup linkName='/signup' linkText='Forget Your Password?' />
                        <FormButton text="Login to Online Market"/>
                    </form>
                </div>    
            </div>
            <Footer />
        </div>
    )
}

export default Login;