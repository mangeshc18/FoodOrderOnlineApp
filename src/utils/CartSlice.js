import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        additems: (state, action) => {
            state.items.push(action.payload)
        },
        removeitems: (state) => {
            state.items.pop()
        },

        clearitems: (state) => {
            state.items.length = 0;
        }
    }
});
export const {additems, removeitems, clearitems} = CartSlice.actions
export default CartSlice.reducer;
