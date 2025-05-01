import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import '../styles/CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity, calculateCartTotal } = useItems();

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some items to your cart to see them here.</p>
                <Link to="/">
                    <button>Continue Shopping</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>

            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">${item.price.toFixed(2)}</p>

                                <div className="quantity-control">
                                    <button
                                        onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                                        className="quantity-btn"
                                    >
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button
                                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                                        className="quantity-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="cart-item-actions">
                                <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-item">
                        <span>Subtotal:</span>
                        <span>${calculateCartTotal().toFixed(2)}</span>
                    </div>

                    <div className="summary-item">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>

                    <div className="summary-item total">
                        <span>Total:</span>
                        <span>${calculateCartTotal().toFixed(2)}</span>
                    </div>

                    <button className="checkout-btn">Proceed to Checkout</button>

                    <Link to="/" className="continue-shopping">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;