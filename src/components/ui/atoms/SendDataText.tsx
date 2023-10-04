import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const SendDataText = () => {
  return (
    <Text style={styles.container}>
      <Text>TUS DATOS{'\n'}</Text>
      <Text>
        HAN SIDO <Text style={styles.orangeOne}>ENVIADOS{'\n'}</Text>
      </Text>
      <Text style={styles.orangeOne}>CON ÉXITO</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 2.5,
  },
  title: {
    letterSpacing: 5,
  },
  orangeOne: {
    fontSize: 30,
    color: colors.orange,
  },
  orangeTwo: {
    fontSize: 30,
    color: colors.orange,
    letterSpacing: 7,
  },
});

export default SendDataText;
