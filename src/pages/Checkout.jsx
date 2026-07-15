import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router';
import { CartContext } from '../context/CartContext';
import '../styles/Checkout.css';

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    clearCart();
    alert("Thank you for your order! Your payment was successful.");
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No Items to Checkout</h2>
        <Link to="/products" className="cta-button">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <div className="checkout-form-section">
          <form className="checkout-form" onSubmit={handleCheckout}>
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" required placeholder="123 Main St" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" required placeholder="New York" />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" required placeholder="10001" />
              </div>
            </div>

            <h2>Payment Information</h2>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" required placeholder="XXXX-XXXX-XXXX-XXXX" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" required placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" required placeholder="123" />
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Pay ${cartTotal.toFixed(2)} & Place Order
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="summary-item-info">
                  <h4>{item.title}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div className="summary-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="summary-divider"></div>
          <div className="summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
