// NEW FILE: pages/SearchPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import ItemCard from '../components/ItemCard';
import '../styles/SearchPage.css';

const SearchPage = () => {
    const { searchQuery, searchResults } = useItems();

    if (searchResults.length === 0) {
        return (
            <div className="empty-search">
                <h2>No items found</h2>
                <p>We couldn't find any items matching "{searchQuery}"</p>
                <Link to="/">
                    <button>Return to Home</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="search-page">
            <h1>Search Results for "{searchQuery}"</h1>

            <div className="search-results">
                {searchResults.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;