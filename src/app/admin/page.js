'use client'

import Link from "next/link"

export default function AdminPage() {

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <div className="w-64 bg-black text-white p-6 space-y-6">

        <h1 className="text-2xl font-bold">
          ⚙ Admin Panel
        </h1>

        <nav className="flex flex-col gap-4">

          <Link href="/admin/create" className="hover:text-green-400">
            ➕ Create Product
          </Link>

          <Link href="/admin/products" className="hover:text-green-400">
            📦 Manage Products
          </Link>

          <Link href="/" className="hover:text-green-400">
            🏠 Back to Shop
          </Link>

        </nav>

      </div>

      {/* CONTENT */}

      <div className="flex-1 p-10">

        <h2 className="text-3xl font-bold mb-6">
          Admin Dashboard
        </h2>

        <p className="text-gray-600">
          Welcome to your football shop admin panel ⚽
        </p>

      </div>

    </div>
  )
}