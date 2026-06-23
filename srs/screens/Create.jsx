import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Create() {
  const [itemName , setitemName] = useState('')
  const [stock ,setstock] = useState('')
  return (
    <View style = {styles.container}>
      <TextInput

        placeholder=' Enter an item name...'
        style = {styles.input}
        value={itemName}
        onChangeText={(item)=> setitemName(item)}
      />
     
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    padding : "4%"
  }
})