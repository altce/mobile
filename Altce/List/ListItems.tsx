import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import ListItem from './ListItem'

type ListItemsProps = {
  listItems: string[],
  removeItem: Function
}

const ListItems = (props: ListItemsProps) => (
  <ScrollView style = { styles.main }>
    {
      props.listItems.map((item: string) => (
        <ListItem
          key = { item }
          value = { item }
          remove = { () => props.removeItem(item) }
        />
      ))
    }
  </ScrollView>
)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 2,
  }
})

export default ListItems