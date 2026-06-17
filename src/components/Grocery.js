import { FaShoppingBasket, FaLeaf, FaAppleAlt, FaBreadSlice, FaWineBottle } from "react-icons/fa";

const categories = [
  { icon: FaLeaf, name: "Vegetables", items: "Fresh greens, roots & herbs", color: "from-green-400 to-green-600" },
  { icon: FaAppleAlt, name: "Fruits", items: "Seasonal & exotic picks", color: "from-red-400 to-orange-500" },
  { icon: FaBreadSlice, name: "Bakery", items: "Bread, buns & pastries", color: "from-yellow-400 to-amber-500" },
  { icon: FaWineBottle, name: "Beverages", items: "Juices, milk & drinks", color: "from-blue-400 to-indigo-500" },
];

const Grocery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <FaShoppingBasket className="mx-auto text-5xl text-green-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Instamart Grocery</h1>
          <p className="text-gray-600 dark:text-gray-400">Fresh groceries delivered in minutes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {categories.map(({ icon: Icon, name, items, color }) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${color}`} />
              <div className="p-6 flex items-center gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${color} text-white`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{items}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Full grocery catalog with cart & checkout is on the way. Browse restaurants on the home page for now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
