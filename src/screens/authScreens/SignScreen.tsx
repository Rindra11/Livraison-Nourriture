import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import Header from '../../components/Header';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Button, SocialIcon } from 'react-native-elements';

export default function SignScreen({navigation}) {
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Header title="Profil" type="arrow-left" />
      <View>
        <Text style={styles.title}>Sign-in</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.text1}>Please enter your email and password</Text>
        <Text style={styles.text2}>or register with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>

      <View style={styles.textInput}>
        <Animatable.View
          animation={isPasswordFocused ? 'fadeInLeft' : 'fadeInRight'}
          duration={500}
        >
          <SocialIcon
            name="lock"
            SocialMediaType="material"
            iconStyle={{ color: colors.grey3 }}
          />
        </Animatable.View>

        <Animatable.View
          animation={isPasswordFocused ? 'fadeInRight' : 'fadeInLeft'}
          duration={500}
        >
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInLeft" duration={500}>
          <SocialIcon
            name="visibility-off"
            SocialMediaType="material"
            iconStyle={{ color: colors.grey3 }}
          />
        </Animatable.View>
      </View>

      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Button
          title="Connexion"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTitle}
          onPress={()=>{navigation.navigate('Accuei')}}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>
          Mot de passe oublié
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Ou se connecter sur
        </Text>
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <SocialIcon
          title="sign in facebook"
          button type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <SocialIcon
          title="sign in Google"
          button type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
        <Button
          title="Créer un compte"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'fixed',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.button,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  text2: {
    color: colors.grey3,
    fontSize: 16,
  },

  textInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.button,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 10,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
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
