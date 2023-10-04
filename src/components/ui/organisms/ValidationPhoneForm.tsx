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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ProgressBar
            step={2}
            progress={1}
            whiteTitle="VALIDA TU"
            orangeTitle="CELULAR"
          />
          <PhoneForm />
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 150, // Ajusta según sea necesario para evitar que el pie de página se superponga
  },
});

export default ValidationPhoneForm;
