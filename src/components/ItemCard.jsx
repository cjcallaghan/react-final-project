import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import '../styles/ItemCard.css';

const ItemCard = ({ item }) => {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useItems();

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isInWishlist(item.id)) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    };

    return (
        <Link to={`/item/${item.id}`} className="item-card">
            <div className="item-image">
                <img src={item.image} alt={item.name} />
                <button
                    className={`wishlist-button ${isInWishlist(item.id) ? 'in-wishlist' : ''}`}
                    onClick={handleWishlistToggle}
                >
                    {isInWishlist(item.id) ? '♥' : '♡'}
                </button>
            </div>
            <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
        </Link>
    );
};

export default ItemCard;