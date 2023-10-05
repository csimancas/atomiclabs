import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const astroImg = require('../../../assets/sitAstro.png');
const AstroImageData = () => {
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
    marginTop: -50,
  },
  image: {
    width: 200,
    height: 400,
  },
});
export default AstroImageData;
