import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import ListItems from './ListItems'
import NewListItemField from './NewListItemField'

const List = () => {
  const [ listItems, setListItems ] = useState<string[]>([])
  const { getItem, setItem } = useAsyncStorage('listItems')

  const saveListItems = () => {
    const json = JSON.stringify(listItems)
    setItem(json)
  }

  const loadListItems = () => {
    getItem()
      .then(json => JSON.parse(json || ''))
      .then(result => setListItems(result))
  }

  useEffect(() => loadListItems(), [])
  useEffect(() => saveListItems(), [ listItems ])

  const addListItem = (newListItem: string) => {
    setListItems(listItems.concat(newListItem))
  }

  return (
    <View style = { styles.main }>
      <ListItems listItems = { listItems }/>
      <NewListItemField addListItem = { addListItem }/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default List