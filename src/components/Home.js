import React, { useState } from 'react'
import { withGlobalContext } from '../context/globalContext'
import { View, StyleSheet, Alert } from 'react-native'
import { Text, Input } from 'react-native-elements'
import * as Contacts from 'expo-contacts'
import Button from './Button'
import { main } from '../common/appStyles'
import { BLACK } from '../common/appColors'

function Home ({ navigation, global }) {
  const [randomNum, setRandomNum] = useState('3')
  const [errorMessage, setErrorMessage] = useState('')
  const [showIntro, setShowIntro] = useState(true)
  const { updateState, data: globalState } = global

  const handleGetStartedClick = async () => {
    const { status } = await Contacts.requestPermissionsAsync()
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync()
      if (data.length > 0) {
        updateState('contacts', data)
      }

      return setShowIntro(false)
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
        onPress: async () => handleGetStartedClick()
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
        <Text style={styles.subtitle}>I'm going to help you randomly select people from your contacts to call and re-connect with. </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="Get Started"
          animating={false}
          handleClick={() => handleGetStartedClick() }
        />
      </View>
    </>
  )

  const handleInputFieldChange = (text) => {
    const { contacts } = globalState
    if (isNaN(text)) {
      setRandomNum('')
      return setErrorMessage('Please enter a number')
    }
    const randomNum = Number(text)
    if (randomNum > contacts.length) {
      setRandomNum(text)
      return setErrorMessage('Cannot choose a number more than number of contacts')
    }

    setRandomNum(text)
    setErrorMessage('')
  }

  const onSubmit = () => {
    navigation.navigate('Contacts', { randomNum: Number(randomNum) })
  }
  return (
    <View style={styles.main}>
      {
        showIntro
          ? <IntroductionView />
          : (
            <>
              <Input
                label="Choose random number of people to call"
                labelStyle={styles.labelStyle}
                value={randomNum}
                onChangeText={(text) => handleInputFieldChange(text)}
                errorMessage={errorMessage}
              />
              <View style={styles.buttonWrapper}>
                <Button
                  text="Submit"
                  disabled={!!errorMessage || !randomNum}
                  animating={false}
                  handleClick={() => onSubmit() }
                />
              </View>
            </>
          )
      }
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
  },
  labelStyle: {
    color: BLACK,
    fontWeight: 'normal'
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
})

export default withGlobalContext(Home)
