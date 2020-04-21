import React,{useEffect} from 'react';
import './Signup.scss';
import Header from '../Generic/Header/Header';
import {normalHeader} from '../Generic/Header/HeaderLinks/HeaderLinks';
import InputFormGroup from '../Generic/Forms/FormGroup/InputFormGroup/InputFormGroup';
import FormButton     from '../Generic/Forms/FormButton/FormButton';
import Footer         from '../Generic/Footer/Footer';
import useForm        from '../../utils/useForm';


const Signup:React.FC = () =>{
    const [register,handleRegister] = useForm({username:'',password:'',email:'',city:'',phone:''})
    const onSubmit = (e: any) =>{
        e.preventDefault();
        console.log(register);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='signup-main'>
        <Header  children={normalHeader}/>
        <div className='signup-main-content'>
            <div className='signup-form-main'>
                <h2>Signup for Online Market</h2>
                <form onSubmit={onSubmit}>
                    <InputFormGroup value={register.username} onChange={handleRegister} labelName='Username:' name='username' type='text' placeholder='Enter username'  />
                    <InputFormGroup value={register.password} onChange={handleRegister} labelName='Password:' name='password' type='password' placeholder='Enter password'  />
                    <InputFormGroup value={register.email} onChange={handleRegister} labelName='Email:' name='email' type='text' placeholder='Enter email'  />
                    <InputFormGroup value={register.city} onChange={handleRegister} labelName='City:' name='city' type='text' placeholder='Enter city'  />
                    <InputFormGroup value={register.phone} onChange={handleRegister} regex="[0-9]+" labelName='Phone:' name='phone' type='text' placeholder='Enter phone number'  />
                    <FormButton text="Signup for Online Market"/>
                </form>
            </div>    
        </div>
        <Footer />
    </div>
    )
       
       
}


export default Signup;