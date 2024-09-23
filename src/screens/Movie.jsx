import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import {styles} from '../theme/theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
} from '../api/theMoviedb';
import {fallbackMoviePoster, image500} from '../utils/utils';

let {height, width} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const mtop = ios ? '' : 'mt-3';

const Movie = () => {
  const [favorite, setFavorite] = useState(false);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const navigation = useNavigation();
  const {params: item} = useRoute();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetails = async id => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };

  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast);
    setLoading(false);
  };
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) setSimilar(data.results);
    setLoading(false);
  };
  return (
    <ScrollView
      contentContainerStyle={{marginBottom: 20}}
      className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView
          className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${mtop}`}>
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
            <Image
              source={{
                uri: image500(movie?.poster_path) || fallbackMoviePoster,
              }}
              style={{width, height: height * 0.55}}
            />
            <LinearGradient
              style={{width, height: height * 0.4}}
              start={{x: 0.5, y: 0}}
              className="absolute bottom-0"
              end={{x: 0.5, y: 1}}
              colors={[
                'transparent',
                'rgba(23, 23, 23, 0.8)',
                'rgba(23, 23, 23, 1)',
              ]}
            />
          </View>
        )}
      </View>

      {loading ? (
        <Loading />
      ) : (
        <View>
          <View style={{marginTop: height * 0.09}} className="space-y-3">
            <Text className="text-white text-center font-bold text-3xl tracking-wider">
              {movie.title}
            </Text>

            {movie?.id && (
              <Text className="text-neutral-400 font-semibold text-base text-center items-center">
                {movie?.status} &bull; {movie?.release_date.split('-')[0]}{' '}
                &bull; &nbsp;
                {movie?.runtime} min
              </Text>
            )}

            <View className="flex-row justify-center mx-4 space-x-2 items-center">
              {movie?.genres?.map(genre => (
                <Text
                  key={genre.id}
                  className="text-neutral-400 font-semibold text-base text-center items-center">
                  &bull; {genre.name}
                </Text>
              ))}
            </View>
            <Text className="text-neutral-400 mx-4 tracking-wide">
              {movie?.overview}
            </Text>
          </View>
          {cast.length > 0 && <Cast navigation={navigation} cast={cast} />}

          {cast.length > 0 && (
            <MovieList title="Similar Movies" hideSeeAll data={similar} />
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Movie;
