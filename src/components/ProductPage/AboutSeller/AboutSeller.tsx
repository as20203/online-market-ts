import React from 'react';
import './AboutSeller.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


const AboutSeller:React.FC = () =>{
    return(
        <div className='about-seller'>
            <div className='seller-heading'>Seller Description</div>
            <div className='seller-intro'>
                <div className='seller-logo'>
                    <Link to='#'>
                        <figure>
                            <img alt='hello' src='https://cdn.clipart.email/fcc8ead276ddb30d657f23845cd2e028_avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-_512-512.png' />
                        </figure>
                    </Link>
                    <div className='seller-details'>
                        <span className='seller-name'><span>Umer Muhammad</span> <Link to='#'>&#10095;</Link></span>
                        <span className='seller-member'>Member Since Jan 2017</span>
                    </div> 
                </div>
                <div className='seller-contact'>
                    <FontAwesomeIcon icon={faPhoneAlt} /> 03324453365
                </div>
            </div>
        </div>
    )
}

export default AboutSeller;