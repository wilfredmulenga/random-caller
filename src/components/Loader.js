import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { main } from '../common/appStyles'
import { BASE_GREEN, LIGHT_GREY } from '../common/appColors'

const Loader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size='large' color={BASE_GREEN} animating={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    ...main,
    backgroundColor: LIGHT_GREY
  }
})

export default Loader
