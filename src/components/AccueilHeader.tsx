import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon, Badge } from 'react-native-elements';

export default function AccueilHeader() {
    
  return (
    <View style={styles.header}>
      <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
        <Icon
          type='material-community'
          name='menu'
          color={colors.cardbackground}
          size={32}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: colors.cardbackground, fontSize: 25, fontWeight: 'bold' }}>E-Nourriture</Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Badge value={0} status="success">
          <Icon
            type='material-community'
            name='cart'
            size={35}
            color={colors.cardbackground}
          />
        </Badge>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.button,
    height: parameters.headerHeight,
  },
});
