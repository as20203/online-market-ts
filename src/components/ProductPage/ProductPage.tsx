import React,{useEffect} from 'react';
import './ProductPage.scss';
import Header from '../Generic/Header/Header';
import {normalHeader} from '../Generic/Header/HeaderLinks/HeaderLinks';
import Footer from '../Generic/Footer/Footer';

const ProductPage:React.FC = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className='product-page-main'>
            <Header children={normalHeader} />
            <div className='product-main-content'>
                <h1>This will be the product Header</h1>
                <div className='product-gallery-content'>
                    <div className='product-gallery'>
                        <h1>This will be the product images gallery</h1>
                    </div>
                    <div className='product-main-information'>
                        <div className='about-product'>
                            <h1>This will be the product main info</h1>
                        </div>
                        <div className='about-seller'>
                            <h1>This will be the seller details</h1>
                        </div>
                    </div>

                </div>

                <div className='product-additional-information'>
                    <div className='product-details'>
                        <h1>This will be the product details</h1>
                    </div>

                    <div className='product-description'>
                        <h1>This will be the product description</h1>
                    </div>
                </div>
                <Footer />
            </div>
       </div>
    )
}

export default ProductPage;