import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        textAlign: 'center', 
        borderBottomWidth: 2, 
        borderBottomColor: '#483D8B', 
        marginBottom: 20,
  },
});

export default Input;