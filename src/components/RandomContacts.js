import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native'
import * as Contacts from 'expo-contacts'
import { ListItem, Card } from 'react-native-elements'

import CallModal from '../components/CallModal'
import Loader from '../components/Loader'
import { randomlySelectThreeItems } from '../common/helpers'
import { main } from '../common/appStyles'
import { LIGHT_GREY } from '../common/appColors'

const RandomContacts = ({ navigation }) => {
  const [randomlySelected, setRandomlySelected] = useState(null)
  const [selectedContact, setSelectedContact] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    (async () => {
      const { data } = await Contacts.getContactsAsync()
      if (data.length > 0) {
        const result = randomlySelectThreeItems(data, 3)
        setRandomlySelected(result)
      }
    })()
  }, [])

  const onContactSelect = (item) => {
    setSelectedContact(item)
    setModalOpen(true)
  }

  const renderItem = (item) => {
    return (
      <ListItem
        title={item.name}
        bottomDivider
        chevron
        onPress={() => onContactSelect(item)}
      />
    )
  }

  if (!randomlySelected) {
    return (
      <View style={styles.loaderWrapper}>
        <Text style={styles.loaderText}>Fetching contacts</Text>
        <Loader />
      </View>
    )
  }

  return (
    <View style={styles.main}>
      <Card
        title="People you have to call today">
        {
          <FlatList
            data={randomlySelected}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </Card>
      {
        selectedContact &&
        <CallModal
          title={selectedContact.name}
          transparent={true}
          isModalOpen={isModalOpen}
          onModalClose={() => setModalOpen(false)}
        >
          {
            selectedContact.phoneNumbers
          }
        </CallModal>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    ...main,
    backgroundColor: LIGHT_GREY,
    justifyContent: 'flex-start'
  },
  loaderWrapper: {
    ...main,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_GREY
  },
  loaderText: {
    fontSize: 18,
    marginVertical: 20
  }
})

export default RandomContacts
