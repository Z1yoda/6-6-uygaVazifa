import React, { useRef, useEffect } from 'react';
import './index.css';

function Filter({ updateFilters }) {
    const rateRef = useRef('');
    const minPriceRef = useRef('');
    const maxPriceRef = useRef('');
    const brandRef = useRef('');
    const categoryRef = useRef('');

    const handleClick = () => {
        // Filtrlash qiymatlarini ajratib olish
        const selectedRating = rateRef.current.value === "Choose rate..." ? '' : rateRef.current.value;
        const minPrice = minPriceRef.current.value === '' ? '' : parseFloat(minPriceRef.current.value);
        const maxPrice = maxPriceRef.current.value === '' ? '' : parseFloat(maxPriceRef.current.value);
        const selectedBrand = brandRef.current.value === "Choose brand" ? '' : brandRef.current.value;
        const selectedCategory = categoryRef.current.value === "Choose category" ? '' : categoryRef.current.value;

        // Filtrlarni otasiga uzatish
        updateFilters({
            selectedRating,
            minPrice,
            maxPrice,
            selectedBrand,
            selectedCategory
        });
    };

    useEffect(() => {
        handleClick();
    }, [rateRef.current.value, minPriceRef.current.value, maxPriceRef.current.value, brandRef.current.value, categoryRef.current.value]);

    return (
        <div className='filter-wrapper'>
            <h1>Filter</h1>
            <div className="filters">
                <select className='rating' ref={rateRef}>
                    <option value="Choose rate...">Choose rate</option>
                    <option value="4-4.2">4-4.2</option>
                    <option value="4.2-4.4">4.2-4.4</option>
                    <option value="4.4-4.6">4.4-4.6</option>
                    <option value="4.6-4.8">4.6-4.8</option>
                    <option value="4.8-5">4.8-5</option>
                </select>
                <div className="priceType">
                    <input type="number" id='minPrice' placeholder='Dan' ref={minPriceRef} />
                    <input type="number" id='maxPrice' placeholder='Gacha' ref={maxPriceRef} />
                </div>
                <select className='brand' ref={brandRef}>
                    <option value="Choose brand">Choose brand</option>
                    <option value="Samsung">Samsung</option>
                    <option value="OPPO">OPPO</option>
                    <option value="Apple">Apple</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Microsoft Surface">Microsoft Surface</option>
                    <option value="Infinix">Infinix</option>
                    <option value="HP Pavilion">HP Pavilion</option>
                </select>
                <select className='category' ref={categoryRef}>
                    <option value="Choose category">Choose category</option>
                    <option value="smartphones">smartphones</option>
                    <option value="laptops">laptops</option>
                    <option value="fragrances">fragrances</option>
                    <option value="skincare">skincare</option>
                    <option value="groceries">groceries</option>
                    <option value="home-decoration">home-decoration</option>
                </select>
                <button className='saveBtn' onClick={handleClick}>saqlash</button>
            </div>
        </div>
    );
}

export default Filter;
