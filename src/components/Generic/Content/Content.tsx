import './Content.scss';
import Product from './Product/Product';
import { Product as products } from '../../../TestData/Products/Products';



interface Props {
    productList: products[];

}
const Content: React.FC<Props> = ({ productList }) => {
    const products = productList.map((product, index) => {
        return (
            <Product key={index} imgSrc={product.imgSrc} productName={product.productName}
                productPrice={product.productPrice} sellerLocation={product.sellerLocation}
                creationDate={product.creationDate} id={product.id} />
        )
    })
    return (
        <div className='content-main'>
            {products}
        </div>
    )
}

export default Content;