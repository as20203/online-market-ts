import React from 'react';
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search:React.FC = ()=>{
  
    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log('submitted');
    }    
    return(
        
        <form className='search' onSubmit={onSubmit}>
            <input type='text'  name='search' placeholder='Find Mobiles, Laptops, Mobile Phones ....' /> 
            <button type='submit' className={'search-link'}><FontAwesomeIcon  icon={faSearch} /></button>
        </form>
    )
}

export default Search;