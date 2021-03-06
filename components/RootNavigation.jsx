import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import RestaurantDetails from '../screens/RestaurentDetails'
import { Provider } from 'react-redux';
import store from '../redux/store';
const RootNavigation=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <Provider store={store}>
              <NavigationContainer>
                 <Stack.Navigator initialRouteName='Home'>
                   <Stack.Screen name="Home" component={Home} />
                   <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
                </Stack.Navigator>
              </NavigationContainer>
        </Provider>
     
    )
}
export default RootNavigation