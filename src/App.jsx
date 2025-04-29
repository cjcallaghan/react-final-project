import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemDetailPage from './pages/ItemDetailPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';
import { ItemProvider } from './context/ItemContext';
import './App.css';

function App() {
  return (
    <ItemProvider>
      <Router>
        <div className="app" style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/item/:id" element={<ItemDetailPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;