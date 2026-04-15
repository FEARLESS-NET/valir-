'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { getProducts, deleteProduct, updateProduct } from "@/src/lib/api"

export default function AdminProducts() {

  const [products, setProducts] = useState([])
  const [editing, setEditing] = useState(null)

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([""])
  const [category, setCategory] = useState("");


  useEffect(() => {
    async function fetchData() {
      const data = await getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {

    if (!confirm("Delete this product?")) return

    await deleteProduct(id)

    setProducts(prev =>
      prev.filter(item => item.id !== id)
    )
  }

  // EDIT OCHISH
  const openEdit = (product) => {

    setEditing(product.id)

    setTitle(product.title)
    setPrice(product.price)
    setImage(product.image)
    setDescription(product.description || "")
    setImages(product.images || ["","","","",""])
    setCategory(product.category)
  }

  // IMAGE CHANGE
  const handleImageChange = (index, value) => {

    const newImages = [...images]
    newImages[index] = value
    setImages(newImages)

  }

  // UPDATE
  const handleUpdate = async () => {

    const updated = {
      title,
      price: Number(price),
      image,
      description,
      images,
      category
    }

    await updateProduct(editing, updated)

    setProducts(prev =>
      prev.map(p =>
        p.id === editing ? { ...p, ...updated } : p
      )
    )

    setEditing(null)

  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-10">
        Manage Products
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map(item => (

          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow"
          >

            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain h-40"
            />

            <h3 className="font-semibold mt-3">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500">
              ${item.price}
            </p>

            <div className="flex gap-2 mt-3">

              <button
                onClick={() => openEdit(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* EDIT MODAL */}

      {editing && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-96 space-y-3">

            <h2 className="text-xl font-bold">
              Update Product
            </h2>

            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              placeholder="Title"
              className="border p-2 w-full"
            />

            <input
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              placeholder="Price"
              className="border p-2 w-full"
            />

            <input
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              placeholder="Main Image"
              className="border p-2 w-full"
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Select</option>
                <option value='shoes'>Shoes</option>
                <option value='children'>For children</option>
                <option value='sports'>Sports wear</option>
                <option value='teams'>National teams</option>
            </select>

            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              placeholder="Description"
              className="border p-2 w-full"
            />

            <h3 className="font-semibold mt-2">
              Extra Images
            </h3>

            {images.map((img,index)=>(

              <input
                key={index}
                value={img}
                onChange={(e)=>handleImageChange(index,e.target.value)}
                placeholder={`Image ${index+1}`}
                className="border p-2 w-full"
              />

            ))}

            <div className="flex gap-3 pt-2">

              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={()=>setEditing(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  )
}