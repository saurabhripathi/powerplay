import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice(
    {
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.cartItems.findIndex((item)=>{
                return item.id === action.payload.id
            })
            if(index<0){
                state.cartItems.push(action.payload)
            }else{
                const quantity = state.cartItems[index]['quantity']
                state.cartItems[index]['quantity'] = (+quantity) + (+action.payload.quantity)
            }
           
        }
    }

})

export default cartSlice.reducer
export const { addToCart, removeFromCart} = cartSlice.actions
