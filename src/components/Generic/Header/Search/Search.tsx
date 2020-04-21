import React, { useState} from 'react';
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown/Dropdown'
import {productList} from '../../../../TestData/Products/Products';
import {useHistory} from 'react-router-dom';


const Search:React.FC = ()=>{
    const [search,setSearch] = useState('');
    const [cursor,setCursor] = useState(-1);
    const history = useHistory();
    let products = productList.filter((product)=>{
        if((product.productName.toLowerCase().includes(search)) && search){
            return true;
        }else{
            return false;
        }
    })

    const onChange = (e:any) =>{
        setSearch(e.target.value);
        products = productList.filter((product)=>{
            if((product.productName.toLowerCase().includes(search)) && search){
                return true;
            }else{
                return false;
            }
        })
    }
  
    const onSubmit = (e:any) => {
        e.preventDefault();
        if(cursor>=0){
            setSearch('')
            console.log('hello');
            history.push('/product/'+products[cursor].id)
        }else{
            if(cursor===-1 && products.length>0){
                setSearch('')
                history.push('/product/'+products[0].id)
            }else{
                setSearch('')
                history.push('/products/')
            }
        }
      
    } 
    
    const keyDown = (e:any) =>{
       if(search===''){
           setCursor(-1)
       }

       if(e.key==='ArrowDown'){
            if(cursor<products.length){
               setCursor(cursor+1);
            }
       }
       else if (e.key==='ArrowUp'){
            if(cursor>-1){
                setCursor(cursor-1);
            }
       }
    }
    return(
        <form className='search-main' onSubmit={onSubmit}>
            <div className='dropdown-content'>
                <input value={search}  onKeyDown={keyDown}  type='text'  onChange={onChange}  autoComplete='off'  name='search' placeholder='Find Mobiles, Laptops, Mobile Phones ....' />
                <Dropdown setCursor={setCursor}  cursor={cursor}  productList={products} />
            </div>  
            <button  type='submit' className={'search-link'}><FontAwesomeIcon  icon={faSearch} /></button>
        </form>
    )
}

export default Search;