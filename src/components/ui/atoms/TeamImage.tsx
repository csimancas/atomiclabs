import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const TeamImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/teamImage.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default TeamImage;
