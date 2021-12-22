import React, { useState } from 'react'
import {View,TouchableOpacity,Text,Modal,StyleSheet, ScrollView} from 'react-native'
import CartListItem from './CartListItem'
import {useSelector} from 'react-redux'
const ViewChart=()=>{
  const [modalVisible,setModalVisible]=useState(false)
  const state = useSelector(state => state.cartReducer)

    return(
       <>
         <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
          animationType='slide'
          >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                       <Text style={{fontWeight:'bold',textAlign:'center' ,fontSize:20}}>FIG Restaurent</Text>      
                       <CartListItem item='Tandorii Chickern' price='$19.00'/>
                       <CartListItem item='Tandorii Chickern' price='$19.00'/>
                       <CartListItem item='Tandorii Chickern' price='$19.00'/>
                       <CartListItem item='Tandorii Chickern' price='$19.00'/>
                       <CartListItem item='Tandorii Chickern' price='$19.00'/>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
                         <Text style={{fontWeight:'bold',fontSize:20}}>Sub Total</Text>
                         <Text style={{fontSize:18}}>$33</Text>
                       </View>
                       <View style={{width:250,alignSelf:'center'}}>
                           <TouchableOpacity onPress={()=>setModalVisible(false)}>
                              <Text style={{backgroundColor:'black',color:'white',textAlign:'center', borderRadius:30,paddingVertical:15,fontSize:20}}> Checkout  $33.00</Text>
                          </TouchableOpacity>  
                      </View>
                    </ScrollView>
                   
                </View>
              
              </View>
             
          </Modal>
          <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center',position:'absolute',bottom:10}}>
              <TouchableOpacity style={{width:'90%'}} onPress={()=>setModalVisible(true)}>
               <Text style={{width:'100%',backgroundColor:'black',color:'white',textAlign:'center',paddingVertical:15, borderRadius:30,fontSize:20}}> View Cart $33.00</Text>
              </TouchableOpacity>  
          </View>
       </>
    )
}



const styles=StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    modalContent:{
        height: 400,
        width: '100%',
        backgroundColor:'white',
        justifyContent:'flex-start',
        padding:15
    }
})
export default ViewChart