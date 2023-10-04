import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const astro = require('../../../assets/astronauta.png');

const AstroImage = () => {
  return (
    <View style={styles.container}>
      <Image source={astro} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    marginLeft: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 500,
  },
  image: {
    width: 400,
    height: 500,
  },
});

export default AstroImage;
