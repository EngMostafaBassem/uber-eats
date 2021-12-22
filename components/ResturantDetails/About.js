import React from 'react'
import {Text,View,Image} from 'react-native'

const About=({resturant:{image_url,name,rating}})=>{
    return(
        <View style={{marginBottom:10}}>
           <AboutImageSection image_url={image_url} />      
           <AboutTextSection name={name} rating={rating}/>
        </View>
    )

}
const AboutImageSection=({image_url})=>{
    return(
        <View>
            <Image 
             source={{uri:image_url}}
             style={{width:'100%',height:200}}
            />
          
        </View>
    )
}

const AboutTextSection=({name,rating})=>{
    const desc=`Thai.Comfort Food .$$. ${rating} stars (2912+) `
    return(
        <View style={{paddingHorizontal:15,justifyContent:'center'}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>{name} </Text>
            <Text style={{fontSize:16}}>{desc}</Text>
        </View>
    )
}
export default About