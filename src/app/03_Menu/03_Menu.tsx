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
import Parametre from "../07_Parametre/Parametre";
import {ScreenNames} from "../../utils/Utils";
//import React, {useState} from 'react';




//const storedToken = async () => { const res = await retrieveData('token'); console.log("Resultat Token :", res)}

function Menu(props: any) {
  const navigation = props.navigation;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: ScreenNames.Compte, title: ScreenNames.Compte, icon: 'account-circle'},
    {key: ScreenNames.Dashboard, title: ScreenNames.Dashboard, icon: 'chart-arc'},
    {key: ScreenNames.Parametre , title: ScreenNames.Parametre, icon: 'cog-outline'},
  ]);
  // const renderScene = BottomNavigation.SceneMap({
  //   compte: Compte,
  //   dashboard: Dashboard,
  //   parametre: Parametre,
  // });

  const renderScene = ({ route, jumpTo } : any) => {
    switch (route.key) {
      case ScreenNames.Compte:
        return <Compte jumpTo={jumpTo} navigation={navigation} />;
      case ScreenNames.Dashboard:
        return <Dashboard/>;
      case ScreenNames.Parametre:
        return <Parametre/>;
    }
  }
  const user = useSelector<GlobalState>(state => state.user)
  //const userToken = useSelector<GlobalState>(state => state.token)
  let usernameLoged : unknown;
  try{
    // @ts-ignore
    usernameLoged = user.email;
  }catch (e){
    usernameLoged = 'UserVide'
  }

  //storedToken()

  return (
    <View style={styles.flex}>
      <Text>Bienvenu {usernameLoged}</Text>
      <Button title="Click" onPress={() => console.log("Result", props)} />
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

export default Menu;
