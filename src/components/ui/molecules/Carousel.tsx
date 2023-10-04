import React, {useRef, useState} from 'react';
import {View, ScrollView, Dimensions, StyleSheet, Animated} from 'react-native';
import ItemCarousel from '../atoms/ItemCarousel';
import {colors} from '../../../utils/colors';

import {CarouselData} from '../../../utils/CarouselData';

const Carousel = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: {nativeEvent: {contentOffset: any}}) => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };

  console.log(CarouselData.length);

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {[0, 1, 2].map(index => (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex ? colors.orange : 'white',
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scroll}>
        {CarouselData.map((item, index) => (
          <View style={styles.slide} key={index}>
            <ItemCarousel item={item} />
          </View>
        ))}
        {/* <View style={styles.slide}>
          <ItemCarousel />
        </View> */}
      </ScrollView>

      {renderDots()}
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: 24,
    color: 'white',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 5,
  },
});

export default Carousel;
