import React from 'react';
import { SafeAreaView, StyleSheet, View, ActivityIndicator, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  const URL = 'http://localhost:3000';
  const URL_LIVE = 'https://turtlify.vercel.app/';
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: URL }}
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0066cc" />
          </View>
        )}
        originWhitelist={['*']}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ffffff'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
