'use client'

import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cart.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Savat bo‘sh</h2>
        <Link href="/" className="text-blue-500 underline">Asosiy sahifaga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 ">
      <h1 className="text-3xl font-bold mb-6">Savat</h1>

      <div className="flex  gap-4">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="flex items-center gap-4 bg-white p-3 rounded-xl shadow w-100"
          >
           
            {item.image && (
              <div className="relative w-20 h-20 md:w-20 md:h-20 flex">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain "
                  sizes="(max-width: 448px) 86px, 102px"
                />
              </div>
            )}

            <div className="flex-1 ">
              <h2 className="font-semibold text-sm md:text-base">{item.title}</h2>
              <img src={item.image} className="w-100"/>
              <p className="text-xs md:text-sm">Size: {item.size}</p>
              <p className="text-xs md:text-sm">Price: {item.price.toLocaleString()} ₽</p>
              <p className="text-xs md:text-sm">Quantity: {item.quantity}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg md:text-xl font-bold">Jami: {total.toLocaleString()} ₽</p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm md:text-base"
        >
          Barchasini o'chirish
        </button>
      </div>
    </div>
  );
}