import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserPlus, faSignInAlt, faCartPlus, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
// Fix these imports
import { DropdownImage } from '../../DropdownImage';
import { Search } from '../Search'
import { authLinks } from '~/testData';

export const normalHeader = (
    <ul>
        <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
        <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
        <li className='li-search'><Search /></li>
        <li className='li-search-next'><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /><span>Signin</span></Link></li>
        <li><Link to='/signup' ><FontAwesomeIcon icon={faUserPlus} /><span>Signup</span></Link></li>
    </ul>
)


export const productsHeader = (onClick: any) => {
    return (
        <ul>
            <li onClick={onClick} className='sidebar-collapse'><Link to='#'><FontAwesomeIcon icon={faBars} /></Link></li>
            <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
            <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
            <li className='li-search'><Search /></li>
            <li className='li-search-next'><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /><span>Signin</span></Link></li>
            <li><Link to='/signup' ><FontAwesomeIcon icon={faUserPlus} /><span>Signup</span></Link></li>
        </ul>
    )
}


export const authHeader = (
    <ul>
        <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
        <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
        <li className='li-search'><Search /></li>
        <li className='li-search-next'><DropdownImage iconList={authLinks} /></li>
    </ul>
)


export const productsAuthHeader = (onClick: any) => {
    return (
        <ul>
            <li onClick={onClick} className='sidebar-collapse'><Link to='#'><FontAwesomeIcon icon={faBars} /></Link></li>
            <li><Link to='/'><FontAwesomeIcon icon={faHome} /><span>Home</span></Link></li>
            <li><Link to='/products'><FontAwesomeIcon icon={faCartPlus} /><span>Products</span></Link></li>
            <li className='li-search'><Search /></li>
            <li className='li-search-next'><DropdownImage iconList={authLinks} /></li>
        </ul>
    )
}