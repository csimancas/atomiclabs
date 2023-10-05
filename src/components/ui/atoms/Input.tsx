import React from 'react';
import {Image, View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const Lock = require('../../../assets/iconLock.png');

interface Props {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
}
const TextInputWithIcon = ({placeholder, value, onChangeText}: Props) => {
  return (
    <>
      <Text style={styles.title}>{placeholder}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        <View style={styles.iconStyle}>
          <Image source={Lock} style={styles.icon} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,

    height: 35,
    borderRadius: 7,
    marginBottom: 10,
  },
  isValid: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 7,
    marginBottom: 10,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
  },
  input: {
    width: '90%',
    borderRadius: 7,
    color: 'black',
    backgroundColor: colors.white,
    height: 35,
    paddingHorizontal: 10,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  iconStyle: {
    backgroundColor: 'gray',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default TextInputWithIcon;
