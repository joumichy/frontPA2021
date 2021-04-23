import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Component
import HomeScreen from './app/00_Main/00_Main';
import SignIn from './app/01_SignIn/01_SignIn';
import SignUp from './app/02_SignUp/02_SignUp';
import Menu from './app/03_Menu/03_Menu';
//Styles
import styles from './Style/Style';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Compte from './app/04_Compte/04_Compte';

//Balise mère
const Stack = createStackNavigator();
const initialState = {counter: 0};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENTE':
      return {counter: state.counter + 1 };
    case 'DECREMENTE':
      return {counter: state.counter - 1};
    case 'SEND_USER_DATA':
      return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer);
class App extends Component<any, any> {
  //La balise Greeting détient en propriété l'attribut "name"
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Accueil"
              component={HomeScreen}
              options={{title: 'Acceuil'}}
            />
            <Stack.Screen name="Connexion" component={SignIn} />
            <Stack.Screen name="Inscription" component={SignUp} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Compte" component={Compte} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
