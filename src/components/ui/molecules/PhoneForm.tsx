import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {colors} from '../../../utils/colors';

import {useNavigation} from '@react-navigation/native';
import Input from '../atoms/Input';
import OrangeButton from '../atoms/OrangeButton';
import AstroMoonImage from '../atoms/AstroMoonImage';

const PhoneForm = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Necesitamos validar tu número para {'\n'} continuar
      </Text>
      <Text style={styles.title}>
        Ingresa tu número a 10 dígitos y te{'\n'} enviaremos un código SMS
      </Text>
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Input placeholder="Número de Celular" />
      </View>
      <OrangeButton title="Continuar" action={() => console.log('gola')} />
      <AstroMoonImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    letterSpacing: 2,
    color: colors.white,
    fontWeight: '700',
    marginBottom: 10,
  },
  buttonContainer: {},
});

export default PhoneForm;
