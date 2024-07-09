import { View, Text, TextInput, Button, Modal } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

const Input = ({inputHandler}, {isModalVisible}) => {
    const[text, setText] = useState('');
    const[isSubmitted, setIsSubmitted] = useState(false);
    function handleConfirm(){
        console.log('user typed', text);
        //cal the received prop callback fn
        inputHandler(text);
    }
    const inputRef = useRef(null);
    // Focus the TextInput when the component mounts
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <Modal animationType="slide" visiblility={isModalVisible}>
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
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Input;