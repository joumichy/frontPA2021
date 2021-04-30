import {Button, Text, View} from "react-native";
import React from "react";

function Parametre (){
  return (
    <View>
      <Text>Parametre</Text>
      <Button
        title={'Se déconnecter'}
        onPress={ () => console.log("Deconnexion utilisateur...")}/>
    </View>
  );

}
export default Parametre;
