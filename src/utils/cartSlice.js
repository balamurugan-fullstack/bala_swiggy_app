import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        items:[]
    },
    reducers: {

        //vannila redux not mutate
        // const seestate = [...state];
        // seestate.items.push(action.payload);
        // return seestate

        // redux toolkikt
        // we have mutate the state.

        addItem: (state, action) =>{
            // mutating the state -- immer BTS
            state.items.push(action.payload)
        },
        removeItem : (state, action) =>{
            state.items.pop();
        },
        clearCart : (state, action) => {
            state.items.length = 0; // state = [];
        }
    }
    
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;