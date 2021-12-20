import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import About from '../components/ResturantDetails/About'
import { Divider } from 'react-native-elements';
import MenuItemList from '../components/ResturantDetails/MenuItemList';

const RestaurentDetails=()=>{
    return(
        <View style={{flex:1}}>
           <About/>
           <Divider width={1.5} />       
             <MenuItemList/>  
        </View>
    )
  

}
export default RestaurentDetails
