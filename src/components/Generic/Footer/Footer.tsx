import React from 'react';
import './Footer.scss';
import { FooterLinks } from './Footer-Links';


interface link {
    name: string,
    route: string
}

export const Footer: React.FC = () => {
    const linkList: link[][] = [
        [{ name: 'Sitemap', route: '#' }, { name: 'Contact Us', route: '#' },
        { name: 'Sales', route: '#' }, { name: 'Offers', route: '#' }]
        ,
        [{ name: 'Product PreOrder', route: '#' }, { name: 'FAQ\'s', route: '#' },
        { name: 'How to Access', route: '#' }, { name: 'Best Buying Plans', route: '#' }]
    ]


    return (
        <div className='footer-main'>
            <div className='about'>
                <p>About</p>
                <FooterLinks linksList={linkList[0]} />
            </div>
            <div className='services'>
                <p>Services</p>
                <FooterLinks linksList={linkList[1]} />

            </div>
            <div className='copyrights'>
                <p>Copyrights</p>
                <p>JNS Online Market</p>
                <p>All Rights Reserved. </p>
            </div>
        </div>
    )

}
