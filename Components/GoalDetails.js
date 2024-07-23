import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

const GoalDetails = ({navigation, route}) => {
    console.log(route.params);
    const [warning, setWarning] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
          title: warning ? 'Warning!' : route.params.goalObj.text,
          headerRight: () => (
            <Button title="Warning" onPress={() => {setWarning(true);}}/>
          ),
        });
    }, [navigation, warning]);
    if (!route.params || !route.params.goalObj) {
        return (
          <View>
            <Text>No goal details available.</Text>
          </View>
        );
      }
    
      return (
        <View>
          <Text style={[styles.text, warning && styles.warningText]}>The details of the goal with text: {route.params.goalObj.text} and id: {route.params.goalObj.id}</Text>
          <Button title='More details' onPress={() => { navigation.push("GoalDetails", { goalObj: route.params.goalObj }) }} />
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          fontSize: 14,
        },
        warningText: {
          color: 'red',
        },
      });

export default GoalDetails;