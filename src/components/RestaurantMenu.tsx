import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

    const { resId } = useParams();
    
   const resInfo = useRestaurantMenu(resId)

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


    const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

    return  (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines?.join(', ')}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
         {menuItems?.map((item: any, index:number) => (
         <li key={index}>
         {item.card.info.name} – {'Rs.'}
         {(item.card.info.price || item.card.info.defaultPrice) / 100}
         </li>
          ))}
        </ul>
    </div>
    );
};

export default RestaurantMenu;