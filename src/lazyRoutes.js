import  {lazy} from 'react';
export const  LoginComponent = lazy(()=>{
    return import('./component/Login')
})

export const ProductListsComponent = lazy(()=>{
    return import('./component/ProductLists')
})

export const  ProductDetailsComponent = lazy(()=>{
    return import('./component/ProductDetails')
})

export const  CartComponent = lazy(()=>{
    return import('./component/Cart')
})

