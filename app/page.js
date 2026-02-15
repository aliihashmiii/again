"use client";

import React, { useState, useEffect, useMemo } from 'react';

const shoeData = {
  Nike: [
    { id: 'n1', name: 'Air Jordan 1 Retro High OG', sizes: [38, 39, 40, 41, 42, 43, 44, 45], price: '$170', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'n2', name: 'Air Max 90', sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45], price: '$130', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'n3', name: 'Air Force 1 Low', sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46], price: '$110', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'n4', name: 'Dunk Low', sizes: [38, 39, 40, 41, 42, 43, 44, 45], price: '$110', image: 'https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'n5', name: 'Blazer Mid 77', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$100', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Adidas: [
    { id: 'a1', name: 'Samba OG', sizes: [38, 39, 40, 41, 42, 43, 44, 45], price: '$100', image: 'https://images.unsplash.com/photo-1612902376601-509fca0ee8b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'a2', name: 'Stan Smith', sizes: [37, 38, 39, 40, 41, 42, 43, 44], price: '$90', image: 'https://images.unsplash.com/photo-1622107471877-c83183e5e8e5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'a3', name: 'Ultraboost 23', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$190', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'a4', name: 'Gazelle', sizes: [38, 39, 40, 41, 42, 43, 44], price: '$90', image: 'https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'a5', name: 'Superstar', sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45], price: '$85', image: 'https://images.unsplash.com/photo-1612015670817-0127d66d2f47?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Gucci: [
    { id: 'g1', name: 'Ace Leather Sneaker', sizes: [38, 39, 40, 41, 42, 43, 44], price: '$650', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'g2', name: 'Rhyton Vintage', sizes: [39, 40, 41, 42, 43, 44], price: '$890', image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'g3', name: 'Screener Leather', sizes: [38, 39, 40, 41, 42, 43, 44, 45], price: '$730', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'g4', name: 'Horsebit Loafer', sizes: [38, 39, 40, 41, 42, 43, 44], price: '$730', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'g5', name: 'Tennis 1977', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$590', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Prada: [
    { id: 'p1', name: 'Americas Cup', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$670', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'p2', name: 'Cloudbust Thunder', sizes: [39, 40, 41, 42, 43, 44], price: '$850', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'p3', name: 'Monolith Loafer', sizes: [37, 38, 39, 40, 41, 42, 43], price: '$820', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'p4', name: 'Saffiano Leather', sizes: [38, 39, 40, 41, 42, 43, 44], price: '$690', image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'p5', name: 'Downtown Sneaker', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$750', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Dior: [
    { id: 'd1', name: 'B23 High-Top', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$1,200', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'd2', name: 'B27 Low-Top', sizes: [39, 40, 41, 42, 43, 44], price: '$990', image: 'https://images.unsplash.com/photo-1735039061532-b567eadfe1eb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'd3', name: 'Explorer Boot', sizes: [40, 41, 42, 43, 44, 45], price: '$1,350', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'd4', name: 'Walk n Dior', sizes: [37, 38, 39, 40, 41, 42, 43], price: '$890', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'd5', name: 'B22 Sneaker', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$1,150', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Versace: [
    { id: 'v1', name: 'Greca Labyrinth', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$895', image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'v2', name: 'Chain Reaction', sizes: [39, 40, 41, 42, 43, 44], price: '$995', image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'v3', name: 'Trigreca', sizes: [38, 39, 40, 41, 42, 43, 44, 45], price: '$850', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'v4', name: 'Medusa Loafer', sizes: [39, 40, 41, 42, 43, 44], price: '$795', image: 'https://images.unsplash.com/photo-1478827536114-da961b7f86c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'v5', name: 'Odissea Runner', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$725', image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Timberland: [
    { id: 't1', name: '6-Inch Premium Boot', sizes: [39, 40, 41, 42, 43, 44, 45, 46], price: '$200', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 't2', name: 'Earthkeepers', sizes: [40, 41, 42, 43, 44, 45], price: '$170', image: 'https://images.unsplash.com/photo-1542834281-0ca138a98475?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 't3', name: 'Chukka Boot', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$140', image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 't4', name: 'Euro Hiker', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$130', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 't5', name: 'Killington Chukka', sizes: [40, 41, 42, 43, 44, 45], price: '$110', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  'Loro Piana': [
    { id: 'l1', name: 'Open Walk', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$625', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'l2', name: 'Summer Walk', sizes: [39, 40, 41, 42, 43, 44], price: '$575', image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'l3', name: 'Winter Walk Boot', sizes: [40, 41, 42, 43, 44, 45], price: '$895', image: 'https://images.unsplash.com/photo-1627298753497-8b7e0c36ae5f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'l4', name: 'City Walk Derby', sizes: [39, 40, 41, 42, 43, 44], price: '$795', image: 'https://images.unsplash.com/photo-1582897085656-c845456defd9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'l5', name: 'Weekender Walk', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$650', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Aldo: [
    { id: 'al1', name: 'MX Oxford', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$80', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'al2', name: 'Chelsea Boot', sizes: [40, 41, 42, 43, 44, 45], price: '$120', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'al3', name: 'Sneaker Low', sizes: [38, 39, 40, 41, 42, 43, 44], price: '$70', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'al4', name: 'Loafer Slip-On', sizes: [39, 40, 41, 42, 43, 44], price: '$75', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'al5', name: 'Derby Lace-Up', sizes: [40, 41, 42, 43, 44, 45], price: '$90', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  CAT: [
    { id: 'c1', name: 'Colorado Boot', sizes: [40, 41, 42, 43, 44, 45, 46], price: '$140', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'c2', name: 'Holton Safety', sizes: [40, 41, 42, 43, 44, 45], price: '$150', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'c3', name: 'Intruder Sneaker', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$110', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'c4', name: 'Second Shift', sizes: [40, 41, 42, 43, 44, 45], price: '$135', image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'c5', name: 'Decade Boot', sizes: [40, 41, 42, 43, 44, 45, 46], price: '$160', image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ],
  Balenciaga: [
    { id: 'b1', name: 'Triple S', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$1,050', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'b2', name: 'Speed Trainer', sizes: [38, 39, 40, 41, 42, 43, 44], price: '$795', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'b3', name: 'Track Runner', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$895', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'b4', name: 'Defender Sneaker', sizes: [39, 40, 41, 42, 43, 44], price: '$975', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { id: 'b5', name: 'Paris Sneaker', sizes: [39, 40, 41, 42, 43, 44, 45], price: '$625', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0' }
  ]
};

const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="relative">
      <div className="w-8 h-8 bg-black rounded-sm"></div>
      <div className="absolute inset-0 w-8 h-8 bg-black rounded-sm transform rotate-45 -translate-x-1 translate-y-1 opacity-20"></div>
    </div>
    <span className="text-2xl font-light tracking-wider text-black">again</span>
  </div>
);

const ProductCard = ({ shoe, brand, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-neutral-100 aspect-square overflow-hidden">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-light tracking-wide">
          {brand}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-light tracking-wide text-black">{shoe.name}</h3>
        <p className="text-xs text-neutral-500 font-light">{shoe.price}</p>
        
        <div className="flex flex-wrap gap-1.5 mt-3">
          {shoe.sizes.slice(0, 5).map((size) => (
            <span 
              key={size}
              className="text-xs text-neutral-400 hover:text-black transition-colors duration-300 font-light"
            >
              {size}
            </span>
          ))}
          {shoe.sizes.length > 5 && (
            <span className="text-xs text-neutral-300 font-light">
              +{shoe.sizes.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AgainMarketplace() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const brands = Object.keys(shoeData);
  const allSizes = [...new Set(Object.values(shoeData).flat().flatMap(shoe => shoe.sizes))].sort((a, b) => a - b);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredShoes = useMemo(() => {
    const filtered = {};

    Object.entries(shoeData).forEach(([brand, shoes]) => {
      if (selectedBrand !== 'All' && brand !== selectedBrand) return;
      
      const brandFiltered = shoes.filter(shoe => 
        selectedSize === 'All' || shoe.sizes.includes(parseInt(selectedSize))
      );
      
      if (brandFiltered.length > 0) {
        filtered[brand] = brandFiltered;
      }
    });

    return filtered;
  }, [selectedBrand, selectedSize]);

  const totalProducts = Object.values(filteredShoes).flat().length;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2.5 text-xs tracking-widest font-light">
        FOUNDED BY SAJJAD AHMED QURESHI | FREE WORLDWIDE SHIPPING | CONTACT: 03557608121
      </div>

      <header className={`sticky top-0 bg-white z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-neutral-200 shadow-sm' : 'border-b border-neutral-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />

            <nav className="hidden lg:flex items-center space-x-10">
              <button 
                onClick={() => setSelectedBrand('All')}
                className={`text-xs tracking-widest font-light transition-all duration-300 pb-1 ${
                  selectedBrand === 'All' 
                    ? 'text-black border-b border-black' 
                    : 'text-neutral-400 hover:text-black'
                }`}
              >
                ALL
              </button>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`text-xs tracking-widest font-light transition-all duration-300 pb-1 ${
                    selectedBrand === brand 
                      ? 'text-black border-b border-black' 
                      : 'text-neutral-400 hover:text-black'
                  }`}
                >
                  {brand.toUpperCase()}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-2 bg-white border border-neutral-200 text-xs tracking-widest font-light focus:outline-none focus:border-black transition-colors duration-300 cursor-pointer"
              >
                <option value="All">ALL SIZES</option>
                {allSizes.map((size) => (
                  <option key={size} value={size}>EU {size}</option>
                ))}
              </select>
            </div>

            <button 
              className="lg:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {showMobileMenu && (
            <div className="lg:hidden border-t border-neutral-100 py-6 space-y-6">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {setSelectedBrand('All'); setShowMobileMenu(false);}}
                  className={`text-left px-4 py-2 text-sm tracking-widest font-light transition-colors duration-300 ${
                    selectedBrand === 'All' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  ALL
                </button>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {setSelectedBrand(brand); setShowMobileMenu(false);}}
                    className={`text-left px-4 py-2 text-sm tracking-widest font-light transition-colors duration-300 ${
                      selectedBrand === brand ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    {brand.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="px-4">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 text-sm tracking-widest font-light focus:outline-none focus:border-black"
                >
                  <option value="All">ALL SIZES</option>
                  {allSizes.map((size) => (
                    <option key={size} value={size}>EU {size}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </header>

      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm tracking-widest font-light rounded-full animate-fadeIn">
              COMING SOON
            </span>
          </div>
          <h1 className="text-7xl lg:text-9xl font-extralight tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            ALL BRANDS.<br />ONE DESTINATION.
          </h1>
          <p className="text-xl lg:text-2xl font-light tracking-widest mb-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            PREMIUM FOOTWEAR COLLECTION
          </p>
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black text-xs tracking-widest font-light hover:bg-neutral-100 transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </div>

      <div className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-sm tracking-widest font-light text-neutral-600">
              {totalProducts} PRODUCTS
            </h2>
          </div>

          {Object.entries(filteredShoes).length > 0 ? (
            <div className="space-y-24">
              {Object.entries(filteredShoes).map(([brand, shoes]) => (
                <div key={brand}>
                  <div className="mb-10">
                    <h2 className="text-3xl font-extralight tracking-wide mb-2 text-black">{brand}</h2>
                    <p className="text-xs tracking-widest text-neutral-400 font-light">{shoes.length} STYLES</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
                    {shoes.map((shoe, index) => (
                      <ProductCard key={shoe.id} shoe={shoe} brand={brand} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <h3 className="text-2xl font-light text-black mb-4">
                No products found
              </h3>
              <p className="text-neutral-500 font-light tracking-wide">
                Please adjust your filters
              </p>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-white rounded-sm transform rotate-45 -translate-x-1 translate-y-1 opacity-20"></div>
                  </div>
                  <span className="text-2xl font-light tracking-wider text-white">again</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-light tracking-wide">
                Premium footwear marketplace
              </p>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest font-light mb-6">CONTACT</h4>
              <div className="space-y-3 text-xs text-neutral-400 font-light">
                <p>03557608121</p>
                <p>contact@again.store</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest font-light mb-6">LOCATION</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Naqvi Plaza Lower Plate<br />
                Opp AJK Bank<br />
                Muzaffarabad, Pakistan
              </p>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest font-light mb-6">ABOUT</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Founded by Sajjad Ahmed Qureshi, bringing the world's finest footwear brands to one premium destination
              </p>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-10 text-center">
            <p className="text-xs text-neutral-500 font-light tracking-widest">
              © 2026 AGAIN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
