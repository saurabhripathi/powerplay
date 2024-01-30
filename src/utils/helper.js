export const calculateCartAmount = (cartItems)=>{
    let totalAmount = 0
    cartItems.forEach((item, index)=>{
        totalAmount = totalAmount +  item?.quantity*item?.price
    })
    return totalAmount.toFixed(2)

}