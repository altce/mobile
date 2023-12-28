import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import ListItems from './ListItems'
import NewListItemField from './NewListItemField'

const List = () => {
  const [ listItems, setListItems ] = useState<string[]>([])

  return (
    <View style = { styles.main }>
      <ListItems listItems = { listItems }/>
      <NewListItemField addListItem = { (newListItem: string) => setListItems([ ...listItems, newListItem ]) }/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default List