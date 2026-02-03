import RestaurantCard from "./RestaurantCard";
import RestaurantData from "../utils/restaurantData.json";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

type Restaurant = {
  info: {
    id: string;
    name: string;
    cuisines: string[];
    avgRating: number;
    cloudinaryImageId: string;
    costForTwo: string;
    sla: {
      deliveryTime: number;
    }
  }
}

const Body = () => {
    //Local State Variable -> super power variable
    // <Restaurant[]> => iska mtlb hai ki jo bhi value aayegi vo Restaurant type ke objects ka ARRAY hoga
    // ([]) => intial value mtlb starting mei koi restaurant nhi hai
    const [listOfRestaurants, setlistOfRestaurants] = useState<Restaurant[]>([]);
2
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4779617&lng=77.3288359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
                );

                const json = await data.json();
                console.log(json);
                // optional chaining
                const restaurants =
                    json?.data?.cards[4]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants || [];
                setlistOfRestaurants(restaurants);
             
                }
                catch (err) {
                  console.log(err);
                 setlistOfRestaurants(RestaurantData.resList);
            
                }
        };
        fetchData();
    }, []);

    if(listOfRestaurants.length === 0) {
     return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4,
                        );
                        setlistOfRestaurants(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
