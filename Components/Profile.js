import { View, Text, Image } from 'react-native'
import React from 'react'
import { auth } from '../Firebase/firebaseSetup';
import LocationManager from './LocationManager';
import { mapsApiKey } from '@env';

export default function Profile() {
  const location = LocationManager();
    console.log(auth.currentUser);
  return (
    <View>
      <Text>Profile {auth.currentUser.uid}</Text>
      <LocationManager></LocationManager>
    </View>
  )
}