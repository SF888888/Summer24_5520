import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Components/GoalDetails";
import { Button, Text } from "react-native";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";
import Profile from "./Components/Profile";
import PressableButton from "./Components/PressableButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
const Stack = createNativeStackNavigator();
const AuthStack = (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
);
const AppStack = (
  <>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          title: "All Goals",
          headerRight: () => {
            return (
              <PressableButton
                pressedFunction={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Ionicons name="person" size={24} color="black" />
              </PressableButton>
            );
          },
        };
      }}
    />
    <Stack.Screen
      name="Details"
      component={GoalDetails}
      options={({ navigation, route }) => {
        return {
          title: route.params ? route.params.goalObj.text : "Details",
          // headerRight: () => {
          //   return (
          //     <Button
          //       title="Warning"
          //       color="white"
          //       onPress={() => {
          //         console.log("Warning");
          //       }}
          //     />
          //   );
          // },
        };
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <PressableButton
              pressedFunction={() => {
                try {
                  signOut(auth);
                } catch (err) {
                  console.log("sign out ", err);
                }
              }}
            >
              <AntDesign name="logout" size={24} color="black" />
            </PressableButton>
          );
        },
      }}
    />
  </>
);
export default function App() {
  const [isUserAuthenticated, setIsUseruthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //based on the user variable update the state variable
      if (user) {
        setIsUseruthenticated(true);
      } else {
        setIsUseruthenticated(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "darkmagenta" },
          headerTintColor: "white",
        }}
      >
        {isUserAuthenticated ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}