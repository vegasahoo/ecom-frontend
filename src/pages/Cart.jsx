import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart.items);

  function updateCartAndStorage(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const handleQuantityChange = (productId, newQty) => {
    if (newQty < 1) return;
    const updated = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQty } : item
    );
    updateCartAndStorage(updated);
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const calculateTotal = () => {
    return Math.ceil(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
  };

  const navigateToPDP = (product) => {
    navigator(`/products/${product.name}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  showQuantity
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                  onClick={(product) => navigateToPDP(product)}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <p className="text-gray-700 mb-2">
                Items in cart: <strong>{cart.length}</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Total Price:{" "}
                <span className="text-lg font-bold text-blue-600">
                  ${calculateTotal()}
                </span>
              </p>
              <button
                onClick={() => alert("Proceed to Checkout!")}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Checkout
              </button>
              <button
                onClick={() => navigator("/")}
                className="w-full mt-3 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
