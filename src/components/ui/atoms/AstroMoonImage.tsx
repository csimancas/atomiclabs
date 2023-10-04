import React from 'react';
import {View, Image} from 'react-native';

const astroImg = require('../../../assets/AstroMoon.png');
const AstroMoonImage = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
      }}>
      <Image
        source={astroImg}
        resizeMode="cover"
        style={{
          width: '100%',
        }}
      />
    </View>
  );
};

export default AstroMoonImage;
