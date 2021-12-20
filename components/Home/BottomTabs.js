import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const BottomTabs=()=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:15}}>
           <Icon iconName='home-outline' text='Home'/>
           <Icon iconName='search-outline' text='Search'/>
           <Icon iconName='cart-outline' text='Grocery'/>
           <Icon iconName='receipt-outline' text='Orders'/>
           <Icon iconName='person-outline' text='Account'/>
        </View>
    )
}
const Icon=({iconName,text})=>{
    return(
      <TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <Ionicons name={iconName} size={25} />
            <Text>{text}</Text>
          </View>
      </TouchableOpacity>
      
    )

}
export default BottomTabs