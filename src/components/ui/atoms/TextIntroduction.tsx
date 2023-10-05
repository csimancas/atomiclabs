import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const TextIntroduction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    marginTop: 20,
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.white,
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
