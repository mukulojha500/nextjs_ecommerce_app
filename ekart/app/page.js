"use client"

import { getAllProducts } from "@/services/productServices";
import { Suspense, useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import Loading from "./loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // await new Promise(resolve => setTimeout(resolve, 3000))
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {products.map((product) => (
          <ProductPage key={product._id} product={product} />
        ))}
      </div>
    </Suspense>
  );
}
