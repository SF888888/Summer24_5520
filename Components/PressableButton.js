import { Pressable, StyleSheet, View, Text } from 'react-native'
import React from 'react'

const PressableButton = ({children, pressedFunction}) => {
  return (
    <Pressable onPress={pressedFunction}
    style={({pressed})=>{
      return[
        styles.defaultStyle,
        pressed && styles.pressedStyle
      ];
    }}>
    <View>
      {children}
    </View>
    </Pressable>
  )
}

export default PressableButton;

const styles = StyleSheet.create({
  defaultStyle:{
    backgroundColor: 'beige',

  },
  pressedStyle:{
    opacity: 0.5,
    backgroundColor: 'red',
  },
})