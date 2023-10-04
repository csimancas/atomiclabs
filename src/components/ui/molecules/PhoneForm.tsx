import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {colors} from '../../../utils/colors';

import {useNavigation} from '@react-navigation/native';
import Input from '../atoms/Input';
import OrangeButton from '../atoms/OrangeButton';
import AstroMoonImage from '../atoms/AstroMoonImage';

const {width} = Dimensions.get('window');

const PhoneForm = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Necesitamos validar tu número para continuar
      </Text>
      <Text style={styles.title}>
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS
      </Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Número de Celular" />
      </View>
      <OrangeButton
        title="Continuar"
        action={() => navigation.navigate('CompletePostulation')}
      />
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
    marginBottom: width * 0.05,
  },
});

export default PhoneForm;
