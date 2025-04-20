import React, { useEffect, useState } from "react";
import { getAllProducts } from "../service/productService";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listAllProducts();
  }, []);

  function navigateToPDP(product) {
    navigator(`/products/${product.name}`, { state: { product } });
  }

  function listAllProducts() {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching products: ", error);
      });
  }
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                onClick={() => navigateToPDP(product)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
