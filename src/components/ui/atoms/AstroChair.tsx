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
    marginTop: -120,
  },
  image: {
    width: '90%',
    height: '90%',
  },
});

export default AstroChair;
