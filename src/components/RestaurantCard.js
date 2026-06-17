import { Logo } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info; //chaining

    return(
        <div className="restCard1 w-[300px] break-words bg-blue-50 dark:bg-gray-800 dark:text-white rounded-lg flex flex-col h-full transform hover:scale-110 transition duration-300">
            <img
                className="resLogo w-[100%] h-[300px] object-cover"
                loading="lazy"
                alt={name}
                src={Logo + cloudinaryImageId}
            />
            
            <h2 className="font-bold text-lg m-5">{name}</h2>
            <div className="m-5 text-grey">
                <h4 className="mb-2">{cuisines.join(", ")}</h4>
                <h4 className="mb-2">{avgRating} stars</h4>
                <h4 className="mb-2">{costForTwo}</h4>
                <h4 className="mb-2">{sla.deliveryTime} minutes</h4>
            </div>
           
        </div>
    );
};

export const withPromoted = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute text-white bg-black dark:bg-gray-700 z-10 mt-2 ml-3 px-4 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;