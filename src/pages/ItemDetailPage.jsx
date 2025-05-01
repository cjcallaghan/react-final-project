import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import '../styles/ItemDetailPage.css';

const ItemDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        getItemById,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    } = useItems();

    const item = getItemById(id);

    if (!item) {
        return (
            <div className="item-not-found">
                <h2>Item not found</h2>
                <p>The item you're looking for does not exist.</p>
                <button onClick={() => navigate('/')}>Return to Home</button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(item);
        // Optional: Show a confirmation toast or message
    };

    const handleWishlistToggle = () => {
        if (isInWishlist(item.id)) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    };

    return (
        <div className="item-detail-page">
            <div className="item-detail-container">
                <div className="item-image-large">
                    <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details">
                    <h1>{item.name}</h1>
                    <p className="item-price-large">${item.price.toFixed(2)}</p>

                    <div className="item-description">
                        <p>{item.description}</p>
                    </div>

                    <div className="item-actions">
                        <button
                            className="add-to-cart-btn"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>

                        <button
                            className={`wishlist-btn ${isInWishlist(item.id) ? 'in-wishlist' : ''}`}
                            onClick={handleWishlistToggle}
                        >
                            {isInWishlist(item.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailPage;