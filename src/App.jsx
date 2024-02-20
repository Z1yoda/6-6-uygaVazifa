import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import Cards from './components/Cards'
import products from './assets/products.json'

function App() {
  const [filters, setFilters] = useState({});

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Header className={products.length} />
      <div className='content'>
        <Filter updateFilters={updateFilters} />
        <Cards filters={filters} />
      </div>
    </>
  )
}

export default App;


