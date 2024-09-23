import React, { useEffect, useContext } from 'react';
import './Landing.scss';
import Header from '../Generic/Header/Header';
import Carousel from './Carousel/Carousel';
import { Footer, normalHeader, authHeader, Search } from '~/components';
import Recommendations from './Reccommendations/Reccommendation';
// import { normalHeader, authHeader } from '../Generic/Header/HeaderLinks/HeaderLinks';
import { authContext } from '../../services/auth';

const Landing: React.FC = () => {
    const [auth] = useContext(authContext);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='landing-main'>
            <Header children={auth.isAuthenticated ? authHeader : normalHeader} />
            <div className='landing-search'>
                <Search />
            </div>
            <Carousel />
            <Recommendations />


            <Footer />

        </div>
    )
}

export default Landing

