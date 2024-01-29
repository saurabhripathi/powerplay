
import useHttp from "../hooks/useHttp"
import ProductCard from './ProductCard'
import classes from '../component/ProductLists.module.scss'
import { BASE_URL} from '../utils/constant'
import Shimmer from '../component/shared/Shimmer'
const ProductsLists = ()=>{
    const {data: productLists, isLoading, error, sendRequest} = useHttp(`${BASE_URL.product}`)
    if(isLoading){
return <Shimmer />
    }
    return <>
    <div className = {classes["count"]}> {`Products(${productLists?.length || 0})`}</div>
    <div className = {classes["product-list-container"]}>
        {productLists?.length && productLists?.map((item, index)=>{
            return <div key = {`${index}-${item?.id}`} className = {classes["card-wrapper"]}>
            <ProductCard  item = {item}  />
            </div>
        })}
    </div>
     </>
}

export default ProductsLists