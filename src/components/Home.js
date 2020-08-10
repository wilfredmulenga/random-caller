import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Text, Input } from 'react-native-elements'
import * as Contacts from 'expo-contacts'
import Button from './Button'
import { main } from '../common/appStyles'

export default function Home ({ navigation }) {
  const [randomNum, setRandomNum] = useState('3')
  const [errorMessage, setErrorMessage] = useState('')

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

  const IntroductionView = () => (
    <>
      <View>
        <Text style={styles.title} h4>Hi 👋</Text>
        <Text style={styles.subtitle}>I'm going to help you randomly select three people from your contacts to call and re-connect with. </Text>
      </View>
      <Button
        text="Get Started"
        animating={false}
        handleClick={() => handleClick() }
      />
    </>
  )

  const handleInputFieldChange = (text) => {
    if (isNaN(text)) {
      setRandomNum('')
      return setErrorMessage('Please enter a number')
    }

    setRandomNum(text)
    setErrorMessage('')
  }

  return (
    <View style={styles.main}>
      <Input
        label="Choose random number of people to call"
        value={randomNum}
        onChangeText={(text) => handleInputFieldChange(text)}
        errorMessage={errorMessage}
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
