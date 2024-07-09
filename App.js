import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';

export default function App() {
  const appName = 'Summer 2024 class';
  const[text, setText] = useState();
  function handleInputData(){
    console.log('call back', text);
  }
  return (
    <View style={styles.container}>
      {/* use a prop to pass appName to Header */}
      <Header name={appName} >
        <Text>Header children</Text>
      </Header>
      <Input inputHandler={handleInputData}/>
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
