import React from 'react';
import { SafeAreaView} from 'react-native';
import { HomeScreen } from './components/screens';
import { StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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