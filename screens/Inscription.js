import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ScrollView} from 'react-native';

const {height, width} = Dimensions.get('window');

const Inscription =props=>{

    return(
        <ScrollView vertical showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: width*0.9, height: height*0.55, marginVertical: 25}}>
                <Image source={require('../assets/Frame1.png')} resizeMode={"cover"} style={{width: '100%',height: '100%'}}/>
            </View>
            <View style={{flexDirection: 'column',padding: 10}}>
               <Text style={{fontSize:20,fontWeight: 'bold'}}>Inscription</Text>
                <View style={{marginVertical: 15}}>
                    <TextInput placeholder="Votre Nom" style={styles.input}/>
                </View>
                 <View style={{marginVertical: 10}}>
                    <TextInput placeholder="Votre Mots de passe" style={styles.input}/>
                </View>
                <View style={{marginTop:10}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Acceuil')} style={styles.btn}>
                        <Text style={{fontWeight: 'bold',fontSize: 15,color: 'white'}}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 5,marginVertical: 10}}>
                    <Text>Mots de passe de oublié?</Text>
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center',marginVertical: 5,flexDirection: 'row'}}>
                    <Text>Vous aviez un compte ?</Text>
                    <TouchableOpacity onPress={{}}><Text style={{color: '#4A97CD'}}>Connectez-vous</Text></TouchableOpacity>
                </View>
            </View>
          </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: width*0.9,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#DFDFDF',
        padding: 10
    },
    btn:{
        width: width * 0.90,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4A97CD',
        borderRadius: 10
    }
})

export default Inscription;
