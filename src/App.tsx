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
import QrCode from "./app/06_QrCode/QrCode";
import Dashboard from "./app/05_Dashboard/Dashboard";
import Parametre from "./app/07_Parametre/Parametre";
import {SplashScreen} from "./app/00_SplashScreen/SplashScreen";
import styles from "./Style/Style";
import {Text, View} from "react-native";

const Stack = createStackNavigator();
