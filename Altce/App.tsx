import React from 'react'
import { StyleSheet, View } from 'react-native'

import List from './List/List'

const App = () => (
  <View style = { styles.main }>
    <List />
  </View>
)

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#424',
    flex: 1
  }
})

export default App