import { useSelector } from "react-redux"
import ProductCard from '../component/ProductCard'
import classes from '../component/Cart.module.scss'
import useCartValueCalculate from "../hooks/useCartValueCalculate"
const Cart = () => {
    const cartItems = useSelector((store) => {
        return store.cart.cartItems
    })
    const { cartValue } = useCartValueCalculate(cartItems)
    return <>
        {cartItems?.length > 0 && <div className={classes["cart-container"]}>
            {<div className={classes["cart-heading"]}>
                <span>
                    Shopping Cart ({cartItems?.length})
                </span>
                <span>
                    Total Amount: <span className={classes["price"]}>
                        <svg style={{ width: '8px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M308 96c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v44.7c0 6.6 5.4 12 12 12h85.3c27.3 0 48.3 10 61 27.3H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h158.8c-6.2 36.1-33 58.6-74.8 58.6H12c-6.6 0-12 5.4-12 12v53c0 3.3 1.4 6.5 3.9 8.8l165.1 152.4a12 12 0 0 0 8.1 3.2h82.6c10.9 0 16.2-13.4 8.1-20.8L116.9 319.9c76.5-2.3 131.1-53.4 138.3-127.9H308c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-58.7c-3.5-11.5-8.3-22.2-14.3-32H308z" />
                        </svg>
                    </span>{cartValue}
                </span>
            </div>}
            {cartItems.length > 0 && cartItems.map((item) => {
                return <div className={classes["cart-items"]} key={item.id}>
                    <ProductCard item={item} />
                    <div className={classes["quantity"]}>
                        Quantity : <span>
                            {item.quantity}
                        </span>
                    </div>
                </div>
            })}

        </div>}
    </>
}

export default Cart