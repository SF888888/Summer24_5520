import { View, Text } from 'react-native'
import React from 'react'

const Input = () => {
    const[text, setText] = useState();
  return (
    <View>
      <TextInput
      style={{height: 40}}
      onChangeText={newText => setText(newText)}
      value={text}
    />
    <Text>{text}</Text>
    </View>
  )
}
export default function Input() {
}