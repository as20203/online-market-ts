import React from 'react';
import './AboutSeller.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const AboutSeller: React.FC = () => {
    return (
        <div className='about-seller'>
            <div className='seller-heading'>Seller Description</div>
            <div className='seller-intro'>
                <div className='seller-logo'>
                    <Link to='#'>
                        <figure>
                            <FontAwesomeIcon icon={faEnvelope} aria-hidden={true} />
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