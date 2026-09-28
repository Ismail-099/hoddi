import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const product = products.find((p) => p.id === Number(id));
  const others = products.filter((p) => p.id !== Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="container not-found">
        <h2>Product not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to shop</button>
      </div>
    );
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (!size) return;
    addItem(product, size, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="page">
      <div className="container">
        <button className="back-link" onClick={() => navigate(-1)}>← Back</button>

        <section className="detail-page">
          <div className="detail-page-gallery">
            <div className="detail-main-image">
              <img
                className={`front-img ${showBack ? 'hidden' : ''}`}
                src={product.front}
                alt={`${product.name} front`}
              />
              <img
                className={`back-img ${showBack ? 'visible' : ''}`}
                src={product.back}
                alt={`${product.name} back`}
              />
            </div>
            <div className="detail-thumbs">
              <button
                className={!showBack ? 'active' : ''}
                onClick={() => setShowBack(false)}
                aria-label="Front view"
              >
                Front
              </button>
              <button
                className={showBack ? 'active' : ''}
                onClick={() => setShowBack(true)}
                aria-label="Back view"
              >
                Back
              </button>
            </div>
          </div>

          <div className="detail-page-info">
            <p className="detail-tag">{product.color}</p>
            <h1>{product.name}</h1>
            <p className="detail-page-price">${product.price}</p>
            <p className="detail-desc">{product.desc}</p>

            <form className="order-form" onSubmit={handleAdd}>
              <label htmlFor="detail-size">Size</label>
              <select
                id="detail-size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              >
                <option value="">Select size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <label htmlFor="detail-quantity">Quantity</label>
              <input
                id="detail-quantity"
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />

              <button type="submit" className={`btn ${added ? 'btn-success' : 'btn-primary'}`}>
                {added ? 'Added to cart' : 'Add to cart'}
              </button>
            </form>
          </div>
        </section>

        <section className="related-section">
          <h2>You may also like</h2>
          <div className="product-grid related-grid">
            {others.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
