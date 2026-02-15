import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    // Reducer will always take 2 arguments: state & action
    reducers: {
        addItem: (state:any, action:any) => {
            state.items.push(action.payload);
        },
        removeItem: (state:any, action:any) => {
            state.items.pop();
        },
        clearCart: (state:any, action:any) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;