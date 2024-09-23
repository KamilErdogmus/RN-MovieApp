import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import {styles, theme} from '../theme/theme';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185} from '../utils/utils';

let {height, width} = Dimensions.get('window');

const MovieList = ({title, data, hideSeeAll}) => {
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">
          <Text style={{color: theme.text}}>{title.substring(0, 1)}</Text>
          {title.substring(1, 15)}
        </Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', item)}>
              <View className="mr-4 space-y-1">
                <Image
                  source={{
                    uri: item.poster_path
                      ? image185(item.poster_path)
                      : fallbackMoviePoster,
                  }}
                  className="rounded-3xl"
                  style={{width: width * 0.33, height: height * 0.22}}
                />
                <Text className="text-neutral-300 ml-1">
                  {item.title && item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))
        ) : (
          <Text className="text-white">No movies available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default MovieList;
