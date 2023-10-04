import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MyProgressBar from '../atoms/ProgressBar';

import Footer from '../atoms/Footer';

const image = require('../../../assets/background.png');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const WeWantoToKnowYou = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <MyProgressBar />
        {/* <Footer /> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
});

export default WeWantoToKnowYou;
