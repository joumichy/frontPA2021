import {Button, Text, View} from 'react-native';
import React from 'react';
import styles from '../../Style/Style';

function HomeScreen({navigation}: any) {
  return (
    <View style={styles.center2}>
      <Text>Home Screen</Text>
      <Button
        title="Se Connecter"
        onPress={() => navigation.navigate('Connexion')}
      />
      <Button
        title="S'inscrire"
        onPress={() => navigation.navigate('Inscription')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
