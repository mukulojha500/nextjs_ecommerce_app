"use client"

import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.css';

function ProductPage({ product }) {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-gray-400"></i>);
      }
    }
    return stars;
  };



  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={product.img} alt={product.name} width={100} height={100} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-700 text-base">Category: {product.categeory.join(', ')}</p>
        <p className="text-gray-700 text-base">Price: ${product.price}</p>
        <p className="text-gray-700 text-base">Ratings: {renderStars(product.ratings)}</p>
        <button className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{product.reviews.length} reviews</span>
      </div>
    </div>
  )
}

export default ProductPage