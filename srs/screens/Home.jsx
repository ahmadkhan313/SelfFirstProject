import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import LowStocks from './LowStocks'
import Create from './Create'


const data  = [
  {id : 1 , name : "Dona" , stock : 5 , unit : "Bori"},
  {id : 2 , name : "Pattal" , stock : 8 , unit : "Bori"},
  {id : 3 , name : "Fancy Glass" , stock : 3 , unit : "Cartoon"},
  {id : 4 , name : "Normal Glass" , stock : 6 , unit : "Cartoon"},
  {id : 5 , name : "Coffe Cup" , stock : 5 , unit : " Cartoon"},
  {id : 6 , name : " Wood Spoon" , stock : 25 , unit : "packet"},
  {id : 7 , name : "Plastic Spoon" , stock : 30 , unit : "Packet"},
]



const Home = () => {

  const [view,setview] = useState(0)
  return (
    <View  style = {styles.Container}>
      <Text  style = {styles.txt}> Dashboard</Text>
      <View style ={styles.btnContainer}>

        <Pressable  onPress={()=> setview(0)}>
          <Text style = {[styles.btntxt , view === 0 ? {backgroundColor : "green" , color : "white"} : null] }> 
            All Items
          </Text>
        </Pressable>
         <Pressable onPress={ ()=> setview(1)}>
          <Text style = {[styles.btntxt , view === 1 ? {backgroundColor : "green" , color : "white"} : null]}>
            Low Stock
          </Text>
        </Pressable>
         <Pressable onPress={()=> setview(2)}>
          <Text style = {[styles.btntxt , view === 2 ? {backgroundColor : "green", color : "white"} : null]}>
            Creat
          </Text>
        </Pressable>

        
      </View>
      {view === 0 && <AllItems data = {data}/>}
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