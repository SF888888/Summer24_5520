import { Pressable, View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import PressableButton from './PressableButton';
import { FontAwesome } from '@expo/vector-icons';

const GoalItem = ({goal, deleteHandler}) =>{
  const navigation = useNavigation();

  const pressHandler = (goal) => {
    navigation.navigate('GoalDetails', { goalObj: goal });
  };

  return (
    <View style={styles.textContainer}>
      <Pressable
      android_ripple={{color:"pink"}}
      style={({pressed})=>{
      return pressed && styles.pressedStyle}}
      onPress={function(){navigation.navigate('GoalDetails', { goalObj: goal })}}
      >
        <Text style={styles.textStyle}>{goal.text}</Text>

      <PressableButton pressedFunction={()=>{deleteHandler(goal.id);}}>
        <FontAwesome name = "trash" size={24} color="black"/>
      </PressableButton>
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
  horizontalContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: 15,
    backgroundColor:"#aaa",
  },
  pressedStyle:{
    opacity: 0.5,
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