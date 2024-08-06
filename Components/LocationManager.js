import { View, Button, Text } from 'react-native'
import React, {useState} from 'react'
import * as Location from 'expo-location'


const LocationManager = () => {
    const [response, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null);

    async function verifyPermission () {
        const response = await Location.getForegroundPermissionsAsync();
        console.log(response);
        if(response.granted){
            return true;
        }
        if(response.status !== 'granted'){
            const permissionResponse = await Location.requestForegroundPermissionsAsync();
            if(permissionResponse.status !== 'granted'){
                return false;
            }
        }
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    }
    async function locateUserHandler(){
        try{
            const hasPermission = await verifyPermission();
            if(!hasPermission){
                Alert.alert('Permission required' [{text: 'Okay'}]);
                return;
            }
            const result = Location.getCurrentPositionAsync()
            console.log(result);
            setLocation({latitude: result.coords.latitude, longitude: result.coords.longitude});
        }
        catch(err){
            console.log(err);
        }
        
    }
  return (
    <View>
      <Button title = 'Find my location' onPress={locateUserHandler}/>
    </View>
  )
}

export default LocationManager