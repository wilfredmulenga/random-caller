import * as Linking from 'expo-linking'
import { Alert } from 'react-native'
export const randomlySelectThreeItems = (array, num) => {
  const indexArr = []

  while (indexArr.length < num) {
    const index = Math.floor(Math.random() * Math.floor(array.length))
    if (!indexArr.includes(index)) indexArr.push(index)
  }

  const selected = indexArr.map((item, index) => array[item])
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
