import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
 
type CartItem = string;

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}
 
const cartSlice = createSlice({
    name: 'cart',
    initialState,

    // Reducer will always take 2 arguments: state & action (vvimp)
    //Reducers are basically objects that define what type of actions they can take.
    // action.payload is the daata that we send during dispatch (action).
    // state.items means the items array inside the state, and action.payload is the data that gets added to this array.

    reducers: {
        addItem: (state:any, action: PayloadAction<CartItem>) => {
            // REDUX TOOLKIT uses "Immer" BEHIND THE SCENES
            // WE HAVE TO MUTATE THE STATE
            state.items.push(action.payload);
        },
        // removeItem and clearCart don’t need an action payload because they can complete their work using only the current state, without any extra data from outside.
        removeItem: (state:any) => {
            state.items.pop();
        },
        // originalState = {items: ["pizza"]}
        clearCart: (state:any) => {
            // RTK - either mutate the existing state or return a new state
            // state.items.length = 0; // originalState = []

            return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;