import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import AccueilHeader from '../components/AccueilHeader'
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { ScrollView } from 'react-native';
import { filterCategorie, restaurantsData } from '../categories/categorie';
import { ListItem } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';

export default function Accueil() {

  const [livraison, setLivraison] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0")

  return (
    <ScrollView style={styles.container}>
      <AccueilHeader />

        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-evenly" }}>

          <TouchableOpacity
            onPress={() => {
              setLivraison(true);
            }}
          >
            <View style={{ ...styles.livraisonButton, backgroundColor: livraison ? colors.button : colors.grey4 }}>
              <Text style={styles.livraisonText}>Livraisons</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setLivraison(false);
            }}
          >
            <View style={{ ...styles.livraisonButton, backgroundColor: livraison ? colors.grey4 : colors.button }}>
              <Text style={styles.livraisonText}>Prise en charge</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Catégories</Text>
          </View>

          <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterCategorie}
            keyExtractor={(item) => item.id} 
            extraData={indexCheck}
            renderItem={({ item, index }) => {
              return (
                <Pressable onPress={()=>{setIndexCheck(item.id)}}>
      
                  <View style={indexCheck == item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                    <Image
                      style={{height:60,width:60,borderRadius:30}}
                      source={item.Image} 
                    />

                    <View>
                      <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:
                      {...styles.smallCardText}}>{item.name}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>

        <View style={{ ...styles.livraisonButton, backgroundColor: livraison ? colors.button : colors.grey4 }}>
          <Text style={styles.livraisonText}>Livraison disponible maintenants</Text>
        </View>

        <View>
          <FlatList
           style={{marginTop:10, marginBottom:10}}
           horizontal={true}
           data={restaurantsData}
          />
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  livraisonButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5
  },
  livraisonText: {
    marginLeft: 5,
    fontSize: 16
  },
  headerText:{
    color:colors.grey1,
    fontSize:22,
    fontWeight:"bold",
    paddingLeft:10,
  },
  headerTextView:{
    backgroundColor:colors.grey5,
    marginTop:12,
  },

  smallCard:{
    borderRadius:30,
    backgroundColor:colors.grey5,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    width:80,
    margin:10,
    height:100
  },

  smallCardSelected:{
    borderRadius:30,
    backgroundColor:colors.button,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    width:80,
    margin:10,
    height:100
  },

  smallCardTextSelected:{
    fontSize:20,
    color:colors.cardbackground
  },
  
  smallCardText:{
    fontWeight:"bold",
    color:colors.grey2
  }
});
