import { useNavigate, useParams } from "react-router"
import useHttp from "../hooks/useHttp"
import { BASE_URL } from '../utils/constant'
import { withAddToCart } from '../component/ProductCard'
import ProductCard from '../component/ProductCard'
import { useEffect, useState } from "react"
import classes from '../component/ProductDetails.module.scss'
import { card } from '../component/shared/Shimmer'
const ProductDetails = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()
    const { data: productDetails, isLoading, error, sendRequest } = useHttp(`${BASE_URL.product}/${id}`)
    useEffect(() => {
        setProduct(productDetails)
    }, [productDetails])
    const WithAddToCart = withAddToCart(ProductCard)
    return <>
        <div className={classes["product-detail-container"]}>
            {isLoading ? <div className={classes["product-detail"]} >
            {card}
        </div> : <div className={classes["product-detail"]}>
                {productDetails && <WithAddToCart item={product} />}
            </div>}
        </div>
    </>
}

export default ProductDetails