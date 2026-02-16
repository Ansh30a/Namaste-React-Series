import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";

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
            <button className="p-2 m-2 rounded-lg text-white bg-black"
               onClick={handleClearCart}>
                Clear Cart
            </button><ListItem items={cartItems} />
        </div>
        </div>
    )
};

export default Cart;