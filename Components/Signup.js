import { View, Text } from 'react-native'
import React from 'react'
import TextInput from './TextInput'
import Buttons from './Buttons'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

export default function Signup ({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    return;
  }
  const handleSignup = async () => {
    if (!email.length){
        Alert.alert('Please enter email address');
        return;
    }
    if (!password.length){
        Alert.alert('Please enter password');

        return;
    }
    if (password !== confirmPassword){
        Alert.alert('Passwords do not match');
        return;
    }
    try{
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch(err){
        console.log(err);    
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
      <Text>Confirm Password</Text>
      <TextInput
        placeholder="Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Buttons title="Register" onPress={handleSignup} />
      <Buttons title="Already Registered? Login" onPress={handleLogin} />
    </View>
  );
}
}
