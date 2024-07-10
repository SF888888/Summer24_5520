import { View, Text, TextInput, Button, Modal, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

const Input = ({ inputHandler, isModalVisible, onCancel }) => {
    const[text, setText] = useState('');
    const[isSubmitted, setIsSubmitted] = useState(false);
    function handleConfirm(){
        console.log('user typed', text);
        //call the received prop callback fn
        inputHandler(text);
    }
    const inputRef = useRef(null);
    // Focus the TextInput when the component mounts
    useEffect(() => {
        if (isModalVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isModalVisible]);
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
                    source={require('./2617812.png')}
                    alt="Image 2"
                />
                <TextInput
                ref={inputRef}
                style={styles.input}
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
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '20%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        padding: 5,
      },
    buttonStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: "30%",
        margin:15,
    },
    image: {
        width: 100,
        height: 100,
        margin: 25,
    },
  });

export default Input;