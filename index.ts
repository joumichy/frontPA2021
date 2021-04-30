/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import {AppRegistry} from 'react-native';
import {SplashScreen} from "./src/app/00_SplashScreen/SplashScreen";
import {KEY, ScreenNames} from "./src/utils/Utils";
import {Provider} from "react-redux";
import ReduxHOC from "./src/component/ReduxHOC";
import {RegisterComponents} from "./src/navigation/Navigation";


// AppRegistry.registerComponent('training', () => App);**
RegisterComponents()
Navigation.events().registerAppLaunchedListener(() => {
     Navigation.setRoot({
         root: {
          stack: {
              children: [
                   {
                     component: {
                       name: ScreenNames.SplashScreen
                     }
                }
               ]
    }
         }
   });
  });
