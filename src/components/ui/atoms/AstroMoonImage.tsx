import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const astroImg = require('../../../assets/AstroMoon.png');
const AstroMoonImage = () => {
  return (
    <View style={styles.container}>
      <Image source={astroImg} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 400,
  },
});

export default AstroMoonImage;
