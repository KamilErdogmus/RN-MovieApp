import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {useNavigation} from '@react-navigation/native';
import {image500} from './../utils/utils';

let {height, width} = Dimensions.get('window');

const TrendingMovies = ({data}) => {
  const navigation = useNavigation();

  const handleClick = item => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className="mb-4">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        snapEnabled
        autoPlay
        loop
        width={width}
        className="items-center"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        height={500}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={() => handleClick(item)} />
        )}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View className="items-center rounded-lg">
        <Image
          source={{
            uri: image500(item.poster_path),
          }}
          style={{
            width: width * 0.8,
            height: height * 0.52,
            borderRadius: 18,
          }}
        />
        <Text className="text-white">{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
