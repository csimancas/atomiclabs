import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../../utils/colors';

import {useNavigation} from '@react-navigation/native';
import Input from '../atoms/Input';
import OrangeButton from '../atoms/OrangeButton';
import AstroImageData from '../atoms/AstroImageData';

const PersonalDataForm = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Queremos saber que eres tu, porfavor {'\n'} ingresa los siguientes datos
      </Text>

      <View>
        <Input placeholder="Nombre (s)" />
        <Input placeholder="Apellidos" />
      </View>

      <OrangeButton
        title="Enviar"
        action={() => navigation.navigate('ValidatePhone')}
      />

      <AstroImageData />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: 1,
    color: colors.white,
    fontWeight: '700',
    marginBottom: 20,
  },
  buttonContainer: {},
});

export default PersonalDataForm;
