import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { PURE_WHITE, BASE_GREEN, DISABLED } from '../common/appColors'

const Button = ({
  text = 'button text here',
  animating = true,
  handleClick = () => {},
  extraStyles = [],
  disabled = false
}) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0}
      onPress={ disabled ? null : () => handleClick()}
      style={[styles.button, { backgroundColor: disabled ? DISABLED : BASE_GREEN }, extraStyles]}>
      {
        animating ? <ActivityIndicator size='small' color={PURE_WHITE} animating={true}/>
          : <Text style={styles.text}>{text}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  text: {
    color: PURE_WHITE,
    textTransform: 'uppercase'
  }
})

export default Button
