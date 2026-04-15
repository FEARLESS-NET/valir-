'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Heart, ChevronDown } from "lucide-react"
import { getTeams } from "@/src/lib/api"
import { useLike } from "@/src/context/LikeContext"
import { useRouter } from "next/navigation"


export default function Page() {
  const router = useRouter();  
  const [favorites, setFavorites] = useState([])
  const [saleOnly, setSaleOnly] = useState(false)
  const [boots, setBoots] = useState([])
  const { likes, toggleLike } = useLike();

  

  // PRODUCTS
  useEffect(() => {
    async function fetchData() {
      const data = await getTeams()
      setBoots(data)
    }
    fetchData()
  }, [])

  // LIKE
        const toggleFavorite = (id) => {
        setFavorites((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
      );

    router.push("/likes");
  }


  return (
    <div className="min-h-screen bg-gray-100 px-10 py-16 flex gap-12">

      {/* Sidebar */}
      <div className="w-72 bg-white p-6 rounded-2xl shadow-sm">
        <div className="space-y-3 text-gray-800 font-medium">
          {["Бутсы (324)","Шиповки (138)","Футзалки (95)","Кроссовки (59)","Сланцы (9)","Аксессуары (12)"].map((cat, i) => (
            <div key={i} className="px-4 py-2 rounded cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
              {cat}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <span className="font-semibold">РАСПРОДАЖА</span>
          <div
            onClick={() => setSaleOnly(!saleOnly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${saleOnly ? "bg-green-500" : "bg-gray-300"}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${saleOnly ? "translate-x-6" : ""}`} />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-lg mb-4">ФИЛЬТРЫ</h3>
          {["РАЗМЕР","НАЗНАЧЕНИЯ ПОКРЫТИЯ","ЦЕНА","БРЕНД","КОЛЛЕКЦИИ","МОДЕЛЬ","МАТЕРИАЛ","ВОЗРАСТ/ПОЛ","ЦВЕТ"].map((filter, idx) => (
            <div key={idx} className="flex justify-between items-center py-4 border-t cursor-pointer hover:text-black">
              <span className="font-medium">{filter}</span>
              <ChevronDown size={18} />
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-10 text-gray-700">
          <div className="flex gap-4">
            <span>Показать:</span>
            {["24","48","96","всё"].map((n, i) => (
              <span key={i} className="cursor-pointer hover:underline">{n}</span>
            ))}
          </div>
          <div className="flex gap-6">
            {["новизне ↑","цене ↑","размеру скидки ↑"].map((s, i) => (
              <span key={i} className="cursor-pointer hover:underline">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {boots.map(item => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group relative">

              <div className="absolute top-4 right-4 z-10">
                <button onClick={() => toggleLike(item.id)}>
                <Heart
                  className={`cursor-pointer ${
                    likes.includes(item.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>
              </div>

              <Link href={`/sborniy/${item.id}`}>
              <div className="bg-gray-100 p-6 flex justify-center">
                <img
                  src={item.image}
                  className="h-56 w-full object-contain hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.price}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.title}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}