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

      <View
        style={{
          paddingHorizontal: 15,
        }}>
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
});

export default PersonalDataForm;
