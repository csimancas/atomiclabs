import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Footer from '../atoms/Footer';
import AstroChair from '../atoms/AstroChair';

import {colors} from '../../../utils/colors';
import SendDataText from '../atoms/SendDataText';

const image = require('../../../assets/background.png');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const FinishPostulation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <SendDataText />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              En breve recibiras un correo de confirmación por parte del equipo
              de AtomicLabs.
            </Text>
            <Text style={styles.title}>
              Recuerda revisar tu bandeja de SPAM{'\n'}
              ¡Esperamos verte pronto!
            </Text>
          </View>
          <AstroChair />
        </ScrollView>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
  textContainer: {
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: 2,
    color: colors.white,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default FinishPostulation;
