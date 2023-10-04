import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors} from '../../../utils/colors';

const oneCircle = require('../../../assets/OneCircle.png');
const twoGray = require('../../../assets/TwoGray.png');

const MyProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.numbersContainer}>
        <Image source={oneCircle} style={styles.one} />
        <Image source={twoGray} style={styles.two} />
      </View>

      <View style={styles.progressBar}>
        <View style={{...styles.progress, width: `${0.4 * 100}%`}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={oneCircle} style={styles.stepOne} />
        <Text style={styles.containerText}>
          <Text style={styles.title}>TE QUEREMOS</Text>
          <Text style={styles.orangeOne}> CONOCER</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,

    marginTop: 40,

    paddingHorizontal: 10,
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  one: {
    marginLeft: 100,
    height: 30,
    width: 30,
  },
  two: {
    marginRight: 80,
    height: 30,
    width: 30,
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  progress: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  stepOne: {
    height: 40,
    width: 40,
  },
  containerText: {
    paddingTop: 30,
    paddingHorizontal: 15,
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 2.5,
    marginBottom: 20,
    marginLeft: 20,
  },
  title: {
    letterSpacing: 5,
  },
  orangeOne: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.orange,
  },
});

export default MyProgressBar;
