import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import * as Contacts from 'expo-contacts'
import { Text } from 'react-native-elements'
import Button from './Button'
import { main } from '../common/appStyles'

export default function App () {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync()

        if (data.length > 0) {
          const contact = data[0]
          console.log(contact.name, contact.phoneNumbers[0].number)
        }
      }
    })()
  }, [])

  return (
    <View
      style={styles.main}>
      <Text style={styles.title} h4>Randomly select three people to call</Text>
      <Button
        text="Start"
        animating={false}
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
  }
})
