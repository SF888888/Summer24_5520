import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';

export default function App() {
  const appName = 'Summer 2024 class';
  const[text, setText] = useState();
  return (
    <View style={styles.container}>
      {/* use a prop to pass appName to Header */}
      <Header name={appName} >
        <Text>Header children</Text>
      </Header>
      <Input/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
