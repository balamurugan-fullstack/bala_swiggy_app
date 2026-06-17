import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerUi from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useDebounce from "../utils/useDebounce";
import UserContext from "../utils/userContext";

const getRestaurantsFromApi = (json) => {
  const cards = json?.data?.cards;
  if (!Array.isArray(cards)) return [];

  for (let card of cards) {
    const cardData = card?.card?.card;
    if (Array.isArray(cardData?.gridElements?.infoWithStyle?.restaurants)) {
      return cardData.gridElements.infoWithStyle.restaurants;
    }
    if (Array.isArray(cardData?.restaurants)) {
      return cardData.restaurants;
    }
  }
  return [];
};

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const debouncedSearch = useDebounce(searchText, 350);
  const RestaurantWithPromoted = withPromoted(RestaurantCard);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setFilteredRestaurants(listOfRestro);
      return;
    }
    const query = debouncedSearch.toLowerCase();
    setFilteredRestaurants(
      listOfRestro.filter((res) => res.info.name.toLowerCase().includes(query))
    );
  }, [debouncedSearch, listOfRestro]);

  const fetchRestaurants = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const url =
        "https://swiggy-proxy-9t8g.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999";
      const res = await fetch(url);
      const json = await res.json();
      const newRestaurants = getRestaurantsFromApi(json);
      if (newRestaurants.length > 0) {
        setListOfRestro(newRestaurants);
        setFilteredRestaurants(newRestaurants);
      }
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (loading && listOfRestro.length === 0) {
    return <ShimmerUi />;
  }

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-xl font-bold">
          Looks like you're offline!! Please check your internet connection
        </h1>
      </div>
    );
  }

  return (
    <div className="body dark:text-white">
      <div className="filter max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="search flex items-center gap-2 mt-4">
          <input
            type="text"
            className="searchInput border border-black p-2 rounded-md w-44 sm:w-64 dark:text-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          {searchText && (
            <button
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md text-sm"
              onClick={() => setSearchText("")}
            >
              Clear
            </button>
          )}
        </div>

        <button
          className="top_rated_btn px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white dark:text-black rounded-md mt-4"
          onClick={() => {
            const topRated = listOfRestro.filter((res) => Number(res.info.avgRating) > 4);
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated
        </button>

        <div className="mt-4">
          <input
            type="text"
            className="userInput border border-black p-2 rounded-md w-40 sm:w-56 dark:text-black"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>

      <div className="resContainer max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length === 0 && !loading ? (
          <div className="empty-space flex flex-col items-center text-center w-full mt-10 col-span-full">
            <h1 className="font-bold text-2xl">Oops! No restaurants found.</h1>
            <p className="text-gray-500 mt-2">We couldn't find any food options for this area.</p>
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
              className="restCard"
            >
              {restaurant.info.promoted ? (
                <RestaurantWithPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
