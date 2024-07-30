import { View, Text } from 'react-native'
import React from 'react'

export default function Login ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {};
    const handleSignup = async () => {
        navigation.navigate('Signup');
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
        <Buttons title="Register" onPress={handleSignup} />
        <Buttons title="Already Registered? Login" onPress={handleSignup} />
      </View>
    );
}
