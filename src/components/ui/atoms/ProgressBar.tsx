import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors} from '../../../utils/colors';

const oneCircle = require('../../../assets/OneCircle.png');
const twoGray = require('../../../assets/TwoGray.png');
const twoOrange = require('../../../assets/TwoOrange.png');
const checkmark = require('../../../assets/checkmark.png');
const twoOrangeCircle = require('../../../assets/TwoOrangeCircle.png');

interface Props {
  progress: number;
  whiteTitle: string;
  orangeTitle: string;
  step: number;
}
const ProgressBar = ({progress, whiteTitle, orangeTitle, step}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.numbersContainer}>
        <Image source={step === 2 ? checkmark : oneCircle} style={styles.one} />
        <Image source={step === 2 ? twoOrange : twoGray} style={styles.two} />
      </View>

      <View style={styles.progressBar}>
        <View style={{...styles.progress, width: `${progress * 100}%`}} />
      </View>

      <View style={styles.stepContainer}>
        <Image
          source={step === 2 ? twoOrangeCircle : oneCircle}
          style={styles.stepOne}
        />
        <Text style={styles.containerText}>
          <Text>
            {whiteTitle}
            {'\n'}
          </Text>
          <Text style={styles.orangeOne}> {orangeTitle}</Text>
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
  orangeOne: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.orange,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressBar;
