import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import AccueilHeader from '../components/AccueilHeader'

export default function Accueil() {
  return (
    <View style={styles.container}>
        <AccueilHeader />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})