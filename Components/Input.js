import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

const Input = ({inputHandler}, {isModalVisible}, {onCancel}) => {
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
        <Modal animationType="slide" visible ={isModalVisible}>
            <View style={styles.container}>
            <Image
                    style={styles.image}
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}}
                    alt="Image 1"
                />
                <Image
                    style={styles.image}
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}}
                    alt="Image 2"
                />
                <TextInput
                ref={inputRef}
                style={{height: 40}}
                onChangeText={newText => {setText(newText)
                    setIsSubmitted(false)
                }}
                value={text}
                onBlur={() => setIsSubmitted(true)}
                />
                <Text>{text}</Text>
                {isSubmitted && text && <Text>Thank you</Text>}
                <View style={styles.buttonStyle}>
                    <Button title = "Confirm" onPress={handleConfirm} disabled={!text} />
                    <Button title = "Cancel" onPress={() => {onCancel(); setText('');}} />
                </View>
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        padding: 10,
      },
    buttonStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "30%",
        margin:5,
    }
  });

export default Input;