import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ScrollView, FlatList} from 'react-native';
import { Searchbar,} from 'react-native-paper';
import { Icon } from 'react-native-elements'

const {height, width} = Dimensions.get('window')


const Livre = ({route}) => {
  const {name, otherImage, auteur} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{width: width,height: height*0.6, marginVertical: 15}}>
          <Image source={otherImage} resizeMode={"cover"} style={{width: '100%',height: '100%', borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>{name}</Text>
          <Text style={{color:'#CDC4C4'}}>{auteur}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-evenly', alignsItems: 'center', marginTop: 15,width: width}}>
          <TouchableOpacity style={{justifyContent: 'center',backgroundColor: '#E7E6E6',width: 90, height: 40, borderRadius: 10,justifyContent: "center",alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>Suspense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center',backgroundColor: '#E7E6E6',borderWidth: 1, borderColor: 'white',width: 90, height: 40, borderRadius: 10,justifyContent: "center",alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Action</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center',backgroundColor: '#E7E6E6',borderWidth: 1, borderColor: 'white',width: 90, height: 40, borderRadius: 10,justifyContent: "center",alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Fantaisiste</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
          <Text>Harry Potter n'a jamais fait de sport en volant sur un balai. Il n'a jamais porté de cape d'invisibilité, ne s'est jamais lié d'amitié avec un demi-géant et n'a jamais aidé à faire éclore un dragon. Tout ce que Harry connaît, c'est une vie misérable avec les Dursley : son oncle et sa tante horribles et leur abominable fils, Dudley...</Text>
        </View>
        <View style={{alignItems:'center', marginVertical: 5}}>
          <TouchableOpacity style={{justifyContent: 'center',backgroundColor: '#4A97CD', width: 140, height: 40, borderRadius: 10,justifyContent: "center",alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Lire Plus</Text>
          </TouchableOpacity>
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
})
export default Livre;
