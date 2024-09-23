import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from '../theme/theme';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import {fetchPersonDetails, fetchPersonMovies} from '../api/theMoviedb';
import {fallbackPersonImage, image342} from '../utils/utils';

let {height, width} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'my-4';

const Person = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [personDetails, setPersonDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [item]);

  const getPersonDetails = async id => {
    const data = await fetchPersonDetails(id);
    if (data) setPersonDetails(data);
    setLoading(false);
  };

  const getPersonMovies = async id => {
    const data = await fetchPersonMovies(id);
    if (data && data.cast) setPersonMovies(data.cast);
    setLoading(false);
  };
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      <SafeAreaView
        className={`z-20 w-full flex-row justify-between items-center px-4 ${verticalMargin}`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="p-1 rounded-xl">
          <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <HeartIcon size="35" color={favorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: 'gray',
              shadowRadius: 40,
              shadowOpacity: 1,
              shadowOffset: {width: 0, height: 5},
              elevation: 10,
            }}>
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500">
              <Image
                source={{
                  uri:
                    image342(personDetails?.profile_path) ||
                    fallbackPersonImage,
                }}
                style={{width: width * 0.74, height: height * 0.43}}
              />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-3xl text-white font-bold text-center">
              {personDetails?.name}
            </Text>
            <Text className="text-base text-center text-neutral-500">
              {personDetails?.place_of_birth}
            </Text>
          </View>
          <View className="rounded-full mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">
                {personDetails.gender === 0
                  ? 'Unset'
                  : personDetails.gender === 1
                  ? 'Female'
                  : 'Male'}
              </Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birtday</Text>
              <Text className="text-neutral-300 text-sm">
                {personDetails?.birthday}
              </Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-3 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">
                {personDetails?.known_for_department}
              </Text>
            </View>
            <View className=" px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">
                {personDetails?.popularity?.toFixed(2)}
              </Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              {personDetails?.biography || 'N/A'}
            </Text>
          </View>

          <MovieList title={'Movies'} hideSeeAll data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
};

export default Person;
