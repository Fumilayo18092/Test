import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Authentification from './screens/Authentification';
import Acceuil from './screens/Acceuil';
import Inscription from './screens/Inscription';
import Bookmark from './screens/Bookmark';
import Other from './screens/Other';
import Heart from './screens/Heart';
import Livre from './screens/Livre';
import { Icon } from 'react-native-elements'


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='Authentification' component={Authentification}/>
          <Stack.Screen options={{headerShown: false}} name='Inscription' component={Inscription}/>
          <Stack.Screen options={{headerShown: false}} name='Acceuil' component={DrawerView}/>
          <Stack.Screen options={{headerShown: true, headerTransparent: true}} name='Livre' component={Livre}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


const DrawerView = () =>{
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home"  component={bottomTab} />
    </Drawer.Navigator>
  )
}

const bottomTab =()=>{
  return(
    <Tab.Navigator barStyle={{ backgroundColor: "#FAFAFA"}} activeColor={"#4A97CD"} inactiveColor={"#CCCCCC"}>
      <Tab.Screen name="HomePage" component={Acceuil} options={{
					tabBarIcon: ({color,size,focused}) => (
						<Icon name="home" type="font-awesome" color={focused ? "#4A97CD" : "#7D7D7D"} size={22} />
					)}}/>
      <Tab.Screen name="Bookmark" component={Bookmark}  options={{
					tabBarIcon: ({color,size,focused}) => (
						<Icon name="bookmark" type="font-awesome" color={focused ? "#4A97CD" : "#7D7D7D"} size={22} />
					)}}/>
      <Tab.Screen name="Other" component={Other} options={{
					tabBarIcon: ({color,size,focused}) => (
						<Icon name="columns" type="font-awesome" color={focused ? "#4A97CD" : "#7D7D7D"} size={22} />
					)}}/>
      <Tab.Screen name="Heart" component={Heart}  options={{
					tabBarIcon: ({color,size,focused}) => (
						<Icon name="heart" type="font-awesome" color={focused ? "#4A97CD" : "#7D7D7D"} size={22} />
					)}}/>
    </Tab.Navigator>
  )
}
