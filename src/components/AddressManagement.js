import { useState } from "react";
import { FaHome, FaBriefcase, FaMapMarkerAlt, FaPlus, FaTrash } from "react-icons/fa";

const defaultAddresses = [
  { id: 1, label: "Home", icon: FaHome, line: "42, 5th Cross, Koramangala", city: "Bangalore 560034", default: true },
  { id: 2, label: "Work", icon: FaBriefcase, line: "Tech Park, Outer Ring Road", city: "Bangalore 560103", default: false },
];

const AddressManagement = () => {
  const [addresses, setAddresses] = useState(defaultAddresses);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ label: "", line: "", city: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.label || !form.line || !form.city) return;
    setAddresses((prev) => [
      ...prev,
      { id: Date.now(), label: form.label, icon: FaMapMarkerAlt, line: form.line, city: form.city, default: false },
    ]);
    setForm({ label: "", line: "", city: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const setDefault = (id) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, default: a.id === id })));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Saved Addresses</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            <FaPlus size={14} /> Add New
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleAdd} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6 space-y-4">
            <input
              placeholder="Label (Home, Work...)"
              value={form.label}
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 rounded-lg"
            />
            <input
              placeholder="Street address"
              value={form.line}
              onChange={(e) => setForm({ ...form, line: e.target.value })}
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 rounded-lg"
            />
            <input
              placeholder="City & PIN"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 rounded-lg"
            />
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              Save Address
            </button>
          </form>
        )}

        <div className="space-y-4">
          {addresses.map(({ id, label, icon: Icon, line, city, default: isDefault }) => (
            <div key={id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex justify-between items-start">
              <div className="flex gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <Icon className="text-orange-500" />
                </div>
                <div>
                  <p className="font-bold dark:text-white">
                    {label}
                    {isDefault && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{line}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">{city}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {!isDefault && (
                  <button onClick={() => setDefault(id)} className="text-xs text-orange-500 hover:underline">
                    Set default
                  </button>
                )}
                <button onClick={() => handleDelete(id)} className="text-red-400 hover:text-red-600">
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressManagement;
