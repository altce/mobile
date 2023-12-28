import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => (
  <View style={styles.main}>
    <Text>Altce</Text>
  </View>
)

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#646',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App