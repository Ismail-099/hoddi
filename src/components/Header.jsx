import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Header({ onOpenCart }) {
  const { count } = useCart();

  return (
    <>
      <div className="announcement-bar">
        Sign up for our newsletter and get 10% off your next order
      </div>
      <header className="site-header light-header">
        <div className="container header-inner">
          <Link to="/" className="logo">HODDI</Link>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/categories">Category</Link>
            <Link to="/about">About</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/journal">Journal</Link>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Account">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="icon-btn cart-icon-btn" onClick={onOpenCart} aria-label="Open cart">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
                <path d="M6 6L5 3H2" />
              </svg>
              {count > 0 && <span className="cart-badge">{count}</span>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
