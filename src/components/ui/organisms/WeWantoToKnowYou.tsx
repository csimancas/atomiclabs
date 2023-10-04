import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ProgressBar from '../atoms/ProgressBar';
import PersonalDataForm from '../molecules/PersonalDataForm';

import Footer from '../atoms/Footer';

const image = require('../../../assets/background.png');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const WeWantoToKnowYou = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <ProgressBar
            step={1}
            progress={0.4}
            whiteTitle="TE QUEREMOS"
            orangeTitle="CONOCER"
          />
          <PersonalDataForm />
        </ScrollView>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
});

export default WeWantoToKnowYou;
