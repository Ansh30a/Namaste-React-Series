import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) return <Shimmer/>

    const restaurantInfo = resInfo?.cards
    ?.map((c: any) => c?.card?.card?.info)
    ?.find((info: any) => info?.name);

    const regularCards = resInfo?.cards
    ?.find((c: any) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuItems = 
     regularCards
    ?.filter((c: any) => c?.card?.card?.itemCards)
    ?.flatMap((c: any) => c.card.card.itemCards);

    // console.log(regularCards);

    const categories = regularCards?.filter((c:any) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

    return (
    <div className="menu text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines?.join(', ')} - {costForTwoMessage}</p>
        <div>
            {/* categories accordion */}
            {categories?.map((category:any, index:number) => (
                // THIS IS A CONTROLLED COMPONENT
                <RestaurantCategory 
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index == showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    </div>
    );
};

export default RestaurantMenu;