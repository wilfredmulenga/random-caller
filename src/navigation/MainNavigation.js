import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'

const Stack = createStackNavigator()

function MainNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation