import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShimmerMenuUi } from "./Shimmer";
import { FaStar } from "react-icons/fa";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
    const { resID } = useParams();
    const resInfo = useRestroMenu(resID);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <ShimmerMenuUi />;

    const info = resInfo?.cards?.[2]?.card?.card?.info;
    if (!info) {
        return (
            <div className="text-center mt-20 dark:text-white">
                <h2 className="text-2xl font-bold mb-4">Unable to load menu</h2>
                <Link to="/" className="text-orange-500 hover:underline">Back to Home</Link>
            </div>
        );
    }

    const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString, sla, areaName } = info;
    const newMenu = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR;
    const categories = newMenu?.cards?.filter(
        (c) => c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    return (
        <div className="menu max-w-[800px] m-auto p-[20px] dark:text-white">
            <div className="breadcrumb mb-10">
                <Link to="/">Home</Link> &gt;{" "}
                <Link to="/">Restaurants</Link> &gt;{" "}
                <span>{name}</span>
            </div>

            <h1 className="menuTitle font-bold text-5xl mb-8">{name}</h1>
            <hr className="text-[gainsboro] mb-7" />
            <div className="menuDetails border border-[rgba(2, 6, 12, 0.15)] rounded-3xl shadow-xl p-10 mb-7">
                <h3 className="RatingCount flex text-green-700 text-lg mb-4">
                    <FaStar className="text-[#0c9e0c] mt-1 mr-2" />
                    {avgRating} ({totalRatingsString}) - <b>{costForTwoMessage}</b>
                </h3>
                <h4 className="cuisinesName mb-4">{cuisines?.join(",")}</h4>
                <h4 className="mb-4">Outlet - <b className="text-gray-400">{areaName}</b></h4>
                <h4 className="mb-4">{sla?.slaString}</h4>
            </div>
            <hr className="text-[gainsboro] mb-7" />

            {categories.length === 0 ? (
                <p className="text-center text-gray-500">No menu items available.</p>
            ) : (
                categories.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title || index}
                        data={category?.card?.card}
                        showItem={index === showIndex}
                        setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                    />
                ))
            )}
        </div>
    );
};

export default RestaurantsMenu;
