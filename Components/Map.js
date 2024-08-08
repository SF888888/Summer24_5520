import { View, Text, Button } from 'react-native'
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
        onPress={(event) => {
            setSelectedLocation({
                lat: event.nativeEvent.coordinate.latitude,
                lng: event.nativeEvent.coordinate.longitude
            })
            console.log(event.nativeEvent)}}>
    <Marker coordinate={selectedLocation}></Marker>
    </MapView>
    <Button title="Confirm Loacation" onPress={confirmHandler}></Button>
    </>
  )
}

export default Map