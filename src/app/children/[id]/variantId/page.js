'use client'

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getProduct } from "@/src/lib/api";
import { useCart } from "@/src/context/CartContext";

export default function ProductPage() {
  const { id } = useParams(); // URLdan id oladi
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  // Productni fetch qilish
  useEffect(() => {
    async function fetchData() {
      const data = await getProduct(id);
      setProduct(data);

      if (data?.images?.length) {
        setSelectedImage(data.images[0]);
      }
    }

    if (id) fetchData();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Sizes array formatiga keltirish
  const availableSizes = Array.isArray(product.sizes)
    ? product.sizes
    : product.sizes?.split?.(",") || [];

  // Savatga qo'shish funksiyasi
  const handleAddToCart = () => {
    if (!selectedSize) return alert("Iltimos, o'lcham tanlang!");
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price || 0,
      size: selectedSize,
      image: selectedImage,
    });
    router.push("/savat"); // qo‘shilgandan keyin savatga yuboradi
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-3"
      >
        <ArrowLeft size={18}/> Назад
      </button>

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGES */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.images?.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`border p-2 rounded cursor-pointer ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                }`}
              >
                <div className="relative w-[80px] h-[80px]">
                  <Image src={img} alt={`thumb-${idx}`} fill className="object-contain"/>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center relative">
            {selectedImage && (
              <div className="w-full h-[400px] relative">
                <Image src={selectedImage} alt={product.title} fill className="object-contain"/>
              </div>
            )}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <p className="text-2xl font-bold mb-6">
            {Number(product.price || 0).toLocaleString()} ₽
          </p>

          {/* SIZE */}
          <div className="flex flex-wrap gap-3 mb-6">
            {availableSizes.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSize(s)}
                className={`border px-5 py-2 rounded-lg ${
                  selectedSize === s ? "bg-black text-white" : "hover:border-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
          >
            Savatga qo'shish
          </button>
        </div>

      </div>
    </div>
  );
}