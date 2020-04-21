import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserPlus,faSignInAlt,faCartPlus,faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Search from '../Search/Search';
import DropdownImage from '../../DropdownImage/DropdownImage';
import {authLinks} from '../../../../TestData/AuthLinks/AuthLinks';

export const normalHeader =(
    <ul> 
        <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
        <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
        <li className='li-search'><Search /></li>
        <li className='li-search-next'><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /><span>Signin</span></Link></li>
        <li><Link to='/signup' ><FontAwesomeIcon icon={faUserPlus} /><span>Signup</span></Link></li>
    </ul>
)


export const productsHeader = (onClick:any)=>{return(
<ul> 
    <li onClick={onClick} className='sidebar-collapse'><Link to='#'><FontAwesomeIcon icon={faBars} /></Link></li>
    <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
    <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
    <li className='li-search'><Search /></li>
    <li className='li-search-next'><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /><span>Signin</span></Link></li>
    <li><Link to='/signup' ><FontAwesomeIcon icon={faUserPlus} /><span>Signup</span></Link></li>
</ul>
)}


export const authHeader   = (
    <ul> 
        <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
        <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
        <li className='li-search'><Search /></li>
        <li className='li-search-next'><DropdownImage iconList={authLinks} /></li>
    </ul>
)


export const productsAuthHeader = (onClick:any)=>{return(
    <ul> 
        <li onClick={onClick} className='sidebar-collapse'><Link to='#'><FontAwesomeIcon icon={faBars} /></Link></li>
        <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
        <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
        <li className='li-search'><Search /></li>
        <li className='li-search-next'><DropdownImage iconList={authLinks} /></li>
    </ul>
    )}