import * as Linking from 'expo-linking'
import { Alert } from 'react-native'
export const randomlySelectThreeItems = (array, num) => {
  // Shuffle array
  const shuffled = array.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, num)
  return selected
}

export const handleLinkPress = (url) => {
  Linking.canOpenURL(url)
    .then((res) => {
      if (res) {
        Linking.openURL(url)
      } else {
        return Alert.alert('Can\'t open link', 'Please contact support.')
      }
    })
}
