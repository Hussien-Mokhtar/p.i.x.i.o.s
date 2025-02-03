import React from 'react'
import { useState } from "react";

export default function ShopBB() {
  const sizes = [4, 6, 8, 10, 12, 14, 16, 18, 20];
  const categories = [
    { name: "Dresses", count: 10 },
    { name: "Top & Blouses", count: 5 },
    { name: "Boots", count: 17 },
    { name: "Jewelry", count: 13 },
    { name: "Makeup", count: 6 },
    { name: "Fragrances", count: 17 },
    { name: "Shaving & Grooming", count: 13 },
    { name: "Jacket", count: 6 },
    { name: "Coat", count: 22 },
  ];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const tags = [
    "Vintage", "Wedding", "Cotton", 
    "Linen", "Navy", "Urban", 
    "Business Meeting", "Formal"
  ];

  const [selectedTag, setSelectedTag] = useState(null);

  const handleReset = () => {
    setSelectedTag(null);
  };

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      {/* Size Section */}
      <h3 className="text-lg font-semibold mb-2">Size</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              selectedSize === size ? "bg-black text-white" : "border-black text-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Category Section */}
      <h3 className="text-lg font-semibold mb-2">Category</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center justify-between cursor-pointer py-2"
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              className={`flex items-center gap-2 ${
                selectedCategory === category.name ? "text-black font-bold" : "text-gray-700"
              }`}
            >
              {category.name}
              {selectedCategory === category.name && (
                <span className="w-3 h-3 bg-black rounded-full" />
              )}
            </span>
            <span className="text-gray-500">({category.count})</span>
          </li>
        ))}
      </ul>

      <div className=" lg:w-[15rem] w-full lg:ml-0 -ml-8 bg-neutral-50 text-sm">
      {/* Tags Section */}
      <h3 className="text-lg font-semibold mb-2 ">Tags</h3>
      <div className="grid lg:grid-cols-3 grid-cols-3 gap-3 mb-4 ">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-xl border flex items-center justify-center ${
              selectedTag === tag
                ? "bg-black text-white"
                : "border-black text-black"
            }`}
          >
            {tag}
            {selectedTag === tag && (
              <span className="ml-2 w-2 h-3 bg-black rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="px-6 py-2 bg-black text-white rounded-full"
      >
        RESET
      </button>
    </div>
    </div>
  );
}
