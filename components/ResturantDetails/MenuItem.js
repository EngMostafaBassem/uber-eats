import React from 'react'
import {View,Text, Image} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
const MenuItem=()=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin:15}}>
             <BouncyCheckbox
              size={25}
              fillColor="green"  
            />
          <MenuItemTextSection/>
          <MenuItemImageSection/>
       </View>
    )
  
}
const MenuItemImageSection=()=>{
    return(
        <View>
            <Image
            borderRadius={10}
             style={{width:100,height:100}}
          
             source={{uri:'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591'}}
            />
        </View>
    )
}
const MenuItemTextSection=()=>{
    return(
        <View style={{width:240}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Tandorii Chicken</Text>
            <Text>Amazing Inidan chicken with tenderlion chicken off the sizzle</Text>
            <Text>$19.20</Text>
        </View>
    )
}
export default MenuItem