import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import ListItems from './ListItems';

const RestaurantCategory = ({data, showItem, setShowIndex}) => {
  
    const CatData = data;
    
    // const [showItem, setShowTime] = useState(false);

    const handleClickEvent = (() =>{
        console.log(showItem,setShowIndex,"clicked");
        setShowIndex();
    })
    console.log(showItem,"showItem", setShowIndex);
    
    return (
        <div className="shadow-lg  mx-auto my-4 dark:text-white">
            <div className="text-1xl font-bold  flex justify-between rounded-sm mb-2 p-4 cursor-pointer bg-gray-100  dark:bg-gray-800" onClick={handleClickEvent}>
                <span>{CatData.title} ({CatData.itemCards.length})</span>
                <span className="my-2">{showItem ? <FaChevronUp /> : < FaChevronDown />}</span>
            </div>
             {showItem && <ListItems items={CatData.itemCards} iscart={false}/>}
        </div>
    )
};

export default RestaurantCategory;