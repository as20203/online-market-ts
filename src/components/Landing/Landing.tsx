import React,{useEffect} from 'react';
import './Landing.scss';
import Header from '../Generic/Header/Header';
import Carousel from './Carousel/Carousel';
import Footer from '../Generic/Footer/Footer';
import Recommendations from './Reccommendations/Reccommendation';
import Search from '../Generic/Header/Search/Search';
import {normalHeader} from '../Generic/Header/HeaderLinks/HeaderLinks';


const Landing:React.FC = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
   
    return(
        <div className='landing-main'>
            <Header children={normalHeader} />
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

