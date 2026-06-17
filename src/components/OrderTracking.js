import { FaMotorcycle, FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const steps = [
  { label: "Order Placed", time: "7:02 PM", done: true },
  { label: "Food is being prepared", time: "7:08 PM", done: true },
  { label: "Out for delivery", time: "7:22 PM", done: true },
  { label: "Delivered", time: "7:35 PM", done: false },
];

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Track Order</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Order #ORD-1042 · Meghana Foods</p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
              <FaMotorcycle className="text-orange-500 text-2xl" />
            </div>
            <div>
              <p className="font-bold text-lg dark:text-white">Arriving in 12 mins</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <FaMapMarkerAlt /> Koramangala, Bangalore
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  {step.done ? (
                    <FaCheckCircle className="text-green-500 text-xl" />
                  ) : (
                    <FaClock className="text-gray-300 text-xl" />
                  )}
                  {i < steps.length - 1 && (
                    <div className={`w-0.5 h-8 mt-1 ${step.done ? "bg-green-400" : "bg-gray-200 dark:bg-gray-600"}`} />
                  )}
                </div>
                <div>
                  <p className={`font-semibold ${step.done ? "text-gray-800 dark:text-white" : "text-gray-400"}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-400">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-400">
          Live tracking will connect to backend APIs in a future update.
        </p>
      </div>
    </div>
  );
};

export default OrderTracking;
