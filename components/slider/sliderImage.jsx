import { Colors } from '@/constants';
import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, Animated } from 'react-native';

const SliderImage = ({ images }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        flatListRef.current.scrollToIndex({ animated: true, index: currentIndex + 1 });
        setCurrentIndex(currentIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        setCurrentIndex(0);
      }
    }, 3000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={ item } style={styles.image} />
        )}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setCurrentIndex(newIndex);
        }}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex % images.length ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:250
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius:75,
    borderBottomRightRadius:75
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.vertdeauTran,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: Colors.vertdeau, // Active indicator color
  },
});

export default SliderImage;
