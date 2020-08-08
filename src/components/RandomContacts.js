import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import * as Contacts from 'expo-contacts'
import { ListItem, Card } from 'react-native-elements'
import { randomlySelectThreeItems } from '../common/helpers'
import { main } from '../common/appStyles'
import { LIGHT_GREY } from '../common/appColors'

const RandomContacts = () => {
  const [randomlySelected, setRandomlySelected] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync()

        if (data.length > 0) {
          const result = randomlySelectThreeItems(data, 3)
          setRandomlySelected(result)
        }
      }
    })()
  }, [])

  const renderItem = (item) => {
    console.log('here', item.name)
    return (
      <ListItem
        title={item.name}
        bottomDivider
        chevron
      />
    )
  }

  return (
    <View style={styles.main}>
      <Card
        title="People you have to call today">
        {
          randomlySelected &&
         <FlatList
           data={randomlySelected}
           renderItem={({ item }) => renderItem(item)}
           keyExtractor={(item, index) => index.toString()}
         />
        }
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    ...main,
    backgroundColor: LIGHT_GREY,
    justifyContent: 'flex-start'
  }
})

export default RandomContacts
