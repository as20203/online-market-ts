import React from 'react';
import './FormButton.scss';


interface Props{
    text:string,
    color?:string,
    onClick?:any
}
const FormButton:React.FC<Props> = ({text,color,onClick}) =>{
    return(
        <div className='generic-form-button'>
            <button onClick={onClick} style={{background:color}} type='submit'>{text}</button>
        </div> 
    )
}

export default FormButton