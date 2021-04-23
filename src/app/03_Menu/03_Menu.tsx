import {Button, Text, View} from 'react-native';
import styles from '../../Style/Style';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BottomNavigation} from 'react-native-paper';
import Compte from '../04_Compte/04_Compte';
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
  return (
    <View style={styles.flex}>
      <Text>Menu</Text>
      <Text>{props.counter}</Text>
      <Button title={'Incremente'} onPress={() => props.incrementeDispatch()} />
      <Button title={'Decremente'} onPress={() => props.decrementeDispatch()} />

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
