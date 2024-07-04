import { View, Text } from 'react-native'
import React from 'react'

const Header = ({name, children}) => {
  console.log(name);
  return (
    <View>
      <Text>Welcome to {name}</Text>
      {children}
    </View>
  );
};

export default Header;