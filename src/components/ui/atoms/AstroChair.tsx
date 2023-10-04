import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const astroImg = require('../../../assets/AstroChair.png');
const AstroChair = () => {
  return (
    <View style={styles.container}>
      <Image source={astroImg} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 200,
    position: 'absolute',
    top: 270,
    left: 100,
  },
  image: {
    width: 350,
    height: 550,
  },
});

export default AstroChair;
