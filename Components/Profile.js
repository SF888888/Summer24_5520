import { View, Text, Image } from 'react-native'
import React from 'react'
import { auth } from '../Firebase/firebaseSetup';
import LocationManager from './LocationManager';

export default function Profile() {
  const location = LocationManager();
    console.log(auth.currentUser);
  return (
    <View>
      <Text>Profile {auth.currentUser.uid}</Text>
      <Image source={{uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${AIzaSyDqmUIleHV68nHsPcJqjXt4AMvrqV69ciQ}`}} style={{width: 100, height: 100}}/>
    </View>
  )
}