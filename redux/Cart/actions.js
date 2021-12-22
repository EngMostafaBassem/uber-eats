import {ADD_ITEM_TO_CART,REMOVE_ITEM_TO_CART} from './action-types'
export const addItemToCart=(category,item)=>{
    return {type:ADD_ITEM_TO_CART,data:{category,item}}
}
export const removeItemToCart=(name)=>{
    return {type:REMOVE_ITEM_TO_CART,data:name}
}

