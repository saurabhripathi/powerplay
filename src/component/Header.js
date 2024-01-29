import { Link } from "react-router-dom";
import classes from './Header.module.scss'
import { useSelector } from "react-redux"

const Header = ()=>{
    const cartItems =  useSelector((store)=>{
        return store.cart.cartItems
    })
    return <> 
     <div className= {classes["nav-container"]}>
            <ul className = {classes["list-container"]}>
                <li >
                    <Link className = {classes["item"]} to = '/list'>Home</Link>
                </li>
                <li>
                    <Link  className = {classes["item"]} to = '/cart'>
                    Cart({cartItems?.length})
                    </Link>
                   
                </li>
            </ul>
        </div>
    </>
}

export default Header