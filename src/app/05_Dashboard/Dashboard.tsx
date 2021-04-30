import {Linking, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {RNCamera} from "react-native-camera";
import styles from "../../Style/Style";
import QRCodeScanner from "react-native-qrcode-scanner";

function Dashboard() {
  const onSuccess = (e:any) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

export default Dashboard;