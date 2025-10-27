import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import { HomeScreen } from './components/screens';
import { StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
        <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ffffff'
  }
});