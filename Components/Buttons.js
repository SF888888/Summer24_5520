import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Buttons = ({ title, onPress, style, textStyle }) => {
  
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
  },
});

export default Buttons;