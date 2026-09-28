import { Link } from 'react-router-dom';

export default function ShopProductCard({ product }) {
  return (
    <article className="shop-card">
      <Link to={`/product/${product.id}`} className="shop-card-media" aria-label={product.name}>
        {product.discount && (
          <span className="discount-ribbon">{product.discount}% Off</span>
        )}
        <img src={product.front} alt={product.name} loading="lazy" />
      </Link>
      <div className="shop-card-info">
        <h3 className="shop-card-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="shop-card-price">${product.price.toFixed(2)} USD</p>
      </div>
    </article>
  );
}
