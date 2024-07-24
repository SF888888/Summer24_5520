import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from './Header';
import Input from './Input';
import GoalItem from './GoalItem';
import {writeToDB} from '../Firebase/firestoreHelper';
import { database } from '../Firebase/firebaseSetup';
import PressableButton from './PressableButton';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home({navigation}) {
  const appName = 'Summer 2024 class';
  //const[receivedText, setReceivedText] = useState("");
  const[goals, setGoals] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  useEffect(() => { 
    const unsubscribe = onSnapshot(collection(db, "goals"), (querySnapshot) => {
      if (!querySnapshot.empty) {
        const newArray = [];
        querySnapshot.forEach((docSnapshot) => {
          console.log(docSnapshot.id);
          newArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
        });
        setGoals(newArray);
      }
    });
    return () => unsubscribe();
  }, []);
  
    
 function handleInputData(data){
    console.log('call back', data);
    const newGoal = {text: data, id: Math.random()};
    //const newArray = [...goals, newGoal];
    setGoals((currentGoals) => {
      return [...currentGoals, newGoal];
    });
    writeToDB(newGoal, 'goals');
    //setReceivedText(data);
    setModalVisible(false);
  }
  function handleCancel() {
    setModalVisible(false);
  }
  function deleteHandler(deletedId){
    console.log('goal deleted', deletedId);
    deletefromDB(deletedId, collectionName);
  }
  function handlePressGoal(pressedGoal){
    console.log('goal pressed', pressedGoal);
    navigation.navigate('GoalDetails', { goalObj: pressedGoal });
 }
    

  return (
  <View style={styles.container}>
    {/* use a prop to pass appName to Header */}
    <Input inputHandler={handleInputData} isModalVisible={modalVisible} onCancel={handleCancel}/>
    <View style={styles.topContainer}>
      <Header name={appName} >
        <Text></Text>
      </Header>
      <PressableButton
      pressedFunction={()=>{setModalVisible(true)}}
      componentStyle={styles.buttonStyle}>
        <Text>Add a Goal</Text>
      </PressableButton>
      {/*<Button title="Add a goal" onPress={()=>setModalVisible(true)}/>*/}
    </View>
    <View style={styles.bottomContainer}>
    {
        goals.length === 0 ? (
          <Text>Please add your goal</Text>
        ) : (
          <>
            <FlatList
              renderItem={({ item }) => {
                return <GoalItem goal={item} deleteHandler = {deleteHandler} pressHandler={handlePressGoal}/>;
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
  buttonStyle:{
    borderRadius:4,
    padding: 10,
  }

  });