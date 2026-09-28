import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import HowToOrder from '../components/HowToOrder';
import { products } from '../data/products';

export default function Home() {
  return (
    <>
      <Hero />
      <main id="collection" className="container">
        <div className="section-header">
          <h2>The Collection</h2>
          <p>Click any hoodie to view details, choose your size, and add it to your cart.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <HowToOrder />
    </>
  );
}
