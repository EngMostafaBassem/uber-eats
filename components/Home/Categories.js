import React from 'react'
import { ScrollView,Image,View,Text } from 'react-native'
const Categories=()=>{
    const categories=[
        {
            image:require('../../assets/images/bread.png'),
            text:'Pick-up'
        },
        {
            image:require('../../assets/images/desserts.png'),
            text:'Soft Drinks'
        },
        {
            image:require('../../assets/images/fast-food.png'),
            text:'Bakery Items'
        },
        {
            image:require('../../assets/images/shopping-bag.png'),
            text:'Fast Food'
        }
    ]


    return( 
        <View style={{backgroundColor:'#fff',marginTop:5,paddingVertical:10,paddingLeft:10}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >      
            {
            categories.map((item,index)=>(
                <View key={index} style={{alignItems:'center',marginLeft:12}}>
                  <Image source={item.image} resizeMode='contain'  style={{width: 50, height: 50}}/>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>{item.text}</Text>
                 </View>
             ))
            }
           </ScrollView>
           </View>

    )
}
export default Categories