import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../../utils/colors';

interface Props {
  item: {
    title: string;
    img: any;
    dots: Array<string>;
  };
}

const ItemCarousel = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View>
        {item.dots.map((dot, index) => (
          <View key={index} style={styles.containerDots}>
            <View style={styles.dot} />
            <Text style={styles.textDots}>{dot}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: colors.secondOrange,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  containerDots: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  textDots: {
    textAlign: 'left',
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default ItemCarousel;
