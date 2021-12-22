import {ADD_ITEM_TO_CART,REMOVE_ITEM_TO_CART} from './action-types'
const INITIAL_STATE={
    items:[],
    category:''
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
         case ADD_ITEM_TO_CART:
            const {category,item}=action.data
            return {...state,
                    items:[...state.items,{...item}],
                    category}
         
          case REMOVE_ITEM_TO_CART:
              return{
                  ...state,
                  items:state.items.filter(item=>item.title!=action.data)
              }


          default:
          return state
 }
}
 export default cartReducer

