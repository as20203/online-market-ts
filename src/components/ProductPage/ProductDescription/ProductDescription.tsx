import React from 'react';
import './ProductDescription.scss';


interface Props{
    productdescription:string[]
}

const ProductDescription:React.FC<Props> = ({productdescription}) =>{
    const descriptions = productdescription.map((description,index)=><p key={index}>{description}</p>)
    return(
        <div className='product-description'>
            <h3>Description</h3>
            {descriptions}
        </div>
    )
}

export default ProductDescription;