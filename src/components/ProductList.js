import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onSelectProduct, selectedProductId }) => {
  const handleProductClick = (product) => {
    onSelectProduct(product);
  };

  return (
    <div className="product-list">
      <h2>商品列表</h2>
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className={`product-item ${selectedProductId === product.id ? 'selected' : ''}`}
            onClick={() => handleProductClick(product)}
          >
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=图片加载失败';
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toLocaleString()}</p>
              <p className="product-condition">{product.condition}</p>
              <div className="status-label-position">
                <p className={ (product.status) === "已卖出" ? "status-label-red" : "status-label-green"}>{product.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
