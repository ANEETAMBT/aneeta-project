import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td>
              <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;