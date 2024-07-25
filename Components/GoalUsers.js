import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { readAllDocs, writeToDB } from '../Firebase/firestoreHelper';

const GoalUsers = ({id}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const dataFromFirestore = await readAllDocs(`goals/${id }/users`);
        console.log(dataFromFirestore.length);
        if(dataFromFirestore.length){
            setUsers(dataFromFirestore);
            return;
        }
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.forEach((userData)=>{
            writeToDB(userData, 'goals/' + id + 'users');
        });
        setUsers(data); 
      } catch (error) {
        console.log('error fetching data', error);
      }
    }
    
        fetchUserData();
  }, [id]);

  return (
    <View>
      <FlatList
      data={users}
      renderItem={(data)=>{
        console.log(data.item);
        return <Text>{data.item.name}</Text>
      }}/>
    </View>
  );
};

export default GoalUsers;