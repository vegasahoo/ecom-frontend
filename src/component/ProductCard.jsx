const ProductCard = ({
  product,
  showQuantity = false,
  onQuantityChange,
  onRemove,
  onClick,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col h-[380px] overflow-hidden">
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md"
      />

      <div className="mt-3 flex flex-col flex-grow">
        {/* Product Name */}
        <h2 className="text-sm font-semibold truncate">{product.name}</h2>

        {/* Product Description */}
        <p className="text-xs text-gray-600 mt-1 line-clamp-2 break-words overflow-hidden">
          {product.description}
        </p>

        {/* Product Price */}
        <div className="mt-auto text-blue-600 font-bold text-sm">
          ${product.price}
        </div>

        {/* Quantity Controls & Remove Button (Visible only in cart) */}
        {showQuantity && (
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuantityChange(product.id, product.quantity - 1);
                }}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuantityChange(product.id, product.quantity + 1);
                }}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Remove button */}
            {onRemove && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(product.id);
                }}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
