import { View, Text } from 'react-native'
import React from 'react'

const GoalDetails = ({navigation, route}) => {
    console.log(route.params);
  return (
    <View>
      <Text>The details fo the goal with text:{route.params.goalObj.text} and id:{route.params.goalObj.id}</Text>
    </View>
  )
}

export default GoalDetails