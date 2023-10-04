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
import TeamImage from '../atoms/TeamImage';
import OurTeam from '../atoms/OurTeam';

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
          <TeamImage />
          <Button />
          <OurTeam />
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

export default Introduction;
