import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';

interface Props {
  item: {
    name: string;
    avatar: string;
    position: string;
  };
}

const ItemTeam = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.avatar}} style={styles.image} />

      <View style={styles.personalData}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.position}>{item.position}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  personalData: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  position: {
    fontSize: 16,
    color: colors.white,
  },
});

export default ItemTeam;
