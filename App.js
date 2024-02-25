import React, {Component} from "react";
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"

export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
