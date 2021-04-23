import {Button, Text, View} from 'react-native';
import styles from '../../Style/Style';
import React, {Component} from 'react';
import {connect, useSelector} from 'react-redux';
import {BottomNavigation} from 'react-native-paper';
import Compte from '../04_Compte/04_Compte';
import {GlobalState} from "../../redux";
import User from "../../model/User";
//import React, {useState} from 'react';

const DashBoardRoute = () => <Text>DashBoard</Text>;

const ParametreRoute = () => <Text>Parametre</Text>;

function Menu(props: any) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'compte', title: '04_Compte', icon: 'account-circle'},
    {key: 'dashboard', title: 'Dashboard', icon: 'chart-arc'},
    {key: 'parametre', title: 'Parametre', icon: 'cog-outline'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    compte: Compte,
    dashboard: DashBoardRoute,
    parametre: ParametreRoute,
  });
  const user = useSelector<GlobalState>(state => state.user)
  const userToken = useSelector<GlobalState>(state => state.token)
  // @ts-ignore
  const usernameLoged = user.username;

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

function mapStateToProps(state: any) {
  return {
    counter: state.counter,
  };
}

//Creer les actions
function mapDispatchToProps(dispatch: any) {
  return {
    incrementeDispatch: () => dispatch({type: 'INCREMENTE'}),
    decrementeDispatch: () => dispatch({type: 'DECREMENTE'}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
