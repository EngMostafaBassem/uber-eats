import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Divider}from 'react-native-elements'
const CartListItem=({item,price})=>{
    return(
        <View style={{marginBottom:10}}>
            <View style={styles.cartListContainer}>
              <Text style={styles.cartItemStyle}>{item}</Text>
              <Text style={styles.cartPriceStyle}>{price}</Text>
           </View>
        <Divider width={1} />
        </View>
    
    )
}

const styles=StyleSheet.create({
    cartListContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:15
    },
    cartItemStyle:{
        fontWeight:'bold',
        fontSize:20
    },
    cartPriceStyle:{
        fontSize:16,
        color: 'gray'
    }
})

export default CartListItem