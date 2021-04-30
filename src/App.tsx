import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './app/01_SignIn/01_SignIn';
import SignUp from './app/02_SignUp/02_SignUp';
import Menu from './app/03_Menu/03_Menu';
import {Provider} from 'react-redux';
import Compte from './app/04_Compte/04_Compte';
import store from "./redux";
import {ScreenNames} from "./utils/Utils";
import {SplashScreen} from "./app/00_SplashScreen/SplashScreen";
import QrCode from "./app/06_QrCode/QrCode";
import Dashboard from "./app/05_Dashboard/Dashboard";
import Parametre from "./app/07_Parametre/Parametre";

const Stack = createStackNavigator();

function App () {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ScreenNames.Loader}
              component={SplashScreen}
              options={{title: ScreenNames.Loader}}
            />
            <Stack.Screen name={ScreenNames.SignIn} component={SignIn} />
            <Stack.Screen name={ScreenNames.SignUp}  component={SignUp} />
            <Stack.Screen name={ScreenNames.Menu}  component={Menu} />
            <Stack.Screen name={ScreenNames.Compte}  component={Compte}/>
            <Stack.Screen name={ScreenNames.QrCode}  component={QrCode}/>
            <Stack.Screen name={ScreenNames.Dashboard}  component={Dashboard}/>
            <Stack.Screen name={ScreenNames.Parametre}  component={Parametre}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}

export default App;
