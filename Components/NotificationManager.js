import { View, Text, Button } from 'react-native'
import React from 'react'
import * as Notifications from 'expo-notifications';

async function verifyPermissions() {
    try{
    const response = await Notifications.getPermissionsAsync()
    console.log("noti permision",response);
    if (response.granted) {
        return true;
      }
      const permissionResponse = await Notifications.requestPermissionsAsync();
      return permissionResponse.granted;
    }catch(err){
        console.log(err)
    }
  }

const NotificationManager = () => {
    async function scheduleNotificationHandler () {
        const hasPermission = await verifyPermissions();
        try{
        const data = Notifications.scheduleNotificationAsync({
            content: {
              title: 'Goal Reminder',
              body: "This is your reminder to add a goal",
              data:{uri: 'https://www.google.com'},
            },
            trigger: {seconds:2},
          });
        }catch(err){
            console.log(err)
        }
      };

  return (
    <View>
      <Button title="Remind me to add a goal" onPress = {scheduleNotificationHandler}></Button>
    </View>
  )
}

export default NotificationManager