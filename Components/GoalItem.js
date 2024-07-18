import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Pressable from './Pressable';

const GoalItem = ({goal, deleteHandler}) =>{
  const navigation = useNavigation();

  const pressHandler = (goal) => {
    navigation.navigate('GoalDetails', { goalObj: goal });
  };

  return (
    <View style={styles.textContainer}>
      <Pressable>
        <Text style={styles.textStyle}>{goal.text}</Text>
        <Button color="black" title = "X" onPress={()=>deleteHandler(goal.id)}/>
      </Pressable>
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
  pressable:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: 15,
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