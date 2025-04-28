import React, { createContext, useState, useContext, useEffect } from 'react';

// Sample items data
const initialItems = [
    {
        id: 1,
        name: "Cozy Knit Sweater",
        price: 69.99,
        image: "https://via.placeholder.com/300x400?text=Cozy+Knit+Sweater",
        description: "A warm and stylish sweater perfect for colder days. Made with high-quality yarn for maximum comfort and durability.",
        featured: true
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        price: 59.99,
        image: "https://via.placeholder.com/300x400?text=Classic+Denim+Jeans",
        description: "Timeless denim jeans that go with everything. Featuring a comfortable fit and durable construction for everyday wear.",
        featured: true
    },
    {
        id: 3,
        name: "Floral Summer Dress",
        price: 49.99,
        image: "https://via.placeholder.com/300x400?text=Floral+Summer+Dress",
        description: "A light and airy dress with beautiful floral patterns, perfect for warm summer days and special occasions.",
        featured: true
    },
    {
        id: 4,
        name: "Casual Cotton T-Shirt",
        price: 24.99,
        image: "https://via.placeholder.com/300x400?text=Cotton+T-Shirt",
        description: "A soft, comfortable cotton t-shirt available in multiple colors. A wardrobe essential for casual everyday style.",
        featured: false
    },
    {
        id: 5,
        name: "Elegant Evening Gown",
        price: 129.99,
        image: "https://via.placeholder.com/300x400?text=Evening+Gown",
        description: "A stunning evening gown designed for special occasions. Features elegant detailing and a flattering silhouette.",
        featured: true
    },
    {
        id: 6,
        name: "Leather Jacket",
        price: 199.99,
        image: "https://via.placeholder.com/300x400?text=Leather+Jacket",
        description: "A classic leather jacket that adds an edge to any outfit. Made from high-quality leather with a comfortable lining.",
        featured: false
    }
];

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
    const [items] = useState(initialItems);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    // Load data from localStorage on initial render
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const storedWishlist = localStorage.getItem('wishlist');

        if (storedCart) setCartItems(JSON.parse(storedCart));
        if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist));
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // Get an item by its ID
    const getItemById = (id) => {
        return items.find(item => item.id === parseInt(id));
    };

    // Add an item to the cart
    const addToCart = (item, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    // Remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Update quantity of an item in the cart
    const updateCartItemQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    };

    // Add an item to the wishlist
    const addToWishlist = (item) => {
        setWishlistItems(prevItems => {
            const existingItem = prevItems.find(wishItem => wishItem.id === item.id);
            if (!existingItem) {
                return [...prevItems, item];
            }
            return prevItems;
        });
    };

    // Remove an item from the wishlist
    const removeFromWishlist = (itemId) => {
        setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Check if an item is in the wishlist
    const isInWishlist = (itemId) => {
        return wishlistItems.some(item => item.id === itemId);
    };

    // Calculate the total price of items in the cart
    const calculateCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const value = {
        items,
        cartItems,
        wishlistItems,
        getItemById,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        calculateCartTotal
    };

    return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};