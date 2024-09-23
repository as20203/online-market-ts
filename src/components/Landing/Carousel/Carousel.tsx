import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import { imagesArray } from '~/testData';

const Carousel: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const onClick = (e: any) => {
        const newActiveIndex: number = parseInt(e.target.getAttribute("data-index"));
        setActiveIndex(newActiveIndex)
    }



    useEffect(() => {

        const interval = setInterval(() => {
            if (activeIndex < imagesArray.length - 1) {
                setActiveIndex(activeIndex + 1);
            } else {
                setActiveIndex(0);
            }

        }, 8000)
        return () => clearInterval(interval);

    }, [activeIndex])


    let imageList = imagesArray.map((image, index) => {
        return (
            <div className={activeIndex === index ? 'active my-image fade' : 'inactive my-image fade'} key={index}>
                <img src={image.link} alt='hello' />
            </div>

        )
    });

    let dotCounter = imagesArray.map((images, index) => {

        return (
            <span className={activeIndex === index ? 'active-dot dot' : 'dot'} onClick={onClick} key={index} data-index={index} />
        )
    })


    return (
        <div className='carousel-main' >
            {imageList}
            <div className='dot-main' style={{ textAlign: 'center' }}>
                {dotCounter}
            </div>
        </div>
    )
}

export default Carousel;