"use client";

import { useState } from "react";
import { createProduct } from "@/src/lib/api";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreateProductPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [images, setImages] = useState([""]);
  const [sizes, setSizes] = useState([""]);
  const [colors, setColors] = useState([""]);

  function addField(setter, list) {
    setter([...list, ""]);
  }

  function removeField(setter, list, index) {
    setter(list.filter((_, i) => i !== index));
  }

  function handleChange(setter, list, index, value) {
    const newList = [...list];
    newList[index] = value;
    setter(newList);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const product = {
      title,
      price: Number(price),
      image,
      images,
      description,
      sizes,
      colors,
      category
    };

    try {
      await createProduct(product);
      alert("Product created successfully ⚽");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Error creating product!");
    }
  }

  return (
    <div className=" bg-green-50 flex items-center justify-center p-1 text-center">
      <div className="bg-white shadow-2xl rounded-3xl w-[400] max-w-md p-3 border-2 border-green-600">

        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          ⚽ Create Football Product
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-green-300 rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-green-300 rounded-lg p-3"
          />

          <input
            placeholder="Main Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-green-300 rounded-lg p-3"
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border-2 border-green-300 rounded-lg p-3" >
            <option value=''>Select</option>
            <option value='shoes'>Shoes</option>
            <option value='children'>For children</option>
            <option value='sports'>Sports wear</option>
            <option value='teams'>National teams</option>
          </select>

          {image && (
            <Image
              src={image}
              alt="preview"
              width={200}
              height={200}
              className="rounded-lg mx-auto"
            />
          )}

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-green-300 rounded-lg p-3"
          />

          {/* Sizes */}
          <h3 className="font-semibold text-green-700 mt-4">Sizes</h3>

          {sizes.map((size, index) => (
            <div key={index} className="flex gap-2">
              <input
                placeholder="Size (ex: 40)"
                value={size}
                onChange={(e) =>
                  handleChange(setSizes, sizes, index, e.target.value)
                }
                className="border-2 border-green-300 rounded-lg p-2 flex-1"
              />

              <button
                type="button"
                onClick={() => removeField(setSizes, sizes, index)}
                className="bg-red-600 text-white px-3 rounded-lg"
              >
                X
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addField(setSizes, sizes)}
            className="bg-green-500 text-white py-2 rounded-lg"
          >
            Add Size
          </button>

          {/* Colors */}
          <h3 className="font-semibold text-green-700 mt-4">Colors</h3>

          {colors.map((color, index) => (
            <div key={index} className="flex gap-2 items-center">

              <input
                placeholder="Image URL"
                value={color}
                onChange={(e) =>
                  handleChange(setColors, colors, index, e.target.value)
                }
                className="border-2 border-green-300 rounded-lg p-2 flex-1"
              />

              <button
                type="button"
                onClick={() => removeField(setColors, colors, index)}
                className="bg-red-600 text-white px-3 rounded-lg"
              >
                X
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addField(setColors, colors)}
            className="bg-green-500 text-white py-2 rounded-lg"
          >
            Add Color
          </button>

          {/* Extra Images */}
          <h3 className="font-semibold text-green-700 mt-4">Extra Images</h3>

          {images.map((img, index) => (
            <div key={index} className="flex gap-2">

              <input
                placeholder="Image URL"
                value={img}
                onChange={(e) =>
                  handleChange(setImages, images, index, e.target.value)
                }
                className="border-2 border-green-300 rounded-lg p-2 flex-1"
              />

              <button
                type="button"
                onClick={() => removeField(setImages, images, index)}
                className="bg-red-600 text-white px-3 rounded-lg"
              >
                X
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addField(setImages, images)}
            className="bg-green-500 text-white py-2 rounded-lg"
          >
            Add Image
          </button>

          <button
            type="submit"
            className="bg-green-700 text-white py-3 rounded-2xl font-semibold mt-4"
          >
            Create Product ⚽
          </button>

        </form>
      </div>
    </div>
  );
}