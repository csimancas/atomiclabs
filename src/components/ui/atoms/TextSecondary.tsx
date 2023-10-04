import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const TextSecondary = () => {
  return (
    <Text style={styles.container}>
      <Text>
        <Text style={styles.title}>SOMOS EL BRAZO{'\n'}</Text>
        <Text style={styles.title}>
          DERECHO <Text style={styles.orangeOne}>DE LA</Text>
          {'\n'}
        </Text>
        <Text style={styles.orangeOne}>TECNOLOGÍA</Text>
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
    fontSize: 50,
    color: colors.orange,
    letterSpacing: 7,
  },
});

export default TextSecondary;
