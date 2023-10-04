import React from 'react';
import {View, Image} from 'react-native';

const astroImg = require('../../../assets/sitAstro.png');
const AstroImageData = () => {
  return (
    <View>
      <Image source={astroImg} resizeMode="contain" />
    </View>
  );
};

export default AstroImageData;
