'use client'

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Heart } from "lucide-react";
import { getProduct } from "@/src/lib/api";
import { useCart } from "@/src/context/CartContext";

export default function ProductPage() {
  
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColors, setSelectedColors] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getProduct(id);
      setProduct(data);
      if (data?.images?.length) setSelectedImage(data.images[0]);
    }
    if (id) fetchData();
  }, [id]);
  
  if (!product) return <p>Loading...</p>;

  const availableSizes = Array.isArray(product.sizes)
    ? product.sizes
    : Array.isArray(product.size)
    ? product.size
    : [];

  const availableColors = Array.isArray(product.colors)
    ? product.colors
    : Array.isArray(product.color)
    ? product.color
    : [];

  const handleAddToCart = () => {
    if (!selectedSize) return alert("Iltimos razmer tanlang!");
    if (!selectedColors) return alert("Iltimos rangni tanlang!");
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      color: selectedColors,
      image: selectedImage,
    });
    router.push("/savat");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-600 hover:text-black mb-3">
        <ArrowLeft size={18} /> Назад
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT - IMAGES */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.images?.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`border p-2 rounded cursor-pointer ${selectedImage === img ? "border-black" : "border-gray-200"}`}
              >
                <div className="relative w-[80px] h-[80px]">
                  <Image src={img} alt="thumb" fill className="object-contain rounded" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-gray-100 rounded-xl relative flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px]">
              {selectedImage && <Image src={selectedImage} alt={product.title} fill className="object-contain" />}
            </div>
          </div>
        </div>

        {/* RIGHT - INFO */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-4">Артикул: {product.article || id}</p>
          <p className="text-2xl md:text-3xl font-bold mb-4">{Number(product.price).toLocaleString()} ₽</p>

          {/* SIZE */}
          <div className="mb-6">
            <p className="text-sm mb-3 font-semibold">ВЫБРАТЬ РАЗМЕР</p>
            <div className="flex flex-wrap gap-3">
              {availableSizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-5 py-2 rounded-lg font-medium transition ${selectedSize === size ? "bg-black text-white border-black" : "hover:border-black"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <p className="text-sm mb-3 font-semibold">ВЫБРАТЬ ЦВЕТ</p>
            <div className="flex flex-wrap gap-3">
              {availableColors.map((color, idx) => (
                <img key={idx} src={color} 
                  onClick={() => setSelectedColors(color)}
                  className={`w-[80px] border px-5 py-2 rounded-lg font-medium transition ${selectedColors === color ? "bg-black text-white border-black" : "hover:border-black"}`} />
              ))}
            </div>
          </div>

          <button
            onClick={() =>
                handleAddToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                size: selectedSize,
                colors: selectedColors,
                image: selectedImage,
                })
            }
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
            >
            Savatga qo'shish
            </button>
        </div>
      </div>
    </div>
  );
}