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
          <View style = {styles.itemConatainer}> 
            <Text style = {styles.headingTxt}>
           Items
        </Text>
        <Text style = {styles.headingTxt}>
          Quantity
        </Text>

          </View>

        )}/>
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
    fontSize : 20 
  },
  itemConatainer : {
     flexDirection : "row",
    justifyContent : "space-between",
    padding : 15 
  }
})