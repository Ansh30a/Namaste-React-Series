import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // These items are cart-items & initially it's empty
        items: [],
    },
    // Reducer will always take 2 arguments: state & action (vvimp)
    //Reducers are basically objects that define what type of actions they can take.
    // action.payload is the daata that we send during dispatch (action).
    // state.items means the items array inside the state, and action.payload is the data that gets added to this array.

    reducers: {
        addItem: (state:any, action:any) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state:any, action:any) => {
            state.items.pop();
        },
        clearCart: (state:any, action:any) => {
            state.items.length = 0; // []
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;