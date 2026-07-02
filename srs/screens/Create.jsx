import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Create({data, setdata}) {
  const [itemName , setitemName] = useState('')
  const [stockAmt ,setstockAmt] = useState('')
  const addItemHandler = ()=> {
     const newItem = {
      id: Date.now(),
    name : itemName,
  stock : stockAmt     }

    setdata ([...data ,newItem])
    setitemName ('')
    setstockAmt ('')

  }
  return (
    <View style = {styles.container}>
      <TextInput

        placeholder=' Enter an item name...'
        style = {styles.input}
        value={itemName}
        onChangeText={(item)=> setitemName(item)}
     
      />
       <TextInput

        placeholder=' Enter Stock Ammount...'
        style = {styles.input}
        value={stockAmt}
        onChangeText={(item)=> setstockAmt(item)}
     
      />

      <Pressable style= {styles.Button} onPress={()=> addItemHandler()}>
        <Text style ={styles.btntxt}>
          Add item in the stock
        </Text>
      </Pressable>
      <View>
          
      
            <FlatList
              data = {data}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <View style = {[styles.itemConatainer, {backgroundColor : item.stock < 6 ? "#ffcccc" : "#D7F6BFFF"}]}> 
                  <Text style = {styles.ItemTxt}> {item.name}</Text>
             
      
             <View style = {{flexDirection : "row" , gap :20}}>
               <Text style = {styles.ItemTxt}>{item.stock} </Text>
             <Text style = {styles.ItemTxt}> Edit </Text>
             
              <Text style = {styles.ItemTxt}>Delete </Text>
            </View>

          </View>
          )}
          
      contentContainerStyle = {{gap : 10 }}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    padding : "4%",
    gap : 7 
  },
  input : {
    borderWidth : 1 ,
    borderColor : "black",
    paddingHorizontal : 15,
    padding : 10,
    borderRadius : 7 ,
    marginTop : 15,
    
  },
  Button : {
    borderRadius :8 ,
    borderWidth : 1 ,
    backgroundColor : "#D7F6BFFF",
    paddingHorizontal : 15 ,
    paddingVertical : 10 ,
    justifyContent : "center",
    alignItems : "center",
    marginTop : 15,
    marginBottom : 15
  },
  btntxt : {
    fontSize : 17 ,
    fontWeight : "bold",
    
  },
  headingContainer : {
    
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
    borderRadius : 7,
    borderColor : "black",
    borderWidth : 1

  },
  ItemTxt : {

    fontSize : 17 ,
    fontWeight : "bold",
    
    
  }
  
})