import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {fallbackPersonImage, image185} from '../utils/utils';
import {theme} from '../theme/theme';

const Cast = ({cast, navigation}) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">
        <Text style={{color: theme.text}}>T</Text>op Cast
      </Text>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {cast.map((person, index) => (
          <TouchableOpacity
            key={index}
            className="mr-4 items-center"
            onPress={() => navigation.push('Person', person)}>
            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
              <Image
                source={{
                  uri: image185(person.profile_path) || fallbackPersonImage,
                }}
                className="rounded-2xl h-24 w-20"
              />
            </View>
            <Text className="text-white text-sm mt-1">
              {person?.character.length > 10
                ? person?.character.slice(0, 10) + '...'
                : person.character}
            </Text>
            <Text className="text-stone-400 text-sm mt-1">
              {person?.name.length > 10
                ? person?.name.slice(0, 10) + '...'
                : person.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cast;
