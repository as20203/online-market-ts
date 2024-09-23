import React, { useEffect, useContext, useState } from 'react';
import './ProductPage.scss';
import Header from '../Generic/Header/Header';
import { Footer, normalHeader, authHeader } from '~/components';
import { authContext } from '../../services/auth';
import { useParams } from 'react-router-dom';
import { getProduct, ProductList } from '../../testData/Products/Products';
import ProductGallery from './ProductGallery/ProductGallery';
import AboutProduct from './AboutProduct/AboutProduct';
import AboutSeller from './AboutSeller/AboutSeller';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductDescription from './ProductDescription/ProductDescription';
import BidProduct from './BidProduct/BidProduct';

interface ProductParams {
    id: string;
}

const ProductPage: React.FC = () => {
    const [auth] = useContext(authContext)
    let { id } = useParams<ProductParams>();
    const [product, setProduct] = useState<ProductList>({
        id: '', imgSrc: '', productName: '', productPrice: '',
        sellerLocation: '', creationDate: '', imagesList: [], productDetails: [], productDescription: []
    });
    useEffect(() => {
        window.scrollTo(0, 0)
        setProduct(getProduct(id));

    }, [id])

    return (
        <div className='product-page-main'>
            <Header children={auth.isAuthenticated ? authHeader : normalHeader} />
            <div className='product-main-content'>

                <div className='product-gallery-content'>
                    <ProductGallery products={product.imagesList} />
                    <div className='product-main-information'>
                        <AboutProduct productName={product.productName}
                            productPrice={product.productPrice} sellerLocation={product.sellerLocation}
                            creationDate={product.creationDate} />
                        <AboutSeller />
                        <BidProduct />

                    </div>
                </div>

                <div className='product-additional-information'>
                    <ProductDetails productDetails={product.productDetails} />
                    <ProductDescription productdescription={product.productDescription} />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ProductPage;