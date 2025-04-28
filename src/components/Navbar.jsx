import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const { cartItems } = useItems();
    const [searchQuery, setSearchQuery] = useState('');

    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleSearch = (e) => {
        e.preventDefault();
        // Search functionality would be implemented here
        console.log('Searching for:', searchQuery);
        setSearchQuery('');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Loop & Stitch</Link>
            </div>

            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart" className="cart-link">
                    Cart {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;