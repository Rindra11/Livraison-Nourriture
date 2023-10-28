import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import RouteNavigation from './src/navigation/RouteNavigation';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RouteNavigation />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
