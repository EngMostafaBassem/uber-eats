import React from 'react'
import {View,Text} from 'react-native'
import RestaurentItemRow from './RestaturentItemRow'
const RestaurentItems=({restaurentData})=>{
    return(
        <View>
            {
             restaurentData.map((item,index)=> <RestaurentItemRow key={index} restaurant={item}/>)
            } 
        </View>
    )

}
export default RestaurentItems