import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const linkedin = require('../../../assets/linkedin.png');
const twitter = require('../../../assets/twitter.png');

const {height, width} = Dimensions.get('window');

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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: '8%', // Ajustar el espacio entre el texto y los iconos sociales
  },
  text: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: width * 0.03,
  },
  textDecoration: {
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 12,
  },
  image: {
    width: width * 0.04,
    height: width * 0.04,
    marginTop: height * 0.01,
    marginBottom: height * 0.04,
  },
  socialIconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: height * 0.02,
    width: width * 0.3,
  },
});

export default Footer;
