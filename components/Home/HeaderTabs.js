import React, { useState } from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
const HeaderTabs=({activtyTab,handleActivityTab})=>{
  
    return(
        <View style={styles.navContainer}>
            <HeaderButton text="Delivery" activtyTab={activtyTab}  handleTabChange={()=>handleActivityTab('delivery')}/>
            <HeaderButton text="Pickup" activtyTab={activtyTab} handleTabChange={()=>handleActivityTab('pickup')}/> 
     
        </View>
    )

}
const HeaderButton=({text,activtyTab,handleTabChange})=>(
    <TouchableOpacity style={[styles.headerButton,{backgroundColor:activtyTab==text.toLowerCase()?'black':'white'}]} onPress={handleTabChange}>
      <Text style={[styles.headerText,{color:activtyTab==text.toLowerCase()?'white':'black'}]}>{text}</Text>
    </TouchableOpacity>
)
const styles=StyleSheet.create({
    navContainer:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        marginVertical:35,
    },
    headerButton:{
        marginHorizontal:3, 
        paddingVertical:5,
        paddingHorizontal:16,
        borderRadius:30
    },
    headerText:{
        fontSize:18,   
        fontWeight:'bold'
    }
   

})
export default HeaderTabs

