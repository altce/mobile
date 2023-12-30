import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type ListItemProps = {
  value: string,
  remove: Function
}

const ListItem = (props: ListItemProps) => (
  <View style = { styles.main }>
    <Text> { props.value } </Text>
    <Button
      title = 'X'
      onPress = { () => props.remove() }
    />
  </View>
)

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#646',
    height: 42,
    margin: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    flexDirection: 'row'
  }
})

export default ListItem