import React from 'react';
import './ProductDetails.scss';

interface Props{
    productDetails:any[];
}


const ProductDetails:React.FC<Props> = ({productDetails}) =>{
    const details = productDetails.map((detail,index)=>{
        return(
            <div key={index} className='individual-detail'>
                <span>{detail.key}</span>
                <span>{detail.value}</span>
            </div>
        )
    })

    return(
            <div className='product-details'>
                <h3>Details</h3>
                <div className='product-detail'>
                  {details}
                </div>
            </div>
        )

}


export default ProductDetails;