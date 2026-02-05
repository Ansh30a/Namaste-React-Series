import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState<any>(null);
 
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.60075&lng=77.08150&&submitAction=ENTER&restaurantId=72605");
        const json = await data.json();

        console.log(json);
        setResInfo(json?.data);

    };

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
                {menuItems?.map((item: any) => {
                    <li key={item.card.info.id}>
                    {item.card.info.name} – ₹
                    {(item.card.info.price || item.card.info.defaultPrice) / 100} 
                    </li>
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;