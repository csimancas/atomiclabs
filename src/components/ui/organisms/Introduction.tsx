import React from 'react';

import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Carousel from '../molecules/Carousel';

import KnowMore from '../atoms/KnowMore';
import Button from '../atoms/Button';
import Footer from '../atoms/Footer';
import TextIntroduction from '../atoms/TextIntroduction';
import TextSecondary from '../atoms/TextSecondary';
import AstroImage from '../atoms/AstroImage';

const image = require('../../../assets/background.png');

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Introduction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <TextIntroduction />
          <KnowMore />
          <AstroImage />
          <Button />
          <TextSecondary />
          <Carousel />
          <Footer />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  astro: {
    width: screenWidth,
    height: screenHeight,
  },
  text: {
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
  },
  textOrange: {},
});

export default Introduction;
