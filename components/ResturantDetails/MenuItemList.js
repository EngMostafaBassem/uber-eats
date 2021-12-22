import React from 'react'
import {View,Text,TouchableOpacity, ScrollView} from 'react-native'
import MenuItem from './MenuItem'
import ViewCart from './ViewCart'
const MenuItemList=({foods,category})=>{

    return(
        <View style={{flex:1,position:'relative',justifyContent:'center',alignItems:'center'}}>
          <ScrollView style={{marginBottom:60}}>
                 {
                    foods.map((item,index)=><MenuItem key={index} food={item} category={category}/>)
                 }
              
           </ScrollView>
           <ViewCart/>
       </View>
     
    )
}

export default MenuItemList
