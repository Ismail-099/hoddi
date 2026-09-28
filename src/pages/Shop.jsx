import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ShopProductCard from '../components/ShopProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'all';
  const urlSale = searchParams.get('sale') === 'true';
  const [priceSort, setPriceSort] = useState('default');

  const filtered = useMemo(() => {
    let list = [...products];
    if (urlSale) {
      list = list.filter((p) => p.discount);
    } else if (urlCategory !== 'all') {
      list = list.filter((p) => p.color.toLowerCase().includes(urlCategory));
    }
    if (priceSort === 'low') {
      list.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [urlCategory, urlSale, priceSort]);

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete('category');
    } else {
      params.set('category', value);
    }
    params.delete('sale');
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-header">
          <h1>{urlSale ? 'Sale' : 'Latest Products'}</h1>
          <div className="shop-filters">
            <div className="filter-select">
              <select
                id="category-filter"
                value={urlCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">Category</option>
                <option value="pink">Pink</option>
                <option value="beige">Beige</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="lavender">Lavender</option>
                <option value="cream">Cream</option>
              </select>
            </div>
            <div className="filter-select">
              <select
                id="price-filter"
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
              >
                <option value="default">Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="shop-grid">
          {filtered.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
