import { useState } from 'react';
import { Trash2, Minus, Plus, CreditCard, DollarSign, ShoppingBag } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Rajasthani Puppet Set', price: 799, quantity: 1, image: '/api/placeholder/80/80' },
    { id: 2, name: 'Madhubani Painting', price: 1499, quantity: 2, image: '/api/placeholder/80/80' },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className="min-vh-100 py-4 py-md-5"
      style={{
        background: 'linear-gradient(135deg, #fef1f1, #fefce8)',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floral Background Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      >
        <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100">
          <path
            d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
            fill="#d97706"
          />
        </svg>
      </div>

      <div className="container" style={{ maxWidth: '960px', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1
            className="display-5 fw-bold mb-3"
            style={{ color: '#78350f', fontFamily: "'Playfair Display', serif" }}
          >
            Your Cultural Cart
          </h1>
          <p className="text-muted">Discover India's finest handicrafts</p>
          <div className="d-flex justify-content-center mt-3">
            <ShoppingBag style={{ color: '#b45309' }} size={32} />
          </div>
        </div>

        {/* Cart Container */}
        <div className="card shadow-lg mb-5 border-0">
          <div className="card-body p-4 p-md-5">
            <h2
              className="h4 fw-semibold mb-4"
              style={{ color: '#78350f', fontFamily: "'Playfair Display', serif" }}
            >
              Items ({items.length})
            </h2>

            {/* Cart Items */}
            <div>
              {items.map(item => (
                <div
                  key={item.id}
                  className="d-flex align-items-center py-3 border-bottom"
                >
                  <div className="flex-shrink-0 me-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded"
                      style={{ width: '80px', height: '80px', objectFit: 'cover', border: '1px solid #fef3c7' }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="fw-medium" style={{ color: '#78350f' }}>
                      {item.name}
                    </h3>
                    <p className="text-amber-600 fw-medium" style={{ color: '#b45309' }}>
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="btn btn-sm btn-light border"
                      style={{ backgroundColor: '#fef3c7' }}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 fw-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="btn btn-sm btn-light border"
                      style={{ backgroundColor: '#fef3c7' }}
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-sm btn-light border"
                      style={{ backgroundColor: '#ffe4e6' }}
                    >
                      <Trash2 size={16} style={{ color: '#e11d48' }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-4 pt-4 border-top">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-medium">₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping</span>
                <span className="fw-medium">₹100</span>
              </div>
              <div className="d-flex justify-content-between fw-bold mt-4">
                <span style={{ color: '#78350f' }}>Total</span>
                <span style={{ color: '#78350f' }}>₹{(totalAmount + 100).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Form */}
        <div className="card shadow-lg mb-5 border-0">
          <div className="card-body p-4 p-md-5">
            <h2
              className="h4 fw-semibold mb-4"
              style={{ color: '#78350f', fontFamily: "'Playfair Display', serif" }}
            >
              Shipping Address
            </h2>
            <div className="row g-3">
              {[
                { label: 'Full Name', type: 'text', col: 'col-md-6' },
                { label: 'Phone Number', type: 'tel', col: 'col-md-6' },
                { label: 'Address Line 1', type: 'text', col: 'col-12' },
                { label: 'Address Line 2', type: 'text', col: 'col-12' },
                { label: 'City', type: 'text', col: 'col-md-6' },
                { label: 'PIN Code', type: 'text', col: 'col-md-6' },
              ].map(field => (
                <div key={field.label} className={field.col}>
                  <label className="form-label text-muted">{field.label}</label>
                  <input
                    type={field.type}
                    className="form-control"
                    style={{
                      borderColor: '#fef3c7',
                      backgroundColor: '#fff7ed',
                    }}
                    required
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="card shadow-lg mb-5 border-0">
          <div className="card-body p-4 p-md-5">
            <h2
              className="h4 fw-semibold mb-4"
              style={{ color: '#78350f', fontFamily: "'Playfair Display', serif" }}
            >
              Payment Method
            </h2>
            <div className="row g-3">
              {[
                { id: 'upi', icon: CreditCard, title: 'UPI / GPay', description: 'Pay instantly' },
                { id: 'cod', icon: DollarSign, title: 'Cash on Delivery', description: 'Pay when you receive' },
              ].map(option => (
                <div key={option.id} className="col-md-6">
                  <input
                    type="radio"
                    id={option.id}
                    name="payment"
                    className="d-none"
                    defaultChecked={option.id === 'upi'}
                  />
                  <label
                    htmlFor={option.id}
                    className="d-flex align-items-center p-3 border rounded"
                    style={{
                      borderColor: '#fef3c7',
                      backgroundColor: '#fff7ed',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#fef3c7',
                      }}
                    >
                      <option.icon style={{ color: '#b45309' }} size={20} />
                    </div>
                    <div>
                      <p className="fw-medium mb-0" style={{ color: '#78350f' }}>
                        {option.title}
                      </p>
                      <p className="text-muted small">{option.description}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          className="btn w-100 text-white d-flex align-items-center justify-content-center"
          style={{
            background: 'linear-gradient(to right, #d97706, #e11d48)',
            padding: '15px',
            fontSize: '1.1rem',
          }}
        >
          <span className="me-2">Pay ₹{(totalAmount + 100).toLocaleString()} & Place Order</span>
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  );
}