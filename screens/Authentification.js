import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Authentification = props =>{
  return(
    <View style={styles.container}>
            <View style={{width: width, height: height*0.5,marginTop:60,justifyContent: "center",alignItems: 'center'}}>
                <Image source={require('../assets/Frame.png')} resizeMode={"cover"} style={{width: '100%',height: '100%'}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-around', alignsItems: 'center', marginTop: 120,width: width}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Inscription')} style={{justifyContent: 'center',backgroundColor: 'white',width: 120, height: 40, borderRadius: 10,justifyContent: "center",alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Inscription</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Acceuil')} style={{justifyContent: 'center',backgroundColor: '#4A97CD',borderWidth: 1, borderColor: 'white',width: 120, height: 40, borderRadius: 10,justifyContent: "center",alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold',color: 'white'}}>Connexion</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A97CD',
        justifyContent: "center",
        alignItems: 'center',
    }
})

export default Authentification;
