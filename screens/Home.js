import React, { useState,useEffect } from 'react'
import { Text, View,SafeAreaView,ScrollView } from 'react-native';
import BottomTabs from '../components/Home/BottomTabs';
import Categories from '../components/Home/Categories';
import HeaderTabs from '../components/Home/HeaderTabs';
import RestaurentItems from '../components/Home/RestaurentItems';
import SearchBar from '../components/Home/Searchbar';

const API_KEY='zGxrR3Y0HZXvZsPrzh_SVV-4QxoznKw1aZ6_l8uwNdaxxTAKUdVFpl8x27kUjpNmasvbplI3hAJWiiI3EfiXd-lDqVU5bA_ef9ylzO_0Jry-yzjJDRsc5dZ2rHe_YXYx'
const Home=()=>{
  const [restaurentData,setRestaurentData]=useState([])
  const [searhTerm,setSearchTerm]=useState('Hollywood')
  const [activtyTab,setActivityTab]=useState('delivery')
  const handleSearchTerm=(text)=> setSearchTerm(text||'Hollywood')
  const handleActivityTab=(text)=>setActivityTab(text)
  const fetchRestaturentData=()=>{
    const YELP_URL=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searhTerm}`
    const config = {
      headers: {
          Authorization: 'Bearer ' + API_KEY,
          mode:'no-cors'
      },
  };
   return  fetch(YELP_URL,config)
   .then((res)=>res.json()).then((json)=>setRestaurentData(json.businesses.filter(item=>item.transactions.includes(activtyTab))))
 
  }
  useEffect(() => {
     fetchRestaturentData()
  }, [searhTerm,activtyTab])
    return(   
          <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
              <View style={{backgroundColor:'white',padding:15}}>
                <HeaderTabs activtyTab={activtyTab} handleActivityTab={handleActivityTab} />
                <SearchBar handleSearchTerm={handleSearchTerm}/> 
              </View>  
              <ScrollView>
               <Categories />
               <RestaurentItems restaurentData={restaurentData}/>
              </ScrollView>
             <BottomTabs/>      
          </SafeAreaView>
    )

}
export default Home