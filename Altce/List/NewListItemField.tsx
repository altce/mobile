import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

type NewListItemFieldProps = {
  addListItem: Function
}

const NewListItemField = (props: NewListItemFieldProps) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ newItemText, setNewItemText ] = useState('')

  return (
    <View style = { styles.main }>
      {
        isEditing ? (
          <TextInput
            style = { styles.input }
            autoFocus
            placeholder = 'New Item'
            value = { newItemText }
            onChangeText = { setNewItemText }
            onSubmitEditing = { () => {
              setIsEditing(false)
              if(newItemText !== '') {
                props.addListItem(newItemText)
                setNewItemText('')
              }
            }}
          />
        ) : (
          <Button
            title = 'Create'
            onPress = { () => setIsEditing(true) }
            color = { '#868' }
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#646',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#868'
  }
})

export default NewListItemField