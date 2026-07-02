import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import LowStocks from './LowStocks'
import Create from './Create'






const Home = () => {

  const [view,setview] = useState(0)
  const [data , setdata] =useState([
    
  {id : 1 , name : "Dona" , stock : 5, unit : "Bori"},
  {id : 2 , name : "Pattal" , stock : 8 , unit : "Bori"},
  {id : 3 , name : "Fancy Glass" , stock : 3 , unit : "Cartoon"},
  {id : 4 , name : "Normal Glass" , stock : 6 , unit : "Cartoon"},
  
  

  ])
  return (
    <View  style = {styles.Container}>
      <Text  style = {styles.txt}> Dashboard</Text>
      <View style ={styles.btnContainer}>

        <Pressable  onPress={()=> setview(0)}>
          <Text style = {[styles.btntxt , view === 0 ? {backgroundColor : "#D7F6BFFF" , color : "black"} : null] }> 
            All Items
          </Text>
        </Pressable>
         <Pressable onPress={ ()=> setview(1)}>
          <Text style = {[styles.btntxt , view === 1 ? {backgroundColor : "#D7F6BFFF" , color : "black"} : null]}>
            Low Stock
          </Text>
        </Pressable>
         <Pressable onPress={()=> setview(2)}>
          <Text style = {[styles.btntxt , view === 2 ? {backgroundColor : "#D7F6BFFF", color : "black"} : null]}>
            Creat
          </Text>
        </Pressable>

        
      </View>
      {view === 0 && <AllItems data = {data}/>}
      {view === 1 && <AllItems data = {data.filter ((item) => item.stock <6 ) }/>}
      {view === 2 && <Create data={data} setdata = {setdata}/>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({


  Container : {
   flex : 1 , 
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
    borderColor : "black",
    color : "black",
    fontWeight : "bold"


  } ,

})