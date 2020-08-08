import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Text } from 'react-native-elements'
import * as Contacts from 'expo-contacts'
import Button from './Button'
import { main } from '../common/appStyles'

export default function Home ({ navigation }) {
  const handleClick = async () => {
    const { status } = await Contacts.requestPermissionsAsync()
    if (status === 'granted') {
      return navigation.navigate('Contacts')
    }
    if (status === 'denied') {
      contactPermissionsDeniedAlert()
    }
  }

  const contactPermissionsDeniedAlert = () => {
    const title = 'Contact permissions required'
    const subtitle = 'This app requires contact persmisions to work. Note, we do not store any of your contacts. 😇'
    const btn = [
      {
        text: 'Ask me again',
        onPress: async () => handleClick()
      }
    ]
    return (

      Alert.alert(title, subtitle, btn)
    )
  }

  return (
    <View
      style={styles.main}>
      <View>
        <Text style={styles.title} h4>Hi 👋</Text>
        <Text style={styles.subtitle}>I'm going to help you randomly select three people from your contacts to call and re-connect with. </Text>
      </View>
      <Button
        text="Get Started"
        animating={false}
        handleClick={() => handleClick() }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    ...main,
    justifyContent: 'space-around'
  },
  title: {
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  }
})
