import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [showBack, setShowBack] = useState(false);

  return (
    <article className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-media"
        onMouseEnter={() => setShowBack(true)}
        onMouseLeave={() => setShowBack(false)}
        aria-label={`View ${product.name} details`}
      >
        <img
          className={`front-img ${showBack ? 'hidden' : ''}`}
          src={product.front}
          alt={`${product.name} front`}
          loading="lazy"
        />
        <img
          className={`back-img ${showBack ? 'visible' : ''}`}
          src={product.back}
          alt={`${product.name} back`}
          loading="lazy"
        />
        <span className="view-hint">Hover for back view</span>
      </Link>
      <div className="product-info">
        <div className="product-title-row">
          <h3 className="product-title">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <span className="product-price">${product.price}</span>
        </div>
        <p className="product-desc">{product.desc}</p>
        <div className="product-actions">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary order-btn"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
