import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Button from './Button'
import { main } from '../common/appStyles'

export default function Home ({ navigation }) {
  return (
    <View
      style={styles.main}>
      <Text style={styles.title} h4>Randomly select three people to call</Text>
      <Button
        text="Start"
        animating={false}
        handleClick={() => navigation.navigate('Contacts') }
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
