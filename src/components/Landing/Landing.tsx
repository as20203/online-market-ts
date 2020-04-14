import React from 'react';
import './Landing.scss';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Recommendations from './Reccommendations/Reccommendation'



const Landing:React.FC = () =>{
    return(
        <div className='landing-main'>
            <Header />
            <Carousel />
            <Recommendations />
            
           
            <Footer />
    
        </div>
    )
}

export default Landing

