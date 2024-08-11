import { View, Text, Button, styleSheet } from 'react-native'
import React from 'react'
import MapView, {Marker} from "react-native-maps";
import { useState } from 'react';

 const Map = ({navigation}) => {
    const[selectedLocation, setSelectedLocation] = useState(null);
    const confirmHandler = () => {
        navigation.navigate("Profile",{selectedLocation});
        console.log(selectedLocation)
    }
  return (
    <>
    <MapView
      initialRegion={
        {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.042
        }}
        style={{flex:1}}
        onPress={(event) => {
            setSelectedLocation({
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude
            })
            console.log(event.nativeEvent)}}>
    <Marker coordinate={selectedLocation}/>
    </MapView>
    <Button title="Confirm Loacation" onPress={confirmHandler}></Button>
    </>
  )
}

export default Map