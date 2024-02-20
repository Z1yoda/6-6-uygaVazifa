import React, { useState, useEffect } from 'react';
import './index.css';
import starImg from '../../assets/star.png';
import products from '../../assets/products.json';

function Cards({ filters }) {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const applyFilters = () => {
        let filtered = products.filter(product => {
            const rating = parseFloat(product.rating);
            if (filters.selectedRating && rating < parseFloat(filters.selectedRating.split('-')[0])) {
                return false;
            }

            const price = parseFloat(product.price);
            if ((filters.minPrice && price < parseFloat(filters.minPrice)) && (filters.maxPrice && price > parseFloat(filters.maxPrice))) {
                return false;
            }

            if (filters.selectedBrand && product.brand !== filters.selectedBrand) {
                return false;
            }

            if (filters.selectedCategory && product.category !== filters.selectedCategory) {
                return false;
            }

            return true;
        });

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    return (
        <div className='cards-wrapper'>
            {filteredProducts.map((product, index) => (
                <div className="card" key={index}>
                    <img className='cardImg' src={product.thumbnail} alt="" />
                    <div className="cardContent">
                        <h2>{product.title}<span>{product.rating}<img src={starImg} alt="" /></span></h2>
                        <h3>{product.price}$</h3>
                        <p>{product.description}</p>
                        <button className='aboutBtn'>About</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;

