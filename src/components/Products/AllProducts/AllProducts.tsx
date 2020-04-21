import React from 'react';
import  Content from '../../Generic/Content/Content';
import {productList} from '../../../TestData/Products/Products'
import './AllProducts.scss'

const AllProducts:React.FC = () =>{
    return (
        <div className='allproducts-main'>
            <Content productList={productList}  />
        </div>
    )
}

export default AllProducts;