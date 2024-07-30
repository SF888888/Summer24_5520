import { View, Text, Button, StyleSheet, Alert  } from 'react-native'
import React, {useState} from 'react';
import TextInput from './TextInput';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseSetup';

export default function Login ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email.length){
            Alert.alert('Please enter email address');
            return;
        }
        if (!password.length){
            Alert.alert('Please enter password');
    
            return;
        }
        try{
            const userCred = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCred);
        }
        catch(err){
            console.log(err);
        }
    };
    const handleSignup = async () => {
        navigation.replace('Signup');
    }
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Register" onPress={handleSignup} />
        <Button title="Already Registered? Login" onPress={handleSignup} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
