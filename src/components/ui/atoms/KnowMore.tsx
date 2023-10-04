import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const image = require('../../../assets/arrowDown.png');

const KnowMore = () => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <Text style={styles.text}>Quiero saber más</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 5,
    textAlign: 'justify',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  image: {
    width: 55,
    height: 55,
  },
});

export default KnowMore;
