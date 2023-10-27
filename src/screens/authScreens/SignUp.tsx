import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../global/styles';

export default function SignUp() {
  return (
    <View style={{flex:1}}>

        <View style={{flex:3, justifyContent:'flex-start', alignItems:'center',paddingTop:20}}>
            <Text style={{fontSize:26,color:colors.button,fontWeight:'bold'}}>Découvrer les restaurants</Text>
            <Text style={{fontSize:26,color:colors.button,fontWeight:'bold'}}>Chez nous</Text>
        </View>
        
        <View style={{flex:4, justifyContent:"center"}}>

        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({

    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '218c74',
    },
    slide2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '218c74',
    },
    slide2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '218c74',
    },
})