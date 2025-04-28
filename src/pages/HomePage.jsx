import React from 'react';
import { useItems } from '../context/ItemContext';
import ItemCard from '../components/ItemCard';
import '../styles/HomePage.css';

const HomePage = () => {
    const { items } = useItems();
    const featuredItems = items.filter(item => item.featured);

    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to Loop & Stitch</h1>
                <p>Discover our curated collection of stylish clothing</p>
            </div>

            <div className="featured-section">
                <h2 className="section-title">Featured Items</h2>
                <div className="featured-items">
                    {featuredItems.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;