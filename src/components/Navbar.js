import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#964B00', color: 'white' }}>
      <Link to="/" style={{ margin: '0 15px', color: 'white' }}>Home</Link>
      <Link to="/add-product" style={{ margin: '0 15px', color: 'white' }}>Add Product</Link>
    </nav>
  );
};

export default Navbar;
