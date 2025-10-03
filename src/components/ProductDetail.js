import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <div className="product-detail">
        <div className="no-selection">
          <div className="no-selection-icon">🛒</div>
          <h3>请选择一个商品</h3>
          <p>点击左侧（电脑端）/上方（手机端）商品列表中的任意商品查看详细信息</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="detail-header">
        <h2>{product.name}</h2>
        <div className="price-tag">${product.price.toLocaleString()}</div>
      </div>
      
      <div className="detail-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="detail-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x450?text=图片加载失败';
          }}
        />
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <h3>商品描述</h3>
          <p className="description">{product.description}</p>
        </div>

        <div className="detail-section">
          <h3>商品信息</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">成色：</span>
              <span className="info-value condition">{product.condition}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>商品状态</h3>
          <div className="status-info">
            <div className={(product.status) === "已卖出" ? "status-label-red" : "status-label-green"}>
              {product.status}
            </div>
            <div className="update-item">
              <span className="update-value">更新于：{product.update}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
