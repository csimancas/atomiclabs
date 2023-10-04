import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const TextIntroduction = () => {
  return (
    <Text style={styles.container}>
      <Text>
        <Text style={styles.title}>Desarrolla todo{'\n'}</Text>
        <Text style={styles.orangeOne}>tu PONTENCIAL</Text> dentro del equipo
        {'\n'}
        <Text style={styles.orangeTwo}>
          ATOMIC<Text style={{color: colors.white}}>LABS</Text>
        </Text>
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: 44,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 2.5,
  },
  title: {
    letterSpacing: 5,
  },
  orangeOne: {
    fontSize: 48,
    color: colors.orange,
  },
  orangeTwo: {
    fontSize: 50,
    color: colors.orange,
    letterSpacing: 7,
  },
});

export default TextIntroduction;
