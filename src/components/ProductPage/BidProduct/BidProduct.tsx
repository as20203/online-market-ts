import React, { useState } from 'react';
import './BidProduct.scss';
import FormButton from '../../Generic/Forms/FormButton/FormButton';
import BiddingTable from './BiddingTable/BiddingTable';


const BidProduct: React.FC = () => {
    const [modalDisplay, setModalDisplay] = useState('product-modal-nodisplay')
    const onClick = (e: any) => {
        setModalDisplay(modalDisplay === 'product-modal-nodisplay' ?
            'product-modal-display' : 'product-modal-nodisplay')


    }

    const onModalClick = (e: any) => {
        e.preventDefault();
        console.log(e.target.getAttribute('class'));
        if (e.target.getAttribute('class') === 'product-modal-display') {
            setModalDisplay('product-modal-nodisplay');
        }
    }
    return (
        <div className='product-bidding'>
            <FormButton onClick={onClick} text="Bid on this Product" />
            <div onClick={onModalClick} className={modalDisplay}>
                <div className='product-bidding-table'>
                    <BiddingTable />
                </div>
            </div>
        </div>
    )
}

export default BidProduct;