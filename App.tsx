import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';
import SignScreen from './src/screens/authScreens/SignScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />

      <SignScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
