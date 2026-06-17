import { FaStar } from "react-icons/fa";
import { RecommendedMenuImage } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

const ListItems = ({ items, iscart }) => {

    const itemCards = items;
    const [showMore, setShowMore] = useState(false);
    const limit = 100;

    const dispatch = useDispatch();

    const handleAddItem = (listItem) => {
        dispatch(addItem(listItem));
        toast.success(listItem?.card?.info?.name + " is successfully added on the Cart.")
    }

    const handleRemoveItem = (listItem) => {
        toast.success(listItem?.card?.info?.name + " is successfully removed on the Cart.")
        dispatch(removeItem(listItem));
    }

    return (
        <ul className="max-w-6xl mx-auto px-4">

            {itemCards.map((listItem, index) => {

                const description = listItem?.card?.info?.description || "";

                return (

                    <li key={index} className="border-b border-gray-200 py-6">

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                            {/* LEFT CONTENT */}
                            <div className="md:w-8/12">

                                <h2 className="font-bold text-lg">
                                    {listItem?.card?.info?.name}
                                </h2>

                                <h3 className="font-semibold text-gray-700">
                                    ₹ {listItem?.card?.info?.defaultPrice / 100 || listItem?.card?.info?.price / 100}
                                </h3>

                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <FaStar className="text-green-600 mr-1" />
                                    {listItem?.card?.info?.ratings?.aggregatedRating?.rating || 0}
                                    <span className="ml-1">
                                        ({listItem?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 0})
                                    </span>
                                </div>

                                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                    {showMore ? description : description.slice(0, limit) + "..."}
                                    {description.length > limit && (
                                        <span
                                            className="text-blue-600 cursor-pointer ml-1"
                                            onClick={() => setShowMore(!showMore)}
                                        >
                                            {showMore ? "Less" : "More"}
                                        </span>
                                    )}
                                </p>

                            </div>

                            {/* RIGHT IMAGE + BUTTON */}
                            <div className="md:w-4/12 flex flex-col items-center md:items-end gap-2">

                                {iscart == true ?

                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md shadow"
                                        onClick={() => handleRemoveItem(listItem)}
                                    >
                                        Remove
                                    </button>

                                    :

                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md shadow"
                                        onClick={() => handleAddItem(listItem)}
                                    >
                                        ADD +
                                    </button>
                                }

                                <img
                                    className="w-36 h-32 object-cover rounded-md"
                                    loading="lazy"
                                    alt={listItem?.card?.info?.name}
                                    src={RecommendedMenuImage + listItem?.card?.info?.imageId}
                                />

                            </div>

                        </div>

                    </li>

                )
            })}

        </ul>
    )
}

export default ListItems;