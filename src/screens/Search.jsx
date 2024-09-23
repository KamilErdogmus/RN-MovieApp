import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XMarkIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Loading from '../components/Loading';
import {debounce} from 'lodash';
import {fetchSearchMovies} from '../api/theMoviedb';
import {fallbackMoviePoster, image500} from '../utils/utils';

let {height, width} = Dimensions.get('window');

const Search = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = value => {
    setSearchQuery(value);
    if (value && value.trim().length > 2) {
      setLoading(true);
      fetchSearchMovies({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        setLoading(false);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleDebouncedText = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full mt-3">
        <TextInput
          onChangeText={handleDebouncedText}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="pl-4 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          className="rounded-full p-3 bg-neutral-500"
          onPress={() => navigation.push('Home')}>
          <XMarkIcon color="white" size="25" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 15}}
          className="space-y-3"
          showsVerticalScrollIndicator={false}>
          <Text className="text-white font-semibold ml-1 text-2xl">
            Results ({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push('Movie', item)}>
                <View className="space-y-2 mb-4">
                  <Image
                    style={{width: width * 0.44, height: height * 0.3}}
                    source={{
                      uri: image500(item?.poster_path) || fallbackMoviePoster,
                    }}
                  />
                  <Text className="text-neutral-300 ml-1">
                    {item.title.length > 23
                      ? item.title.slice(0, 23) + '...'
                      : item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : searchQuery.length > 2 && results.length === 0 ? (
        <Text className="text-xl text-white mt-4 text-center">
          No films matching your criteria were found.
        </Text>
      ) : (
        <View className="items-center justify-center">
          <Image
            className="w-[360] h-[360]"
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/young-family-couple-sitting-on-sofa-and-watching-tv-movie-in-living-room-illustration-download-svg-png-gif-file-formats--time-together-cozy-activity-pack-people-illustrations-9405906.png',
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
