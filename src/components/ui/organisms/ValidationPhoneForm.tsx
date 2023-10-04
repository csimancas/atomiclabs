import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

import ProgressBar from '../atoms/ProgressBar';
import PhoneForm from '../molecules/PhoneForm';
import Footer from '../atoms/Footer';

const image = require('../../../assets/background.png');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const ValidationPhoneForm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <ProgressBar
            step={2}
            progress={1}
            whiteTitle="VALIDA TU"
            orangeTitle="CELULAR"
          />
          <PhoneForm />
          <Footer />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
});

export default ValidationPhoneForm;
