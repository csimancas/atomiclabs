import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';

interface Props {
  title: string;
  action: () => void;
}

const OrangeButton = ({action, title}: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.container} onPress={action}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    backgroundColor: colors.orange,
    borderRadius: 30,
    width: '60%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default OrangeButton;
