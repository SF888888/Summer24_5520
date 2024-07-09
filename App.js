import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';

export default function App() {
  const appName = 'Summer 2024 class';
  const[receivedText, setReceivedText] = useState("");
  const[modalVisible, setModalVisible] = useState(false);
  function handleInputData(data){
    console.log('call back', data);
    setReceivedText(data);
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      {/* use a prop to pass appName to Header */}
      <Header name={appName} >
        <Text>Header children</Text>
      </Header>
      <Input inputHandler={handleInputData} isModalVisible={modalVisible}/>
      <View style={styles.topContainer}>
      <Text>{receivedText}</Text>
      </View>
      <StatusBar style="auto" />
      <Button title="Add a goal" onPress={()=>setModalVisible(true)}/>
    </View>
  );
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
  },
  topContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContatiner:{
    flex: 4,
    backgroundColor: '#dcd',
    alignItems: 'center',
  },

  });

