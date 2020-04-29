import React from 'react';
import './AboutProduct.scss';


interface Props{
    productPrice:string,
    productName:string,
    sellerLocation:string,
    creationDate:string
}

const ProductMainInfo:React.FC<Props> = ({productPrice,productName,sellerLocation,creationDate}) =>{
    return(
        <div className='about-product'>
            
            <div className='product-price'>MinimumBid:- {productPrice}</div>
            <div className='product-name'>
                <h1>{productName} </h1>
            </div>
            <div className='seller-info'>
                <span>{sellerLocation}</span>
                <span>{creationDate}</span>
            </div>  
        </div>
    )
}


export default ProductMainInfo;