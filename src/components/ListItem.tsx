type props = {
    items: any;
}

const ListItem = ({items}: props) => {
    return (
        <div>
            {items?.map((item:any) => (
            <div 
               key = {item?.card?.info?.id}
               className="p-2 m-2 border-gray-300 border-b-2 text-left"
            >
            <div className="py-2">    
            <span>{item?.card?.info?.name}</span>
            <span> - ₹ {item?.card?.info?.price 
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>    
            ))}
        </div>    
    );
};  
export default ListItem;