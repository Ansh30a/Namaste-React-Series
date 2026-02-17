import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store:any) => store.cart.items)
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
        
        <div className="w-6/12 m-auto">      
            <button className="p-2 m-2 rounded-md text-white bg-orange-600"
               onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length == 0 && (
                <h1 className="font-mono m-7">Your cart is empty<br/>
                You can go to the home page to view more restaurants❤️
                </h1>
            )} 
            <button className="p-2 -my-4 rounded-md text-white bg-orange-600 cursor-pointer">
                <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
            </button>
            
            <ListItem items={cartItems} />
        </div>
        </div>
    )
};
export default Cart;