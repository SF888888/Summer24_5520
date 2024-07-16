import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from './Header';
import Input from './Input';
import GoalItem from './goalItem';

export default function Home() {
  const appName = 'Summer 2024 class';
  //const[receivedText, setReceivedText] = useState("");
  const[goals, setGoals] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  function handleInputData(data){
    console.log('call back', data);
    const newGoal = {text: data, id: Math.random()};
    //const newArray = [...goals, newGoal];
    setGoals((currentGoals) => {
      return [...currentGoals, newGoal];
    });
    //setReceivedText(data);
    setModalVisible(false);
  }
  function handleCancel() {
    setModalVisible(false);
  }
  function deleteHandler(deletedId){
    console.log('goal deleted', deletedId);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== deletedId);
    })
  }
  
    

  return (
  <View style={styles.container}>
    {/* use a prop to pass appName to Header */}
    <Input inputHandler={handleInputData} isModalVisible={modalVisible} onCancel={handleCancel}/>
    <View style={styles.topContainer}>
      <Header name={appName} >
        <Text></Text>
      </Header>
      
      <Button title="Add a goal" onPress={()=>setModalVisible(true)}/>
    </View>
    <View style={styles.bottomContainer}>
    {
        goals.length === 0 ? (
          <Text>Please add your goal</Text>
        ) : (
          <>
            <FlatList
              renderItem={({ item }) => {
                return <GoalItem goal={item} deleteHandler = {deleteHandler}/>;
              }
            }
            data={goals}
            />
          </>
        )
      }
    </View>
    <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    color:"darkmagenta",
    marginVertical:5,
    backgroundColor: 'lightgray',
  },
  topContainer:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer:{
    flex: 6,
    backgroundColor: '#dcd',
    alignItems: 'center',
  },

  });