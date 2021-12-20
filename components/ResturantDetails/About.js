import React from 'react'
import {Text,View,Image} from 'react-native'

const About=()=>{
    return(
        <View style={{marginBottom:10}}>
           <AboutImageSection/>      
           <AboutTextSection/>
        </View>
    )

}
const AboutImageSection=()=>{
    return(
        <View>
            <Image 
             source={{uri:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'}}
             style={{width:'100%',height:200}}
            />
          
        </View>
    )
}

const AboutTextSection=()=>{
    const desc='Thai.Comfort Food .$$. 4 stars (2912+) '
    return(
        <View style={{paddingHorizontal:15,justifyContent:'center'}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>FarmHouse Kitchen Thai Cuisine </Text>
            <Text style={{fontSize:16}}>{desc}</Text>
        </View>
    )
}
export default About