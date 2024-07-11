import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';
import GoalItem from './Components/goalItem';

export default function App() {
  const appName = 'Summer 2024 class';
  //const[receivedText, setReceivedText] = useState("");
  const[goals, setGoals] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  function handleInputData(data){
    console.log('call back', data);
    const newGoal = [{text: data, id: Math.random()}];
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
          <Text>No goals yet</Text>
        ) : (
          <>
            <FlatList
              renderItem={({ item }) => {
                return <GoalItem goal={item}/>;
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
    flex: 4,
    backgroundColor: '#dcd',
    alignItems: 'center',
  },

  });

