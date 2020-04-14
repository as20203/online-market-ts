import React from 'react';
import './Products.scss';
import Header from '../Landing/Header/Header';

const Products:React.FC = () =>{
    return (
        <div className='products-main'>
            <Header />
            <h1>This will be the products page.</h1>
        </div>
    )
}

export default Products;