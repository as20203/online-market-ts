import React from 'react';
import './FooterLinks.scss';
import {Link} from 'react-router-dom';

interface Props {
    linksList:link []
}

interface link {
    name:string,
    route:string
}


const FooterLinks:React.FC<Props> = ({linksList}) =>{
    const links = linksList.map(link=>{
        return (
            <li key={link.name}><Link to={link.route}>{link.name}</Link></li>
        )
    });

    return (
        <ul className='footer-links-main'>
            {links}
        </ul>
    )


}

export default FooterLinks;