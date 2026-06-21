  import React from 'react';
  import Home from './srs/screens/Home';
  import Screen from './srs/screens/Screen';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Entypo from 'react-native-vector-icons/Entypo';
  import AntDesign from 'react-native-vector-icons/AntDesign';

  const Tab = createBottomTabNavigator();

  function TabNavigation() {
    return (
      <Tab.Navigator   initialRouteName='Home'
      screenOptions = {{
          
          tabBarLabelStyle : { 
            fontSize : 12,

          } , 
          tabBarStyle : {
            height : 60,
            
          },
          tabBarActiveTintColor : "#900"
        }}>


        <Tab.Screen name="Home" component={Home}
        
          options={{ headerShown : false,
          tabBarIcon :  ()=> (
        <Entypo name="home" size={30} color="black" />
      ) , 

          
        }} />
        <Tab.Screen name="Screen" component={Screen}
        options={{ headerShown : false,
          tabBarIcon : ()=> (
            <AntDesign name = "profile" size ={30}  color= "black" />
          ),
        }} />
      </Tab.Navigator>
    );
  }










  const Stack = createNativeStackNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        
        />
        <Stack.Screen name="Screen" component={Screen}
        />
      </Stack.Navigator>
    );
  };

  const App = () => {
    return (
      <NavigationContainer>
        <TabNavigation/>
        
      </NavigationContainer>
    );
  };

  export default App;