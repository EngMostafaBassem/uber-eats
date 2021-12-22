import React, { useState,useRef,useCallback, useEffect } from 'react'
import {View,Text, Image, TouchableOpacity} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Divider}from 'react-native-elements'
import {addItemToCart,removeItemToCart} from '../../redux/Cart/actions'
import {useDispatch,useSelector} from 'react-redux'
const MenuItem=({food:{title,description,price,image},category})=>{
    const [checked,setChecked]=useState(false)
    const cartData = useSelector(state => state.cartReducer)
    console.log('cart data',cartData)
    const dispatch = useDispatch()
    let refCheck = useRef(null)
    const addItemToCartPress=()=>{
      if(checked){
        dispatch(removeItemToCart(title))
      }
      else{
        dispatch(addItemToCart(category,{title,description,price,image}))
      }
     setChecked(!checked)
    }
   useEffect(()=>{
      setChecked(Boolean(cartData.items.find(item=>item.title===title)))
   },[title])

    return(
        <>
        <TouchableOpacity onPress={()=>refCheck?.onPress()}>
           <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin:15}}>
              <BouncyCheckbox
               ref={(ref) =>(refCheck = ref)}
               size={25}
               fillColor="green"
               isChecked={Boolean(cartData.items.find(item=>item.title===title))}
               onPress={addItemToCartPress}
             />
            <MenuItemTextSection title={title} description={description} price={price}/>
            <MenuItemImageSection image={image}/>
          </View>
        </TouchableOpacity>
       
       <Divider width={1} orientation='vertical'/>
      </> 
    )
  
}
const MenuItemImageSection=({image})=>{
    return(
        <View>
            <Image
             borderRadius={10}
             style={{width:100,height:100}}
             source={{uri:image}}
            />
        </View>
    )
}
const MenuItemTextSection=({title,description,price})=>{
    return(
        <View style={{width:240,paddingHorizontal:5}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}
export default MenuItem