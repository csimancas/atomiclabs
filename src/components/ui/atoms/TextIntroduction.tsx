import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const TextIntroduction = () => {
  return (
    <Text style={styles.container}>
      <Text>
        <Text style={styles.title}>Desarrolla todo{'\n'}</Text>
        <Text style={styles.orangeOne}>tu PONTENCIAL{'\n'}</Text> dentro del
        equipo
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
    marginTop: 20,
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.white,
    //letterSpacing: ,
  },
  title: {
    letterSpacing: 4,
  },
  orangeOne: {
    fontSize: 38,
    color: colors.orange,
  },
  orangeTwo: {
    fontSize: 38,
    color: colors.orange,
    letterSpacing: 7,
  },
});

export default TextIntroduction;
