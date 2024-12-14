import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductTable from '../components/ProductTable';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Dashboard</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default Home;
