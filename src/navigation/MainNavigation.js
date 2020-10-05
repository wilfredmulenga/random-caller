import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import RandomContacts from '../components/RandomContacts'

const Stack = createStackNavigator()

export default function MainNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Random Caller" component={Home} />
        <Stack.Screen name="Contacts" component={RandomContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
