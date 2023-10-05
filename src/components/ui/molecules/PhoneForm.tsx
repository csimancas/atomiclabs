import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {colors} from '../../../utils/colors';

import usePhoneData from '../../../hooks/usePhoneData';

import Input from '../atoms/Input';
import OrangeButton from '../atoms/OrangeButton';
import AstroMoonImage from '../atoms/AstroMoonImage';

const {width} = Dimensions.get('window');

const PhoneForm = () => {
  const {phone, setPhone, validatePhone} = usePhoneData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Necesitamos validar tu número para continuar
      </Text>
      <Text style={styles.title}>
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Número de Celular"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>
      <OrangeButton title="Continuar" action={() => validatePhone()} />
      <View
        style={{
          alignItems: 'center',
          marginTop: -70,
        }}>
        <AstroMoonImage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: width * 0.05,
    textAlign: 'left',
    letterSpacing: 2,
    color: colors.white,
    fontWeight: '700',
    marginBottom: width * 0.03,
  },
  inputContainer: {
    marginBottom: width * 0.03,
  },
});

export default PhoneForm;
