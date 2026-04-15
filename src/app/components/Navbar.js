'use client'

import React, { useState, useEffect } from 'react'
import { Heart, ShoppingCart, User, Search, Circle } from 'lucide-react';
import Link from 'next/link';
import { getShoes, getChildren, getSports, getTeams } from '@/src/lib/api';

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    async function fetchAll() {
      const shoes = await getShoes();
      const children = await getChildren();
      const sports = await getSports();
      const teams = await getTeams();

      const shoesWithCat = shoes.map(p => ({ ...p, category: "shoes" }));
      const childrenWithCat = children.map(p => ({ ...p, category: "children" }));
      const sportsWithCat = sports.map(p => ({ ...p, category: "sportswear" }));
      const teamsWithCat = teams.map(p => ({ ...p, category: "sborniy" }));

      setAllProducts([...shoesWithCat, ...childrenWithCat, ...sportsWithCat, ...teamsWithCat]);
    }
    fetchAll();
  }, []);

  // Filter products in real-time
  useEffect(() => {
    if (!query) {
      setFilteredProducts([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = allProducts.filter(item =>
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q))
    );

    setFilteredProducts(filtered);
  }, [query, allProducts]);

  return (
    <div>
      <nav>
        {/* Top bar */}
        <div className='flex gap-10 justify-around bg-stone-800 p-3'>
          <h1 className='flex text-white'><img className='w-5 h-5' src='https://www.footballstore.ru/images/rus.png'/> Санкт-Петербург</h1>
          <p className='flex text-white pl-120'><img className='w-4' src='https://www.footballstore.ru/img/call.svg'/>+8 800 500 44 96</p>
          <h1 className='flex text-white gap-4'><Circle className='text-green bg-green-600 rounded-3xl pt-6 h-2' />Помощь и вопросы</h1>
        </div>

        {/* Main nav with search */}
        <div className='flex justify-around items-center bg-black p-5'>
          <img src='https://www.footballstore.ru/img/logo.svg '/>

          {/* Search input */}
          <div className='relative w-200'>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
             className='px-20 py-2 w-100 text-white bg-zinc-600 border border-white rounded-2xl ' 
              type='text'
              placeholder='Я помогу вам найти товар.'
            />
            <Search className='text-white absolute right-2 top-2'/>
          </div>

          <div className='flex gap-5'>
            <Link href="/likes"><Heart className='text-white'/></Link>
            <Link href="/savat"><ShoppingCart className='text-white'/></Link>
            <Link href='/admin'><User className='text-white'/></Link>
          </div>
        </div>

        {/* Bottom menu */}
        <div className='flex gap-5 justify-around bg-stone-800 text-white p-3'>
          <Link href='/' className="relative inline-block text-white hover:after:scale-x-100">Home</Link>
          <Link href='/shoes' className="relative inline-block text-white hover:after:scale-x-100">Shoes</Link>
          <Link href='/children' className="relative inline-block text-white hover:after:scale-x-100">For Children</Link>
          <Link href='/sportswear' className="relative inline-block text-white hover:after:scale-x-100">SportsWear</Link>
          <Link href='/sborniy' className="relative inline-block text-white hover:after:scale-x-100">National teams</Link>
        </div>
      </nav>

      
      {/* Search results grid */}
            {filteredProducts.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5 px-10  justify-center">
                {filteredProducts.map(item => (
                <Link
                    key={item.id}
                    href={`/${item.category}/${item.id}`}
                    className="flex flex-col w-36 bg-white rounded-lg p-2 shadow hover:shadow-md transition"
                >
                    {/* Kichikroq image */}
                    {item.image && (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-24 w-70 object-contain my-10 " 
                    />
                    )}
                    <p className="font-semibold text-xs truncate">{item.title}</p>
                    <p className="text-green-700 font-bold text-sm">{item.price ? Number(item.price).toLocaleString() + " ₽" : ""}</p>
                </Link>
                ))}
            </div>
            )}
    </div>
  )
}