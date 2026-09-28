import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export default function Categories() {
  const [open, setOpen] = useState(false);

  return (
    <div className="categories-page">
      <div className="container">
        <div className="categories-header">
          <h1>Our Categories</h1>
          <div className="categories-dropdown-wrap">
            <button
              className="categories-dropdown-trigger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              Category
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {open && (
              <div className="categories-dropdown-menu">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.link}
                    className="categories-dropdown-item"
                    onClick={() => setOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="category-card">
              <div className="category-card-media">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <div className="category-card-info">
                <span className="category-card-name">{cat.name}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
