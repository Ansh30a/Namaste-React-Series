import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";


const useRestaurantMenu = (resId?: string) => {
    const [resInfo, setResInfo] = useState<any>(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
    }
    return resInfo;

}; 
export default useRestaurantMenu;