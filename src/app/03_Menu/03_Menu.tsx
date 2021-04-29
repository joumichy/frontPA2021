import {Button, Text, View} from 'react-native';
import styles from '../../Style/Style';
import React, {Component} from 'react';
import {connect, useSelector} from 'react-redux';
import {BottomNavigation} from 'react-native-paper';
import Compte from '../04_Compte/04_Compte';
import {GlobalState} from "../../redux";
import User from "../../model/User";
import {retrieveData} from "../../utils/Storage";
import Dashboard from "../05_Dashboard/Dashboard";
//import React, {useState} from 'react';



const ParametreRoute = () => <Text>Parametre</Text>;

//const storedToken = async () => { const res = await retrieveData('token'); console.log("Resultat Token :", res)}

function Menu(props: any) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'compte', title: 'Compte', icon: 'account-circle'},
    {key: 'dashboard', title: 'Dashboard', icon: 'chart-arc'},
    {key: 'parametre', title: 'Parametre', icon: 'cog-outline'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    compte: Compte,
    dashboard: Dashboard,
    parametre: ParametreRoute,
  });
  const user = useSelector<GlobalState>(state => state.user)
  //const userToken = useSelector<GlobalState>(state => state.token)
  // @ts-ignore
  const usernameLoged = user.email || 'User vide';
  //storedToken()

  return (
    <View style={styles.flex}>
      <Text>Bienvenu {usernameLoged}</Text>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

export default Menu;
