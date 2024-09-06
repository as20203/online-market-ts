import React, { useState, useEffect, useContext } from 'react'
import './Products.scss';
import Header from '../Generic/Header/Header';
import { productsHeader, productsAuthHeader } from '../Generic/Header/HeaderLinks/HeaderLinks';
import Sidebar from './Sidebar/Sidebar';
import AllProducts from './AllProducts/AllProducts';
import Footer from '../Generic/Footer/Footer';
import Search from '../Generic/Header/Search/Search';
import { authContext } from '../../services/auth';

const Products: React.FC = () => {
    const [expand, setExpand] = useState(false);
    const [count, setCount] = useState(0);
    const [auth] = useContext(authContext)
    const onClick = (e: any) => {
        window.scrollTo(0, 0);
        e.preventDefault();
        setExpand(expand => !expand);
        setCount(1);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='products-main'>
            <Header children={auth.isAuthenticated ? productsAuthHeader(onClick) : productsHeader(onClick)} />
            <div className='products-page-search'>
                <Search />
            </div>
            <div className='products-content'>
                <Sidebar setExpand={setExpand} expand={expand} count={count} />
                <div className='sidebar-content'>
                    <AllProducts />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products;