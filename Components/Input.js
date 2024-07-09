import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

const Input = () => {
    const[text, setText] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    function handleConfirm(){
        console.log('Submitted:', text);
    }
    const inputRef = useRef(null);
    // Focus the TextInput when the component mounts
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <View>
        <TextInput
        style={{height: 40}}
        onChangeText={newText => {setText(newText)
            setIsSubmitted(false)
        }}
        value={text}
        onBlur={() => setIsSubmitted(true)}
        />
        <Text>{text}</Text>
        {isSubmitted && text && <Text>Thank you</Text>}
        <Button title = "Submit" onPress={() => {handleConfirm();}} />
        </View>
    )
}
export default function Input() {
}