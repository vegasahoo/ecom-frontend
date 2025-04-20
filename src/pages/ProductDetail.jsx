import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const navigator = useNavigate();
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuth();


  function handleAddToCart(product) {
      if (!isAuthenticated) {
        navigator('/login', { state: { from: location.pathname, product } });
        return;
      }
      else{
        dispatch(addToCart({ product, quantity }));
      }
    }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-[1/1] w-full flex justify-center items-center">
              <img
                src={`/${product.imageUrl}`}
                alt={product.name}
                className="w-full max-w-md object-cover shadow-lg rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="w-full space-y-6">
              {/* Product Name */}
              <h1 className="text-4xl font-semibold text-gray-800">
                {product.name}
              </h1>

              {/* Product Price */}
              <p className="text-2xl font-bold text-gray-800">
                ${product.price}
              </p>

              {/* Product Description */}
              <p className="text-lg text-gray-600">{product.description}</p>

              {/* Product Category */}
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-gray-700">Category:</span>
                <p className="text-lg text-gray-600">{product.category}</p>
              </div>

              {/* Product Stock */}
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-gray-700">In Stock:</span>
                <p className="text-lg text-gray-600">{product.stockQuantity}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <button
                  className="bg-gray-300 p-2 rounded"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="text-black">{quantity}</span>
                <button
                  className="bg-gray-300 p-2 rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl">Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
