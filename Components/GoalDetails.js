import { View, Text, Button } from 'react-native'
import React from 'react'

const GoalDetails = ({navigation, route}) => {
    console.log(route.params);
    if (!route.params || !route.params.goalObj) {
        return (
          <View>
            <Text>No goal details available.</Text>
          </View>
        );
      }
    
      return (
        <View>
          <Text>The details of the goal with text: {route.params.goalObj.text} and id: {route.params.goalObj.id}</Text>
          <Button title='More details' onPress={() => { navigation.push("GoalDetails", { goalObj: route.params.goalObj }) }} />
        </View>
      );
    };

export default GoalDetails;