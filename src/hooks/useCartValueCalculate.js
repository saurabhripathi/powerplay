import { useEffect, useState } from "react"
import {calculateCartAmount} from '../utils/helper'
const useCartValueCalculate = (cartItems)=>{
    const [cartValue, setCartValue] = useState(0)
    useEffect(()=>{
        const value = calculateCartAmount(cartItems)
        setCartValue(value)
    }, [cartItems])
    return {cartValue}
}
export default useCartValueCalculate