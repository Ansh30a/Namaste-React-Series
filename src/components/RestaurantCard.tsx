import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

type RestaurantCardProps = {
  resData: {
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
}

const RestaurantCard = (props: RestaurantCardProps) => {
  const {info} = props.resData;
  const {id} = props.resData.info;

  return (
    <Link to={`/restaurants/${id}`} className="restaurant-card-link">
        <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL +
            info.cloudinaryImageId}/>
        <h4>{info.name}</h4>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.avgRating}⭐</h4>
        <h4>{info.costForTwo}</h4>
        <h4>{info.sla.deliveryTime} mins</h4>
        </div>
    </Link>
  );
};

export default RestaurantCard;