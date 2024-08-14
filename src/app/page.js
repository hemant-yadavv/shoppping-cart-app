"use client";

import Products from "@/components/Products";
import { useCart } from "@/Context/AppContext";

export default function Home() {
  const { ProductList } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      {ProductList.map((item) => (
        <Products
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.images[0]}
          price={item.price}
          images={item.images}
        />
      ))}
    </div>
  );
}