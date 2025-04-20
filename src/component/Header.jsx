import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigator = useNavigate()
    const totalCount = useSelector(state => state.cart.items.length);
    return (
        <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            onClick={() => navigator("/")}
          >
            🛍️ MyShop
          </h1>
          
          {/* Cart icon positioned to the right */}
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => navigator("/cart")}
              className="relative px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              🛒 Cart
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </header>
      );
};

export default Header;
