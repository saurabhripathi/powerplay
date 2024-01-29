import { useNavigate } from 'react-router'
import classes from './ProductCard.module.scss'
import Rating from './shared/Rating'
import { useState } from "react"
import useHttp from '../hooks/useHttp'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../store/cartSlice'
const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const { title, rating, price, image, id, description, category } = item || {}
    const cardClicked = () => {
        navigate(`/products/${id}`)
    }
    return <>
        <div onClick={cardClicked} className={classes["card-container"]}>
            <div className={classes["header"]}>
                <img className={classes["product-image"]} alt="Product-Image" src={image}>
                </img>
            </div>
            <div className={classes["footer"]} >
                <div className={classes["title"]}>
                    {title}
                </div>
                <div className={classes["rating-wrapper"]}>
                    {rating && rating?.rate && <Rating rating={rating?.rate} />}
                    <span className={classes["count"]}>
                        {`(${rating?.count})`}
                    </span>
                </div>
                <div className={classes["price"]}>
                    <svg style={{ width: '7px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M308 96c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v44.7c0 6.6 5.4 12 12 12h85.3c27.3 0 48.3 10 61 27.3H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h158.8c-6.2 36.1-33 58.6-74.8 58.6H12c-6.6 0-12 5.4-12 12v53c0 3.3 1.4 6.5 3.9 8.8l165.1 152.4a12 12 0 0 0 8.1 3.2h82.6c10.9 0 16.2-13.4 8.1-20.8L116.9 319.9c76.5-2.3 131.1-53.4 138.3-127.9H308c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-58.7c-3.5-11.5-8.3-22.2-14.3-32H308z" />
                    </svg>
                    <div className={classes["value"]}> {price}</div>
                </div>
            </div>
        </div>
    </>

}

export const withAddToCart = (ProductCard) => {

    return ({ item }) => {
        let [quantityInput, setQuantityInput ]= useState("");
        const dispatch = useDispatch()
        const addToCartHandler = (e) => {
            dispatch(addToCart({ ...item, quantity: quantityInput }))
        }
        return <>
            <div className={classes["add-cart-container"]}>
                {item && <ProductCard item={item} />}
                <div className={classes["product-description"]}>
                    <span className={classes["label"]}>
                        Product Description
            </span>
                    <p className={classes["description"]}>
                        {item?.description}
                    </p>
                </div>
                <div className = {classes["add-cart"]}>
                    <button disabled = {quantityInput<=0}  className = {classes["add-cart-btn"]} onClick={addToCartHandler}>
                        Add To Cart
            </button>
                    <input onChange={(e) => {
                        setQuantityInput(e.target.value)
                    }} value={quantityInput} type="number" />
                </div>
            </div>
        </>
    }
}
export default ProductCard