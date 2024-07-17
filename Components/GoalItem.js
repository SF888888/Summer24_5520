import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GoalItem = ({goal, deleteHandler}) =>{
  const navigation = useNavigation();

  const pressHandler = (goal) => {
    navigation.navigate('GoalDetails', { goalObj: goal });
  };

  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{goal.text}</Text>
        <Button color="black" title = "X" onPress={()=>deleteHandler(goal.id)}/>
        <Button color="black" title = "I" onPress={pressHandler(goal)}/>
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