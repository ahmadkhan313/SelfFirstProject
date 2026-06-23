import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
      <View style= {styles.headingContainer}>
        <Text style = {styles.headingTxt}>
           Items
        </Text>
        <Text style = {styles.headingTxt}>
          Quantity
        </Text>
      </View>

      <FlatList
        data = {data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style = {[styles.itemConatainer, {backgroundColor : item.stock < 6 ? "#ffcccc" : "#D7F6BFFF"}]}> 
            <Text style = {styles.ItemTxt}>
           {item.name}
        </Text>
        <Text style = {styles.ItemTxt}>
          {item.stock}
        </Text>

          </View>

        )}
        contentContainerStyle = {{gap : 10 }}/>
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({

  headingContainer : {
    flexDirection : "row",
    justifyContent : "space-between",
    padding : 15 
  },
  headingTxt : {
    fontWeight : "bold",
    fontSize : 20 ,
    paddingVertical : 10
  },
  itemConatainer : {
     flexDirection : "row",
    justifyContent : "space-between",
    padding : 15 ,
    borderRadius : 7

  },
  ItemTxt : {

    fontSize : 17 ,
    fontWeight : "bold"

  }
})