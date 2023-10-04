import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
const linkedin = require('../../../assets/linkedin.png');
const twitter = require('../../../assets/twitter.png');

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        2020 AtomicLabs. Todos los derechos reservados
      </Text>
      <Text style={styles.textDecoration}>Aviso de privacidad</Text>
      <View style={styles.socialIconsView}>
        <Image source={linkedin} resizeMode="cover" style={styles.image} />
        <Image source={twitter} resizeMode="cover" style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    backgroundColor: '#000',
    alignItems: 'center',

    bottom: 0,
  },
  text: {
    color: 'white',
    fontSize: 14,
    padding: 15,
  },
  textDecoration: {
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 14,
  },
  image: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  socialIconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: 100,
  },
});

export default Footer;
