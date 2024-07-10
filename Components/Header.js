import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({name, children}) => {
  console.log(name);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to {name}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkmagenta',
  },
});

export default Header;