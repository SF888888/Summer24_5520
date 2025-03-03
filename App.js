import { View, Text } from 'react-native'
import React from 'react'
import Home from './Components/Home'
import GoalDetails from './Components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
console.log(Stack);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'All Goals', 
          headerStyle:{backgroundColor:'darkmagenta'}, 
          headerTintColor:'white'}}/>
        <Stack.Screen name="GoalDetails" component={GoalDetails} 
        options = {(data)=>{
          return{title:router.params.goalObj.text,
          headerRight:()=>{
            return(
              <Button title="Warning" onPress={()=>{console.log("warning")}}/>
            )
          }}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

