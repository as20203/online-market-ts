import React from 'react';
import './FormButton.scss';


interface Props{
    text:string
}
const FormButton:React.FC<Props> = ({text}) =>{
    return(
        <div className='generic-form-button'>
            <button type='submit'>{text}</button>
        </div> 
    )
}

export default FormButton