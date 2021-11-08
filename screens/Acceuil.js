import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ScrollView, FlatList} from 'react-native';
import { Searchbar,} from 'react-native-paper';
import { Icon } from 'react-native-elements'

const {height, width} = Dimensions.get('window')

const livreRecommander=[
  {
      name: "Robocar Poli",
      img: require('../assets/robocar-poli-a1.png'),
      auteur: 'James Golden',
  },
  {
      name: "Blanche Neige",
      img: require('../assets/71hwf44XvHL1.png'),
      auteur: 'James Golden',
  },
  {
      name: "Le livre de la jungle",
      img: require('../assets/livre.png'),
      auteur: 'James Golden',
  },
]

const maBibliotheque=[
  {
      name: "Harry Potter",
      img: require('../assets/poter.png'),
      auteur: 'James Golden',
      otherImage: require('../assets/97814088556521.png'),
  },
  {
      name: "kung Fu Panda",
      img: require('../assets/panda.png'),
      auteur: 'James Golden',
  },
  {
      name: "La petite fille modèle",
      img: require('../assets/petite.png'),
      auteur: 'James Golden',
  },
]

const Acceuil = props => {
  return(
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', marginVertical: 10,}}>
        <Searchbar
          placeholder="Rechercher"
          style={{width: width * 0.95}}
          onChangeText={{}}
          value={{}}
          clearIcon= {false}
        />
          <View style={styles.card}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 27}}>Bienvenue, Alice</Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight:'700'}}>Qu'as-tu envie de lire?</Text>
          </View>
      </View>
      <View style={{padding: 8}}>
        <View style={{flexDirection:"row", justifyContent: 'space-between'}}>
          <Text>Recommandés pour vous</Text>
          <Icon name="arrow-right" type="feather" size={18}/>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 10}}>
          <FlatList
            horizontal={true}
            data={livreRecommander}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> (
                  <TouchableOpacity onPress={()=> props.navigation.navigate("Livre",item)} style={{width: 105, height: 200,marginHorizontal: 5, borderRadius: 10}}>
                    <View style={{width: 110,height: 150}}>
                        <Image source={item.img} resizeMode={"cover"} style={{width: '100%',height: '100%'}}/>
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{fontSize:12,color: 'grey'}}>{item.auteur}</Text>
                    </View>
                  </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={{padding: 8}}>
        <View style={{flexDirection:"row", justifyContent: 'space-between'}}>
          <Text>Ma Bibliotheque</Text>
          <Icon name="arrow-right" type="feather" size={18}/>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 10}}>
          <FlatList
            horizontal={true}
            data={maBibliotheque}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> (
                  <TouchableOpacity onPress={()=> props.navigation.navigate("Livre",item)} style={{width: 105, height: 200,marginHorizontal: 5, borderRadius: 10}}>
                    <View style={{width: 110,height: 150}}>
                        <Image source={item.img} resizeMode={"cover"} style={{width: '100%',height: '100%'}}/>
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{fontSize:12,color: 'grey'}}>{item.auteur}</Text>
                    </View>
                  </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
        marginVertical: 10,
        width: width * 0.95,
        height: 180,
        elevation: 1,
        backgroundColor: "#4A97CD",
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default Acceuil;
