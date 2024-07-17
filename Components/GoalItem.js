import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const GoalItem = ({goal, deleteHandler, pressHandler}) =>{

  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{goal.text}</Text>
        <Button color="black" title = "X" onPress={()=>deleteHandler(goal.id)}/>
        <Button color="black" title = "I" onPress={function(){pressHandler(goal)}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#aaaa',
    borderColor: 'darkmagenta',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  textStyle:{
    color:"darkmagenta",
    marginVertical:5,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 20,
    //backgroundColor: 'lightgray',
  },
});
export default GoalItem;