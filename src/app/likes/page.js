'use client'

import { useLike } from "@/src/context/LikeContext"
import { useEffect, useState } from "react"
import { getShoes, getChildren, getSports, getTeams } from "@/src/lib/api"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function LikesPage() {
  const { likes, toggleLike } = useLike()
  const [allProducts, setAllProducts] = useState([])
  const [likedProducts, setLikedProducts] = useState([])

  // Fetch all categories at once
  useEffect(() => {
    async function fetchAll() {
      const shoes = await getShoes()
      const children = await getChildren()
      const sports = await getSports()
      const teams = await getTeams()
      setAllProducts([...shoes, ...children, ...sports, ...teams])
    }
    fetchAll()
  }, [])

  // Filter liked products
  useEffect(() => {
    const filtered = allProducts.filter(item => likes.includes(item.id))
    setLikedProducts(filtered)
  }, [allProducts, likes])

  if (!likedProducts.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">❤️ Siz hali hech narsa like qilmagansiz</h1>
        <Link href="/" className="text-blue-500 underline hover:text-blue-400">
          Asosiy sahifaga qaytish
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-16">
      <h1 className="text-3xl font-bold mb-10">❤️ Saqlanganlar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {likedProducts.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden relative"
          >
            {/* Heart Button for unlike */}
            <button
              onClick={() => toggleLike(item.id)}
              className="absolute top-4 right-4 z-10"
            >
              <Heart
                className={`w-6 h-6 cursor-pointer transition ${
                  likes.includes(item.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>

            {/* Link to product page based on category */}
            <Link href={`/${item.category || 'shoes'}/${item.id}`}>
              <div className="bg-gray-100 p-6 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-contain hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-1">{item.description}</p>
              <p className="text-green-700 font-bold text-lg">{item.price.toLocaleString()} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}