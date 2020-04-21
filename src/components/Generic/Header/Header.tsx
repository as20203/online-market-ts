import React from 'react';
import './Header.scss';


interface Props{
    children: React.ReactNode
}

const Header:React.FC<Props>= ({children}) =>{

    return(
       
        <div className='header-main'>
            {children}
           
        </div>
    )

}

export default Header;