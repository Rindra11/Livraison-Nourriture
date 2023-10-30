import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, parameters} from '../../global/styles';
import Swiper from 'react-native-swiper';
import {Image} from 'react-native-animatable';
import {Button} from 'react-native-elements';

export default function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontSize: 26, color: colors.button, fontWeight: 'bold' }}>Découvrir les restaurants</Text>
        <Text style={{ fontSize: 26, color: colors.button, fontWeight: 'bold' }}>Chez nous</Text>
      </View>

      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/images/image1.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={require('../../assets/images/image1.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={require('../../assets/images/image2.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide4}>
            <Image
              source={require('../../assets/images/image2.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="Sign in"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate("SignScreen");
            }}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="Créer un compte"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '218c74',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '218c74',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '218c74',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '218c74',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#218c74',
    height: 42,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#218c74',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
