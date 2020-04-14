import React from 'react';
import './Reccommendation.scss';
import  Content from './Content/Content';
import {productList} from '../../../TestData/Products/Products'

const Recommendation:React.FC = () =>{
    return(
        <div className='recommendations-main'>
            <h2>Fresh Recommendations</h2>
            <Content productList={productList}  />
        </div>
    )
}

export default Recommendation;