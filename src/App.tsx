import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Component
import MainScreen from './app/00_Main/00_Main';
import SignIn from './app/01_SignIn/01_SignIn';
import SignUp from './app/02_SignUp/02_SignUp';
import Menu from './app/03_Menu/03_Menu';
//Styles
import styles from './Style/Style';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Compte from './app/04_Compte/04_Compte';
import store from "./redux";
import {ScreenNames} from "./utils/Utils";

//Balise mère
const Stack = createStackNavigator();


function App (){
  //La balise Greeting détient en propriété l'attribut "name"
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Accueil"
              component={MainScreen}
              options={{title: 'Acceuil'}}
            />
            <Stack.Screen name={ScreenNames.SignIn} component={SignIn} />
            <Stack.Screen name={ScreenNames.SignUp}  component={SignUp} />
            <Stack.Screen name={ScreenNames.Menu}  component={Menu} />
            <Stack.Screen name={ScreenNames.Compte}  component={Compte} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}

export default App;
