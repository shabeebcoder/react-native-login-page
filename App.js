import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './components/screens/Login/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
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
