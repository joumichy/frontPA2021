/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './src/App';
import {retrieveData, STORAGE_KEY_TOKEN} from "./src/utils/Storage";
import {useDispatch} from "react-redux";
import {setToken, setUser} from "./src/redux";


AppRegistry.registerComponent('training', () => App);

//init()