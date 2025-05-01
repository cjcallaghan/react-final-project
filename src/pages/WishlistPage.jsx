import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import ItemCard from '../components/ItemCard';
import '../styles/WishlistPage.css';

const WishlistPage = () => {
    const { wishlistItems } = useItems();

    if (wishlistItems.length === 0) {
        return (
            <div className="empty-wishlist">
                <h2>Your wishlist is empty</h2>
                <p>Add items to your wishlist to save them for later.</p>
                <Link to="/">
                    <button>Browse Items</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <h1>Your Wishlist</h1>

            <div className="wishlist-items">
                {wishlistItems.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;