import { Text, View, Platform, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export const HomeScreen = () =>{
const URL_LIVE:string = 'https://turtlify.vercel.app/';

    return (
      <WebView
            source={{ uri: URL_LIVE }}
            containerStyle={styles.container}
            startInLoadingState
            renderLoading={() => (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0066cc" />
              </View>
            )}
            originWhitelist={['*']}
            style={{ flex: 1 }}
          />
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ffffff'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});