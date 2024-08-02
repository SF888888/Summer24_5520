import { View, Text , Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import GoalDetails from './Components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './Firebase/firebaseSetup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PressableButton from './Components/PressableButton'
import { signOut, onAuthStateChanged } from 'firebase/auth'

const Stack = createNativeStackNavigator();
console.log(Stack);

const AuthStack = <>
  <Stack.Screen name="Login" component={Login} options={{ title: 'Log In' }}/>
  <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up' }}/>
</>;
const AppStack = <>
  <Stack.Screen name="Home" component={Home} 
  options={({navigation})=>{
    return{
      title: 'All Goals',
      headerRight: () => {
        return(
          <PressableButton
            title='Profile'
            onPress={() => navigation.navigate('Profile')}
            icon={<Ionicons name='person' size={20} color='white'/>}
          />
        )
      }
    },[]}}/>
  <Stack.Screen name="Profile" component={Profile} options={{ 
    headerRight:()=>{
      return(
        <PressableButton pressedFunction={
          () => {
            try{signOut(auth)}
            catch(err){
              console.log(err);
            }
        }}>
          <Ionicons name='log-out' size={20} color='white'/>
        </PressableButton>
      )
    }
   }}/>
  <Stack.Screen name="GoalDetails" 
          component={GoalDetails} 
          options={({ route }) => ({
            title: route.params.goalObj.text, 
          })} />
</>

const defaultScreenOptions = {
  headerStyle: { backgroundColor: 'darkmagenta' },
  headerTintColor: 'white',
};

export default function App() {
  const[isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
       {isAuthenticated ? AppStack : AuthStack}
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}
