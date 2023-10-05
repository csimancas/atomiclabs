import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../../utils/colors';

import Input from '../atoms/Input';
import OrangeButton from '../atoms/OrangeButton';
import AstroImageData from '../atoms/AstroImageData';
import useUserData from '../../../hooks/useUserData';

const PersonalDataForm = () => {
  const {name, setName, lastName, setLastName, handleSendName} = useUserData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Queremos saber que eres tu, porfavor {'\n'} ingresa los siguientes datos
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Nombre (s)"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Apellidos"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>
      <OrangeButton title="Enviar" action={() => handleSendName()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
  },
  inputContainer: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    letterSpacing: 2,
    color: colors.white,
    fontWeight: '700',
    // marginBottom: 10,
  },
});

export default PersonalDataForm;
