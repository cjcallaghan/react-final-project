import React, { createContext, useState, useContext, useEffect } from 'react';
import eveningGown from "../assets/img/eveningGown.jpg"
import cozySweater from "../assets/img/sweater.jpg"
import jeans from "../assets/img/jeans.jpg"
import shirt from "../assets/img/shirt.jpg"
import floralDress from "../assets/img/floraldress.jpg"
import leather from "../assets/img/leatherjack.jpg"
import straw from "../assets/img/straw.jpg"
import cardigan from "../assets/img/cardigan.jpg"
import full from "../assets/img/fulllcardigan.jpg"
import bball from "../assets/img/baseball.jpg"
import peacoat from "../assets/img/peacoat.jpg"
import leggings from "../assets/img/leggings.jpg"
import knitScarf from "../assets/img/knitScarf.jpg"
import linenShirt from "../assets/img/linenShirt.jpg"
import furBoots from "../assets/img/rubToots.jpg"
import crocs from "../assets/img/crocs.jpg"
import sequinDress from "../assets/img/sequinDress.jpg"
import windbreaker from "../assets/img/windbreaker.jpg"
import joggers from "../assets/img/joggers.jpg"
import feltHat from "../assets/img/feltHat.jpg"
import goldHoops from "../assets/img/goldhoops.jpg"
import pendantNecklace from "../assets/img/layerednecklace.jpg"
import studSet from "../assets/img/studs.jpg"
import beadedBracelet from "../assets/img/bohobracelet.jpg"
import silkScarf from "../assets/img/hairScarf.jpg"
import sunglasses from "../assets/img/sunglasses.jpg"
import flannel from "../assets/img/flannerl.jpg"
import turtleneckDress from "../assets/img/turtleneckDres.jpg"
import tankTop from "../assets/img/tank.jpg"
import trenchCoat from "../assets/img/trench.jpg"
import kimono from "../assets/img/kimono.jpg"
import crossbodyBag from "../assets/img/crossbody.jpg"
import chainNecklace from "../assets/img/chunkyChain.jpg"
import fleeceLeggings from "../assets/img/fleeceLeggings.jpg"
import wrapBlouse from "../assets/img/wrapBlosue.jpg"
import knitBeanie from "../assets/img/knitbeanie.jpg"
import wideLegPants from "../assets/img/widelegs.jpg"
import denimJacket from "../assets/img/denimJacket.jpg"
import velvetHeadband from "../assets/img/velvetHeadband.jpg"
import moonStarEarrings from "../assets/img/dropEarrings.jpg"

// Sample items data
const initialItems = [
    {
        id: 1,
        name: "Cozy Knit Sweater",
        price: 69.99,
        image: cozySweater,
        description: "A warm and stylish sweater perfect for colder days. Made with high-quality yarn for maximum comfort and durability.",
        featured: true,
        category: "sweater, outerwear, cream, knit, cozy"
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        price: 59.99,
        image: jeans,
        description: "Timeless denim jeans that go with everything. Featuring a comfortable fit and durable construction for everyday wear.",
        featured: true,
        category: "jeans, pants, denim, black"
    },
    {
        id: 3,
        name: "Floral Summer Dress",
        price: 49.99,
        image: floralDress,
        description: "A light and airy dress with beautiful floral patterns, perfect for warm summer days and special occasions.",
        featured: true,
        category: "dress, floral, summer, pink"
    },
    {
        id: 4,
        name: "Casual Cotton T-Shirt",
        price: 24.99,
        image: shirt,
        description: "A soft, comfortable cotton t-shirt available in multiple colors. A wardrobe essential for casual everyday style.",
        featured: false,
        category: "shirt, graphic, cotton"
    },
    {
        id: 5,
        name: "Elegant Evening Gown",
        price: 129.99,
        image: eveningGown,
        description: "A stunning evening gown designed for special occasions. Features elegant detailing and a flattering silhouette.",
        featured: true,
        category: "dress, gown, formal wear, red"
    },
    {
        id: 6,
        name: "Leather Jacket",
        price: 199.99,
        image: leather,
        description: "A classic leather jacket that adds an edge to any outfit. Made from high-quality leather with a comfortable lining.",
        featured: false,
        category: "jacket, outerwear, leather, black"
    },
    {
        id: 7,
        name: "Knit Cardigan",
        price: 79.99,
        image: cardigan,
        description: "A versatile knit cardigan that can be dressed up or down. Perfect for layering in any season.",
        featured: false,
        category: "creme, cardigan, outerwear, knit, cashmere"
    },
    {
        id: 8,
        name: "Summer Straw Hat",
        price: 34.99,
        image: straw,
        description: "A stylish straw hat perfect for beach days and summer outings. Provides shade while keeping you looking fashionable.",
        featured: false,
        category: "accessory, hat, straw"
    },
    {
        id: 9,
        name: "Full Length Cozy Cardigan",
        price: 49.99,
        image: full,
        description: "A comfortable lounge cardigan to wrap yourself up in. ",
        featured: false,
        category: "grey, cardigan, outerwear, knit, wool, lounge"
    },
    {
        id: 10,
        name: "Baseball Hat",
        price: 14.99,
        image: bball,
        description: "A stylish straw hat perfect for beach days and summer outings. Provides shade while keeping you looking fashionable.",
        featured: false,
        category: "brown, hat, cap, accessory"
    },
    {
        id: 11,
        name: "Wool Blend Peacoat",
        price: 119.99,
        image: peacoat,
        description: "A tailored wool-blend peacoat that combines warmth with classic style. Ideal for chilly days and sophisticated layering.",
        featured: true,
        category: "coat, brown, outerwear"
    },
    {
        id: 12,
        name: "High-Waisted Leggings",
        price: 39.99,
        image: leggings,
        description: "Comfortable and stretchy high-waisted leggings, perfect for workouts or lounging at home. Flattering fit with full coverage.",
        featured: false,
        category: "leggings, black, lounge"
    },
    {
        id: 13,
        name: "Chunky Knit Scarf",
        price: 29.99,
        image: knitScarf,
        description: "Wrap yourself in this cozy, oversized knit scarf. A stylish accessory that adds warmth and texture to your winter wardrobe.",
        featured: false,
        category: "creme, scarf, outerwear, accessory"
    },
    {
        id: 14,
        name: "Button-Up Linen Shirt",
        price: 44.99,
        image: linenShirt,
        description: "A breathable, lightweight linen shirt great for warmer weather. Features a relaxed fit and natural texture.",
        featured: true,
        category: "white, linen, shirt"
    },
    {
        id: 15,
        name: "Faux Fur Lined Boots",
        price: 89.99,
        image: furBoots,
        description: "Stay warm and stylish in these faux fur-lined winter boots. Designed for comfort and traction in cold weather.",
        featured: false,
        category: "shoes, fur, boots, black"
    },
    {
        id: 16,
        name: "Tye-Dye Crocs",
        price: 54.99,
        image: crocs,
        description: "Versatile colorful crocs that can be dressed up or down. A summer classic and childhood favourite.",
        featured: false,
        category: "multicolor, crocs, shoes"
    },
    {
        id: 17,
        name: "Sequin Party Dress",
        price: 109.99,
        image: sequinDress,
        description: "A dazzling sequin dress that turns heads. Perfect for parties and evening events with a figure-hugging silhouette.",
        featured: true,
        category: "going out, pink, dress"
    },
    {
        id: 18,
        name: "Rainproof Windbreaker",
        price: 69.99,
        image: windbreaker,
        description: "A lightweight, water-resistant windbreaker ideal for unpredictable weather. Folds easily for on-the-go protection.",
        featured: false,
        category: "jacket, outerwear, grey"
    },
    {
        id: 19,
        name: "Soft Lounge Joggers",
        price: 34.99,
        image: joggers,
        description: "Ultra-soft joggers for ultimate comfort at home or on the move. Features an adjustable waistband and relaxed fit.",
        featured: false,
        category: "white, jogers, pants, lounge"
    },
    {
        id: 20,
        name: "Wide Brim Felt Hat",
        price: 39.99,
        image: feltHat,
        description: "Add a touch of flair with this wide brim felt hat. A stylish accessory for autumn outfits and sunny fall days.",
        featured: false,
        category: "yellow, hat, accessory"
    },
    {
        id: 21,
        name: "Gold Hoop Earrings",
        price: 19.99,
        image: goldHoops,
        description: "Classic gold hoop earrings that add a timeless elegance to any outfit. Lightweight and comfortable for daily wear.",
        featured: false,
        category: "jewelry, earrings, gold, accessory"
    },
    {
        id: 22,
        name: "Layered Pendant Necklace",
        price: 29.99,
        image: pendantNecklace,
        description: "Delicate layered gold necklace with minimalist pendants. Ideal for layering or wearing as a standalone statement.",
        featured: true,
        category: "necklace, jewelry, gold, accessory"
    },
    {
        id: 23,
        name: "Stud Earrings Set",
        price: 14.99,
        image: studSet,
        description: "A versatile set of simple stud earrings in multiple shapes and finishes. Perfect for mixing and matching.",
        featured: false,
        category: "jewelry, earrings, gold, studs, accessory"
    },
    {
        id: 24,
        name: "Boho Beaded Bracelet",
        price: 12.99,
        image: beadedBracelet,
        description: "Handmade beaded bracelet with earthy tones and adjustable fit. A subtle boho touch for everyday wear.",
        featured: false,
        category: "bracelet, beaded, gold, accessory, boho"
    },
    {
        id: 25,
        name: "Silk Hair Scarf",
        price: 22.99,
        image: silkScarf,
        description: "Luxurious silk hair scarf in floral print. Can be worn as a headband, neck scarf, or bag accent.",
        featured: false,
        category: "accessory, silk, scarf, tan"
    },
    {
        id: 26,
        name: "Oversized Sunglasses",
        price: 34.99,
        image: sunglasses,
        description: "Bold oversized sunglasses with UV protection. Add instant glam to any look.",
        featured: true,
        category: "accessory, sunglasses, black"
    },
    {
        id: 27,
        name: "Plaid Flannel Shirt",
        price: 44.99,
        image: flannel,
        description: "Soft brushed flannel shirt in a classic plaid pattern. Great for layering or wearing solo.",
        featured: false,
        category: "shirt, flannel, outerwear, plaid, grey, black"
    },
    {
        id: 28,
        name: "Turtleneck Sweater Dress",
        price: 74.99,
        image: turtleneckDress,
        description: "Cozy and chic sweater dress with a relaxed turtleneck and ribbed cuffs. A fall wardrobe essential.",
        featured: true,
        category: "dress, sweater, fall, knit, pink"
    },
    {
        id: 29,
        name: "Basic Tank Top",
        price: 19.99,
        image: tankTop,
        description: "A breathable and stretchy tank top perfect for layering or workouts. Comes in a variety of colors.",
        featured: false,
        category: "tank, shirt, cotton, basic, blue"
    },
    {
        id: 30,
        name: "Belted Trench Coat",
        price: 129.99,
        image: trenchCoat,
        description: "A classic belted trench coat in a neutral tan shade. Features button front and storm flaps.",
        featured: false,
        category: "coat, trench, outerwear, beige"
    },
    {
        id: 31,
        name: "Embroidered Kimono",
        price: 59.99,
        image: kimono,
        description: "Lightweight embroidered kimono with wide sleeves and a relaxed silhouette. Great for layering.",
        featured: false,
        category: "outerwear, kimono, boho, embroidery"
    },
    {
        id: 32,
        name: "Mini Crossbody Bag",
        price: 49.99,
        image: crossbodyBag,
        description: "Compact and stylish crossbody bag with adjustable strap. Perfect for hands-free convenience.",
        featured: false,
        category: "bag, accessory, leather, tan"
    },
    {
        id: 33,
        name: "Chunky Gold Chain Necklace",
        price: 24.99,
        image: chainNecklace,
        description: "A bold statement necklace with a chunky gold chain design. Elevates even the simplest outfit.",
        featured: false,
        category: "jewelry, necklace, accessory, gold, statement"
    },
    {
        id: 34,
        name: "Fleece-Lined Leggings",
        price: 39.99,
        image: fleeceLeggings,
        description: "Stay warm in these ultra-soft fleece-lined leggings. Ideal for winter layering or lounging.",
        featured: false,
        category: "leggings, fleece, lounge, black"
    },
    {
        id: 35,
        name: "Wrap Front Blouse",
        price: 52.99,
        image: wrapBlouse,
        description: "Elegant wrap blouse with a flattering V-neckline and tie waist. Great for work or going out.",
        featured: false,
        category: "blouse, top, workwear, black"
    },
    {
        id: 36,
        name: "Cable Knit Beanie",
        price: 18.99,
        image: knitBeanie,
        description: "Chunky cable knit beanie that keeps you warm while adding a cozy touch to your outfit.",
        featured: false,
        category: "hat, beanie, knit, winter, creme"
    },
    {
        id: 37,
        name: "High-Rise Wide Leg Pants",
        price: 69.99,
        image: wideLegPants,
        description: "Stylish high-rise pants with a flattering wide leg silhouette. Flows beautifully with movement.",
        featured: false,
        category: "pants, wide leg, dressy, grey"
    },
    {
        id: 38,
        name: "Denim Jacket",
        price: 79.99,
        image: denimJacket,
        description: "A classic denim jacket with a vintage wash. Perfect for transitional weather.",
        featured: false,
        category: "jacket, outerwear, denim, blue"
    },
    {
        id: 39,
        name: "Velvet Headband",
        price: 14.99,
        image: velvetHeadband,
        description: "Plush velvet headband with a twist-knot detail. Adds a polished touch to hair styling.",
        featured: false,
        category: "accessory, hair, velvet, red, headband"
    },
    {
        id: 40,
        name: "Moon & Star Drop Earrings",
        price: 24.99,
        image: moonStarEarrings,
        description: "Whimsical moon and star drop earrings with a hint of sparkle. A dreamy finishing touch for evening wear.",
        featured: false,
        category: "jewelry, earrings, accessory, celestial, gold"
    }
];

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
    const [items] = useState(initialItems);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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

    // Update search results whenever search query changes
    useEffect(() => {
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const results = items.filter(item =>
                item.name.toLowerCase().includes(" " + query) || item.category.toLowerCase().includes(query)
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, items]);

    // Set search query and trigger search results update
    const setSearchResultsQuery = (query) => {
        setSearchQuery(query);
    };

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
        searchQuery,
        searchResults,
        setSearchResults: setSearchResultsQuery,
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