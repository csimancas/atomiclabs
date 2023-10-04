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
import SendDataText from '../atoms/SendDataText';
import {colors} from '../../../utils/colors';

const image = require('../../../assets/background.png');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const FinishPostulation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <SendDataText />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              En breve recibirás un correo de confirmación por parte del equipo
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
    backgroundColor: 'black',
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Ajusta según sea necesario para evitar que el pie de página se superponga
  },
  textContainer: {
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 18, // Ajusta el tamaño de la fuente según el tamaño de la pantalla
    textAlign: 'left',
    letterSpacing: 2,
    color: colors.white,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default FinishPostulation;
