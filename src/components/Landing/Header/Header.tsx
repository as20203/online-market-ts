import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserPlus,faSignInAlt,faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Search from './Search/Search';


const Header:React.FC= () =>{

    return(
        <div className='header-main'>
            <ul>
                <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
                <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Product</span></Link></li>
                <li><Search /></li>
                <li><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /><span>Signin</span></Link></li>
                <li><Link to='/signup' ><FontAwesomeIcon icon={faUserPlus} /><span>Signup</span></Link></li>
            </ul>


        </div>
    )

}

export default Header;