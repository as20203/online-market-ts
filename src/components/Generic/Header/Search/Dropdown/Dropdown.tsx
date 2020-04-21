import React from 'react';
import {Link} from 'react-router-dom'
import './Dropdown.scss';
import {Product as products} from '../../../../../TestData/Products/Products';


interface Props {
    productList : products [];
    cursor:number,
    setCursor:any
}


const Dropdown:React.FC<Props> = ({productList,cursor,setCursor}) =>{

    const mouseOver = (e:any) =>{
        e.preventDefault();
        const index:number = parseInt((e.target.getAttribute('data-index')));
        setCursor(index);
    }
    //Filtering the recieved list according to typed search
    const products = productList.map((product,index)=>{
        return <li onMouseOver={mouseOver}  key={index}><Link to={'/product/'+product.id} data-index={index} className={index===cursor?'selected':''} >{product.productName}</Link></li>
    })
    return(
        <ul>
            {products}
        </ul>
    )
}


export default Dropdown;