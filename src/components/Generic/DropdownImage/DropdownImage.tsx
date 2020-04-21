import React, { useState } from 'react';
import './DropdownImage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {Link}  from 'react-router-dom';
import {Links} from '../../../TestData/AuthLinks/AuthLinks';

interface Props{
    iconList:Links[]
}

const DropdownImage:React.FC<Props> = ({iconList}) =>{
    const[visible,setVisible] = useState(false);
    const onClick = (e:any) =>{
        e.preventDefault();
        console.log('clicked');
        setVisible(visible=>!visible);
    }

    const liItems = iconList.map(icon=>{
        return (
            <li><Link to={icon.linkName}><FontAwesomeIcon icon={icon.image} /><span>{icon.name}</span></Link></li>
        )
    })
    return(
        <div className='auth-dropdown-main' onClick={onClick}>
            <div className='dropdown-icon' ><FontAwesomeIcon icon={faUser} /></div>
            <div className={visible?'auth-dropdown-list display':'auth-dropdown-list nodisplay'}>
                <ul>
                    {/* <li><Link to='#'><FontAwesomeIcon icon={faUser} /><span>Profile</span></Link></li>
                    <li><Link to='#'><FontAwesomeIcon icon={faPlus} /><span>New Product</span></Link></li>
                    <li><Link to='#'><FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span></Link></li> */}
                    {liItems}
                </ul>
            </div>
          
        </div>
        
    )

}

export default DropdownImage;