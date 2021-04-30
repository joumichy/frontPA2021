import {Navigation} from "react-native-navigation";
import {KEY, ScreenNames} from "../utils/Utils";
import {SplashScreen} from "../app/00_SplashScreen/SplashScreen";
import SignIn from "../app/01_SignIn/01_SignIn";
import SignUp from "../app/02_SignUp/02_SignUp";
import Compte from "../app/04_Compte/04_Compte";
import Parametre from "../app/07_Parametre/Parametre";
import Dashboard from "../app/05_Dashboard/Dashboard";
import Menu from "../app/03_Menu/03_Menu";
import QrCode from "../app/06_QrCode/QrCode";
import ReduxHOC from "../component/ReduxHOC";

function RegisterComponents(){

  Navigation.registerComponent(ScreenNames.SplashScreen, () => ReduxHOC(SplashScreen))
  Navigation.registerComponent(ScreenNames.SignUp, () => ReduxHOC(SignUp))
  Navigation.registerComponent(ScreenNames.SignIn, () => ReduxHOC(SignIn))
  Navigation.registerComponent(ScreenNames.Compte, () => ReduxHOC(Compte))
  Navigation.registerComponent(ScreenNames.Parametre, () => ReduxHOC(Parametre))
  Navigation.registerComponent(ScreenNames.Menu, () => ReduxHOC(Menu))
  Navigation.registerComponent(ScreenNames.Dashboard, () => ReduxHOC(Dashboard))
  Navigation.registerComponent(ScreenNames.QrCode, () => ReduxHOC(QrCode))
}

export class Navigator{

  static goTo(name : string){

  }
  static goToTab(name : string){

  }
}
export  {RegisterComponents}