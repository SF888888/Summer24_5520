import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({ name, children }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to {name}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: { // Added missing headerContainer style
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkmagenta',
    borderWidth: 2,
    borderColor: 'darkmagenta',
    borderRadius: 4,
    padding: 4,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Header;