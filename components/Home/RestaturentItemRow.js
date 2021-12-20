import React from 'react'
import {Image,TouchableOpacity,View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Rating } from 'react-native-elements';
const RestaurentItemRow=({restaurant:{name,image_url,rating}})=>{
    return(
        <TouchableOpacity> 
          <View style={{backgroundColor:'white',padding:15,justifyContent:'center'}}>
             <CardImage image_url={image_url}/>
             <CardText  name={name} rating={rating}/>    
          </View>
       </TouchableOpacity>
    )
}

const CardImage=({image_url})=>{
    return(
        <View >
            <Image 
             source={ image_url?{uri:image_url}:null} 
             style={{width:'100%',height:250}}    
            />
            <TouchableOpacity style={{position:'absolute',top:20,right:20}}>
               <Ionicons name='heart-outline' size={24} color='white'  />
            </TouchableOpacity>
        </View>
    )
}

const CardText=({name,rating})=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <View>
                <Text style={{fontWeight:'bold',fontSize:16}}>{name} </Text>
                <Text style={{fontSize:14,color:'gray'}}>35-45 min </Text>
            </View>       
            <Rating
            type="star"
            fractions={1}
            startingValue={rating}
            readonly
            imageSize={20}
          
          />
            
        </View>
    )
}

export default RestaurentItemRow