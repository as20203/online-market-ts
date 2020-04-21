import React from 'react';
import './Product.scss';
import {Link} from 'react-router-dom';

interface Props {
    imgSrc:string,
    productName:string,
    productPrice:string,
    sellerLocation:string,
    creationDate:string,
    id:string
    
}

const Product:React.FC<Props> = ({imgSrc,productName,productPrice,sellerLocation,creationDate,id}) =>{
    return(
       <div className='product-main'>
           <Link to={'/product/'+id}>
              <figure>
                <img src={imgSrc} alt='hello' />
              </figure>
              <div className='product-content'>
                <div className='product-title'>{productPrice}</div>
                <div>{productName}</div>
                <div className='product-seller'><span>{sellerLocation}</span><span>{creationDate}</span></div>
              </div>   
           </Link>    
      </div>
    )
}

export default Product;