import React, { useState, useContext } from 'react';
import './DropdownImage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {Link}  from 'react-router-dom';
import {Links} from '../../../TestData/AuthLinks/AuthLinks';
import {authContext} from '../../../services/auth';
import {useHistory} from 'react-router-dom';
interface Props{
    iconList:Links[]
}

const DropdownImage:React.FC<Props> = ({iconList}) =>{
    const[visible,setVisible] = useState(false);
    const history = useHistory();
    const [auth,dispatch] = useContext(authContext);
    
    const onClick = (e:any) =>{
        e.preventDefault();
        setVisible(visible=>!visible);
    }

    const onLogout =(e:any)=>{
        e.preventDefault();
        localStorage.clear()
        dispatch({type:'notauthenticated',value:!auth.isAuthenticated});
        history.push('/')
    }

    const liItems = iconList.map((icon,index)=>{
        return (
        <li key={index} ><Link onClick={icon.name==='Logout'?onLogout:()=>{}} to={icon.linkName}><FontAwesomeIcon icon={icon.image} /><span>{icon.name}</span></Link></li>
        )
    })
    return(
        <div className='auth-dropdown-main' onClick={onClick}>
            <div className='dropdown-icon' ><FontAwesomeIcon icon={faUser} /></div>
            <div className={visible?'auth-dropdown-list display':'auth-dropdown-list nodisplay'}>
                <ul>
                    {liItems}
                </ul>
            </div>
          
        </div>
        
    )

}

export default DropdownImage;