import React from 'react'
import { View,Text,TextInput,StyleSheet} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchBar=({handleSearchTerm})=>{
 return(
     <View style={{marginTop:20,flexDirection:'row'}}>
        <TextInput placeholder='Type location to search' style={styles.searchInput} onChangeText={handleSearchTerm}/>
        <Ionicons name='location-outline' size={20} style={{position:'absolute',top:20,left:15}}/>
        <View  style={{flexDirection:'row',position:'absolute',backgroundColor:'white',padding:5,borderRadius:30, top:15,right:15}}>
        <Ionicons name='timer-outline'  size={20} style={{marginRight:4}}/>
        <Text>Search</Text>
        </View>
     
       
     </View>
 )
}
const styles=StyleSheet.create({
  searchInput:{
    width: '100%',
    backgroundColor:'#F0F0F0',
    height: 60,
    paddingLeft:35,
    borderRadius:30,
    color: 'black'
  }
})
export default SearchBar