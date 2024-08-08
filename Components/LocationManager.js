import { Alert, Button, StyleSheet, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { mapsApiKey } from "@env";
import { Dimensions } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import { writeWithIdToDB, getDoc } from "../Firebase/firestoreHelper";
import { auth } from "../Firebase/firebaseSetup";


const windowWidth = Dimensions.get("window").width;


const LocationManager = () => {
  const [response, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    if (route.params) {
      setLocation(route.params.selectedLocation);
    }
  }, [route.params]);
  useEffect(() => {
    async function getUserData() {
      const userData = await getDoc("users", auth.currentUser.uid);
      if(userData){
        setLocation(userData.location);
      }
    }
    getUserData
  }, [location]);
  async function verifyPermission() {
    console.log(response);
    if (response.granted) {
      return true;
    }

    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }

  function chooseLocationHandler() {
    navigation.navigate("Map");
  }

  async function locateUserHandler() {
    try {
      //verify permission before continuing
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert.alert("You need to give permission to use location services");
        return;
      }
      const result = await Location.getCurrentPositionAsync();

      setLocation({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      });
    } catch (err) {
      console.log("get current position ", err);
    }
  }

  function saveLocationHandler() {
    writeWithIdToDB({location}, "locations", auth.currentUser.uid);
    navigation.navigate("Home");
  }

  return (
    <View>
      <Button title="Find My Location" onPress={locateUserHandler} />
      <Button title="Let me choose my location" onPress={chooseLocationHandler} />

      {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
          style={styles.image}
        />
        
      )}
      <Button title="Save my location" onPress={saveLocationHandler} /> 
    </View>
  );
};


export default LocationManager;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: windowWidth,
  },
});