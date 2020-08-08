import React from 'react'
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { ListItem } from 'react-native-elements'
import { handleLinkPress } from '../common/helpers'
import { PURE_WHITE, BASE_HIGHLIGHT, BASE_GREEN, DIM, SELECT_BLUE } from '../common/appColors'

const CallModal = ({ title, subtitle, transparent, isModalOpen, onModalClose, children }) => {
  const renderItem = (item) => {
    const { number } = item
    return (
      <ListItem
        title={number}
        rightAvatar={<Ionicons name="ios-call" size={32} color={SELECT_BLUE} />}
        onPress={() => handleLinkPress(`tel:${number}`)}
      />
    )
  }

  return (
    <Modal
      visible={isModalOpen}
      transparent={transparent}
      onRequestClose={() => {}}>
      <View style={styles.main}>
        <View style={styles.innerContent}>
          <View style={styles.headerWrapper}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onModalClose}>
              <Ionicons name="ios-close" size={40} color={BASE_GREEN} />
            </TouchableOpacity>
          </View>
          <View >
            <Text>{subtitle}</Text>
            <View style={styles.childrenWrapper}>
              {
                children &&
              <FlatList
                data={children}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
              }
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: DIM,
    justifyContent: 'center'
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerContent: {
    height: 'auto',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: PURE_WHITE,
    borderColor: BASE_HIGHLIGHT,
    borderWidth: 2
  },
  closeButton: {
    paddingHorizontal: 15
  },
  childrenWrapper: {
    paddingHorizontal: '10%'
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  }
})

export default CallModal
