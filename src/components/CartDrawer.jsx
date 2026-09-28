import { WHATSAPP_NUMBER } from '../data/products';
import { useCart } from '../hooks/useCart';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = [
      'Hello HODDI,',
      'I would like to place an order:',
      '',
      ...items.map((i) => `- ${i.product.name} (${i.product.color}) / Size ${i.size} x${i.quantity} = $${i.product.price * i.quantity}`),
      '',
      `Total: $${total}`,
      '',
      'Please confirm my order.'
    ];
    const text = lines.join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    clearCart();
    onClose();
  };

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-header">
          <h2>Your cart</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close cart">&times;</button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <p>Your cart is empty.</p>
            <button className="btn btn-primary" onClick={onClose}>Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {items.map((item) => (
                <div className="drawer-item" key={`${item.product.id}-${item.size}`}>
                  <img src={item.product.front} alt={item.product.name} />
                  <div className="drawer-item-info">
                    <p className="drawer-item-name">{item.product.name}</p>
                    <p className="drawer-item-meta">Size {item.size} — ${item.product.price}</p>
                    <div className="drawer-qty">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                      >−</button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>
                  <div className="drawer-item-total">
                    <p>${item.product.price * item.quantity}</p>
                    <button
                      className="drawer-remove"
                      onClick={() => removeItem(item.product.id, item.size)}
                      aria-label="Remove item"
                    >Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button className="btn btn-whatsapp drawer-checkout" onClick={handleCheckout}>
                <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M16 0C7.16 0 0 7.16 0 16c0 2.83.74 5.49 2.03 7.8L.09 30.91l7.11-1.94A15.93 15.93 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm0 29.09c-2.4 0-4.63-.7-6.52-1.91l-.47-.29-4.24 1.16 1.13-4.13-.3-.48A13.06 13.06 0 0 1 2.91 16 13.1 13.1 0 0 1 16 2.91 13.1 13.1 0 0 1 29.09 16 13.1 13.1 0 0 1 16 29.09zm7.14-9.77c-.39-.2-2.3-1.13-2.65-1.26-.36-.13-.62-.2-.88.2-.26.39-1.01 1.26-1.24 1.52-.23.26-.45.29-.84.1-.39-.2-1.64-.6-3.13-1.93-1.16-1.03-1.94-2.31-2.17-2.7-.23-.39-.02-.6.17-.79.18-.18.39-.45.59-.68.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.68-.1-.2-.88-2.12-1.2-2.91-.32-.76-.65-.66-.88-.67l-.75-.01c-.26 0-.68.1-1.04.49-.36.39-1.37 1.34-1.37 3.26 0 1.93 1.4 3.79 1.6 4.04.2.26 2.76 4.22 6.69 5.92.94.4 1.67.64 2.24.82.94.3 1.8.26 2.48.16.76-.11 2.31-.94 2.64-1.86.32-.92.32-1.71.23-1.86-.1-.16-.36-.26-.75-.45z"/>
                </svg>
                Order on WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
