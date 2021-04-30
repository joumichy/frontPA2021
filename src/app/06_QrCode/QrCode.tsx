import {Linking, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import {BarCodeReadEvent, RNCamera} from "react-native-camera";
import styles from "../../Style/Style";
import QRCodeScanner from "react-native-qrcode-scanner";

function QrCode() {

  const onSuccess = (e:BarCodeReadEvent) => {
    
  };

  return (
    <View>
      <Text>QrCode</Text>
      <QRCodeScanner
        onRead={onSuccess}
        vibrate={false}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}<Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

export default QrCode;