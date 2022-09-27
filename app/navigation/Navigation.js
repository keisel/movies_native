import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
      <Stack.Navigator
      screenOptions={{
      
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown:false}}/>
        <Stack.Screen name="Details" component={DetailsScreen}   options={{ headerShown:false}}/>

      </Stack.Navigator>
  )
}

