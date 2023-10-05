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
import AstroImageData from '../atoms/AstroImageData';

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
          <AstroImageData />
        </ScrollView>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default WeWantoToKnowYou;
