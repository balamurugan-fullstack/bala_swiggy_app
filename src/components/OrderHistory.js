import { Link } from "react-router-dom";
import { FaHistory, FaUtensils } from "react-icons/fa";

const sampleOrders = [
  { id: "ORD-1042", restaurant: "Meghana Foods", date: "Jun 10, 2026", total: "₹ 480", status: "Delivered" },
  { id: "ORD-1038", restaurant: "Truffles", date: "Jun 5, 2026", total: "₹ 720", status: "Delivered" },
  { id: "ORD-1031", restaurant: "Corner House", date: "May 28, 2026", total: "₹ 350", status: "Cancelled" },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  Cancelled: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
};

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FaHistory className="text-3xl text-orange-500" />
          <h1 className="text-3xl font-bold dark:text-white">Order History</h1>
        </div>

        {sampleOrders.length === 0 ? (
          <div className="text-center py-20">
            <FaUtensils className="mx-auto text-5xl text-gray-300 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No orders yet. Start exploring restaurants!</p>
            <Link to="/" className="inline-block mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Browse Restaurants
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sampleOrders.map((order) => (
              <div key={order.id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex flex-wrap justify-between items-center gap-3">
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">{order.restaurant}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{order.id} · {order.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold dark:text-white">{order.total}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                  <Link to="/track-order" className="text-orange-500 text-sm hover:underline">Track</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
