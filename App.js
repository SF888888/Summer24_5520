import { View, Text , Button} from 'react-native'

import React from 'react'
import Home from './Components/Home'
import GoalDetails from './Components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
console.log(Stack);

const defaultScreenOptions = {
  headerStyle: { backgroundColor: 'darkmagenta' },
  headerTintColor: 'white',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup' screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Log In' }} />
      </Stack.Navigator>
      <Stack.Navigator initialRouteName='Home' screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'All Goals'}}/>
        <Stack.Screen 
          name="GoalDetails" 
          component={GoalDetails} 
          options={({ route }) => ({
            title: route.params.goalObj.text, 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

