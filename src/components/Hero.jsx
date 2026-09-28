import { Link } from 'react-router-dom';
import { products } from '../data/products';
import heroModel from '/hero-model.jpg';

export default function Hero() {
  const featured = products[0];

  return (
    <section className="hero-dark">
      <div className="hero-dark-inner container">
        <div className="hero-content-left">
          <p className="hero-label">What our customers says</p>
          <blockquote className="hero-quote">
            “Fast, simple, user-friendly, absolutely amazing!”
          </blockquote>
          <h1 className="hero-heading">
            Exclusive Collections<br />For Z-Generation
          </h1>
          <div className="hero-buttons">
            <Link to="/#collection" className="btn btn-light">
              Shop Now <span>→</span>
            </Link>
            <Link to="/#collection" className="btn btn-outline">
              Categories <span>→</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual-right">
          <Link to={`/product/${featured.id}`} className="hero-featured-card">
            <img src={featured.front} alt={featured.name} />
            <div className="hero-featured-info">
              <span>Explore New Arrivals</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          <img className="hero-model" src={heroModel} alt="Fashion model" />
        </div>
      </div>

      <div className="scroll-down">
        <span>Scroll Down</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
