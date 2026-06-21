import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import LowStocks from './LowStocks'
import Create from './Create'


const Home = () => {

  const [view,setview] = useState(0)
  return (
    <View  style = {styles.Container}>
      <Text  style = {styles.txt}> Dashboard</Text>
      <View style ={styles.btnContainer}>

        <Pressable  onPress={()=> setview(0)}>
          <Text style = {styles.btntxt}>
            All Items
          </Text>
        </Pressable>
         <Pressable onPress={ ()=> setview(1)}>
          <Text style = {styles.btntxt}>
            Low Stock
          </Text>
        </Pressable>
         <Pressable onPress={()=> setview(2)}>
          <Text style = {styles.btntxt}>
            Creat
          </Text>
        </Pressable>

        
      </View>
      {view === 0 && <AllItems/>}
      {view === 1 && <LowStocks/>}
      {view === 2 && <Create/>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({


  Container : {
    width : "100%" ,
    height : "100%", 
    padding : "4%" , 
    backgroundColor : "#dadada"
  },
  txt : {
    
    fontSize : 30 ,
    fontWeight : "bold"
  },

  btnContainer : {  
    flexDirection : "row" ,
    gap : 10 

  },
  btntxt :{
    marginTop : 10 , 
    padding : 10,
    fontSize :15,
    borderRadius : 10 ,
    borderWidth : 1 ,
    borderColor : "green",
    color : "green",
    fontWeight : "bold"


  } ,

})