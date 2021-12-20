import React from 'react'
import {View,Text,TouchableOpacity, ScrollView} from 'react-native'
import MenuItem from './MenuItem'
const MenuItemList=()=>{
    return(
        <View style={{flex:1,position:'relative',justifyContent:'center',alignItems:'center'}}>
          <ScrollView>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
           </ScrollView>
           <MenuItemListButton/>
       </View>
     
    )
}
const MenuItemListButton=()=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',position:'absolute',bottom:10}}>
            <TouchableOpacity style={{width:'90%'}}>
                <Text style={{width:'100%',backgroundColor:'black',color:'white',textAlign:'center',paddingVertical:15, borderRadius:15,fontSize:20}}> View Cart &nbsp;&nbsp;&nbsp; $33.00</Text>
             </TouchableOpacity>
           
        </View>
    )
}
export default MenuItemList
