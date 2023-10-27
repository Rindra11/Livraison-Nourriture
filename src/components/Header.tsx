import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function Header({title, onBack}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.headerText}
          size={28}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.button,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
