import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './ProductGallery.scss';


interface Props{
    products:string[]
}

const ProductGallery:React.FC<Props> = ({products}) =>{
    const [activeIndex,setActiveIndex] = useState(0);

    const onClick = (e:any) =>{
        e.preventDefault();
        const targetName:string = (e.target.getAttribute("data-name"));
        if(targetName==='previous' && activeIndex>0){
            setActiveIndex(activeIndex-1);
        }
        if(targetName==='next' && activeIndex<products.length-1){
            setActiveIndex(activeIndex+1);
        }
    }
    const images=products.map((product,index)=>{
        return <img alt='hello' className={index===activeIndex?'active fade':'inactive fade'} key={index}  src={product} />
    })


    return(
        <div className='product-gallery'>
        <div>
             <figure className='product-image'>
                 <div className='numbers-text'>
                     {activeIndex+1}/{products.length}
                 </div>
                 <Link className='previous' data-name='previous' onClick={onClick} to='#'>&#10094;</Link>
                 <Link className='next' data-name='next' onClick={onClick} to='#'>&#10095;</Link>
                 {images}
             </figure>
        </div>
     </div>
    )
}

export default ProductGallery;