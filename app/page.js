"use client";

import React, { useState, useEffect, useMemo } from 'react';

const shoeData = {
  Nike: [
    { id: 'n1', name: 'Air Jordan 1', sizes: [38,39,40,41,42,43,44,45], price: '$170', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { id: 'n2', name: 'Air Max 90', sizes: [37,38,39,40,41,42,43,44,45], price: '$130', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop' },
    { id: 'n3', name: 'Air Force 1', sizes: [38,39,40,41,42,43,44,45,46], price: '$110', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop' },
    { id: 'n4', name: 'Dunk Low', sizes: [38,39,40,41,42,43,44,45], price: '$110', image: 'https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?q=80&w=800&auto=format&fit=crop' },
    { id: 'n5', name: 'Blazer Mid', sizes: [39,40,41,42,43,44,45], price: '$100', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop' }
  ],
  Adidas: [
    { id: 'a1', name: 'Samba', sizes: [38,39,40,41,42,43,44,45], price: '$100', image: 'https://images.unsplash.com/photo-1612902376601-509fca0ee8b6?q=80&w=800&auto=format&fit=crop' },
    { id: 'a2', name: 'Stan Smith', sizes: [37,38,39,40,41,42,43,44], price: '$90', image: 'https://images.unsplash.com/photo-1622107471877-c83183e5e8e5?q=80&w=800&auto=format&fit=crop' },
    { id: 'a3', name: 'Ultraboost', sizes: [39,40,41,42,43,44,45], price: '$190', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop' },
    { id: 'a4', name: 'Gazelle', sizes: [38,39,40,41,42,43,44], price: '$90', image: 'https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=800&auto=format&fit=crop' },
    { id: 'a5', name: 'Superstar', sizes: [37,38,39,40,41,42,43,44,45], price: '$85', image: 'https://images.unsplash.com/photo-1612015670817-0127d66d2f47?q=80&w=800&auto=format&fit=crop' }
  ],
  Gucci: [
    { id: 'g1', name: 'Ace Leather', sizes: [38,39,40,41,42,43,44], price: '$650', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop' },
    { id: 'g2', name: 'Rhyton', sizes: [39,40,41,42,43,44], price: '$890', image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop' },
    { id: 'g3', name: 'Screener', sizes: [38,39,40,41,42,43,44,45], price: '$730', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop' },
    { id: 'g4', name: 'Horsebit Loafer', sizes: [38,39,40,41,42,43,44], price: '$730', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop' },
    { id: 'g5', name: 'Tennis 1977', sizes: [39,40,41,42,43,44,45], price: '$590', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop' }
  ],
  Balenciaga: [
    { id: 'b1', name: 'Triple S', sizes: [39,40,41,42,43,44,45], price: '$1,050', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop' },
    { id: 'b2', name: 'Speed Trainer', sizes: [38,39,40,41,42,43,44], price: '$795', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop' },
    { id: 'b3', name: 'Track', sizes: [39,40,41,42,43,44,45], price: '$895', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop' },
    { id: 'b4', name: 'Defender', sizes: [39,40,41,42,43,44], price: '$975', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop' },
    { id: 'b5', name: 'Paris', sizes: [39,40,41,42,43,44,45], price: '$625', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop' }
  ],
  Dior: [
    { id: 'd1', name: 'B23 High-Top', sizes: [39,40,41,42,43,44,45], price: '$1,200', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop' },
    { id: 'd2', name: 'B27 Low', sizes: [39,40,41,42,43,44], price: '$990', image: 'https://images.unsplash.com/photo-1735039061532-b567eadfe1eb?q=80&w=800&auto=format&fit=crop' },
    { id: 'd3', name: 'Explorer Boot', sizes: [40,41,42,43,44,45], price: '$1,350', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop' },
    { id: 'd4', name: 'Walk n Dior', sizes: [37,38,39,40,41,42,43], price: '$890', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop' },
    { id: 'd5', name: 'B22', sizes: [39,40,41,42,43,44,45], price: '$1,150', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop' }
  ]
};

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  const brands = Object.keys(shoeData);
  const allSizes = [...new Set(Object.values(shoeData).flat().flatMap(s => s.sizes))].sort((a,b) => a-b);

  const filtered = useMemo(() => {
    const result = {};
    Object.entries(shoeData).forEach(([brand, shoes]) => {
      if (selectedBrand !== 'All' && brand !== selectedBrand) return;
      const brandFiltered = shoes.filter(s => selectedSize === 'All' || s.sizes.includes(parseInt(selectedSize)));
      if (brandFiltered.length > 0) result[brand] = brandFiltered;
    });
    return result;
  }, [selectedBrand, selectedSize]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-3 text-xs tracking-widest">
        FOUNDED BY SAJJAD AHMED QURESHI | CONTACT: 03557608121
      </div>

      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light">again</div>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => setSelectedBrand('All')} className={selectedBrand === 'All' ? 'font-bold' : ''}>ALL</button>
              {brands.map(b => <button key={b} onClick={() => setSelectedBrand(b)} className={selectedBrand === b ? 'font-bold' : ''}>{b}</button>)}
            </nav>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="border px-3 py-1">
              <option value="All">ALL SIZES</option>
              {allSizes.map(s => <option key={s} value={s}>EU {s}</option>)}
            </select>
          </div>
        </div>
      </header>

      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center text-white px-6">
          <div className="mb-8"><span className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm tracking-widest">COMING SOON</span></div>
          <h1 className="text-7xl lg:text-9xl font-extralight mb-6">ALL BRANDS.<br/>ONE DESTINATION.</h1>
          <p className="text-xl font-light tracking-widest mb-12">PREMIUM FOOTWEAR COLLECTION</p>
          <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="px-8 py-4 bg-white text-black text-xs tracking-widest hover:bg-gray-100">EXPLORE COLLECTION</button>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(filtered).map(([brand, shoes]) => (
            <div key={brand} className="mb-20">
              <h2 className="text-3xl font-light mb-8">{brand}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {shoes.map(shoe => (
                  <div key={shoe.id} className="group">
                    <div className="bg-gray-100 aspect-square mb-4 overflow-hidden">
                      <img src={shoe.image} alt={shoe.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                    </div>
                    <h3 className="text-sm font-light">{shoe.name}</h3>
                    <p className="text-xs text-gray-500">{shoe.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest">© 2026 AGAIN. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
