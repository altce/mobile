import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ListItemProps = {
  value: string
}

const ListItem = (props: ListItemProps) => (
  <View style = { styles.main }>
    <Text> { props.value } </Text>
  </View>
)

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#646',
    height: 42,
    margin: 4,
    justifyContent: 'center',
    paddingLeft: 8,
    borderRadius: 8
  }
})

export default ListItem