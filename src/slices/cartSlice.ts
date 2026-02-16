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
            // mutating the state here -> means to change it directly
            state.items.push(action.payload);
        },
        removeItem: (state:any, action: PayloadAction<CartItem>) => {
            state.items.pop();
        },
        clearCart: (state:any, action: PayloadAction<CartItem>) => {
            state.items = []
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;