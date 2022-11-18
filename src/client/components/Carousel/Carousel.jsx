import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './Carousel.scss';

export default ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(items.length);

    const nextIndex = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prevIndex = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const selectIndex = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        setLength(items.length);
    }, [items]);

    return (
        <div className="Carousel">
            {currentIndex > 0 && (
                <div onClick={prevIndex} className="Carousel__left--arrow">
                    <span>&lsaquo;</span>
                </div>
            )}
            <motion.div
                className="Carousel__content"
                animate={{
                    translateX: -100 * currentIndex + '%',
                }}
            >
                {items.map((item, i) => {
                    return (
                        <div key={i} className="Carousel__content--item">
                            {item.content}
                        </div>
                    );
                })}
            </motion.div>
            {currentIndex < length - 1 && (
                <div onClick={nextIndex} className="Carousel__right--arrow">
                    <span>&rsaquo;</span>
                </div>
            )}

            <div className="Carousel__content__indicator">
                {items.map((item, i) => {
                    return (
                        <div
                            onClick={() => selectIndex(i)}
                            key={i}
                            className={`Carousel__content__indicator--item ${
                                currentIndex === i ? 'active' : ''
                            }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};
