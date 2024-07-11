import { View, Text, Button } from 'react-native'
import React from 'react'

const GoalItem = ({goal, deleteHandler}) =>{
  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{goal.text}</Text>
        <Button color="balck" title = "X" onPress={()=>{}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#aaa',
    borderColor: 'darkmagenta',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  textStyle:{
    color:"darkmagenta",
    marginVertical:5,
    backgroundColor: 'lightgray',
  },
});
export default GoalItem;