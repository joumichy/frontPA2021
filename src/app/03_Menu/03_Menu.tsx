import {Button, Text, View} from 'react-native';
import styles from '../../Style/Style';
import React from 'react';
import {useSelector} from 'react-redux';
import {BottomNavigation} from 'react-native-paper';
import Compte from '../04_Compte/04_Compte';
import {GlobalState} from "../../redux";
import Dashboard from "../05_Dashboard/Dashboard";
import Parametre from "../07_Parametre/Parametre";
import {ScreenNames} from "../../utils/Utils";
import User from "../../model/User";

function Menu(props: any) {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: ScreenNames.Compte, title: ScreenNames.Compte, icon: 'account-circle'},
    {key: ScreenNames.Dashboard, title: ScreenNames.Dashboard, icon: 'chart-arc'},
    {key: ScreenNames.Parametre , title: ScreenNames.Parametre, icon: 'cog-outline'},
  ]);

  const renderScene = ({ route, jumpTo } : any) => {
    switch (route.key) {
      case ScreenNames.Compte:
        return <Compte jumpTo={jumpTo} navigation={props.navigation} />;
      case ScreenNames.Dashboard:
        return <Dashboard/>;
      case ScreenNames.Parametre:
        return <Parametre/>;
    }
  }
  const user = useSelector<GlobalState, User|undefined>(state => state.user)

  return (
    <View style={styles.flex}>
      <Text>Bienvenue, {user ? user.email : ""}</Text>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

export default Menu;
