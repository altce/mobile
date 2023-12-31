import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import ListItems from './ListItems'
import NewListItemField from './NewListItemField'

const List = () => {
  const [ listItems, setListItems ] = useState<string[]>([])
  const { getItem, setItem } = useAsyncStorage('listItems')

  const loadListItems = () => {
    getItem()
      .then(json => JSON.parse(json || ''))
      .catch(error => { return [] })
      .then(result => setListItems(result))
  }
  
  const saveListItems = () => {
    setItem(JSON.stringify(listItems))
  }

  useEffect(() => loadListItems(), [])
  useEffect(() => saveListItems(), [ listItems ])

  return (
    <View style = { styles.main }>
      <ListItems
        listItems = { listItems }
        removeItem = { (itemToRemove: string) => setListItems(listItems.filter(item => itemToRemove !== item)) }
      />

      <NewListItemField addListItem = { (newListItem: string) => setListItems(listItems.concat(newListItem)) }/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default List