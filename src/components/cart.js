import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItems from "./ListItems";
import { clearCart } from "../utils/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum, item) => {
        const price = item?.card?.info?.defaultPrice || item?.card?.info?.price || 0;
        return sum + price / 100;
    }, 0);

    return (
        <div className="max-w-2xl mx-auto py-8 px-4 dark:text-white">
            <h1 className="text-3xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                Your Cart ({cartItems.length})
            </h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-16">
                    <FaShoppingCart className="mx-auto text-6xl text-gray-300 mb-4" />
                    <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 mb-6">Add delicious items from a restaurant menu.</p>
                    <Link
                        to="/"
                        className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                    >
                        Browse Restaurants
                    </Link>
                </div>
            ) : (
                <>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mb-6"
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
                    <ListItems items={cartItems} iscart={true} />
                    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl flex justify-between items-center">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-2xl font-bold text-green-600">₹ {total.toFixed(0)}</span>
                    </div>
                    <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-lg">
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
