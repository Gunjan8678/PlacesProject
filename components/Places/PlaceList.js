import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/styles';
import PlaceItem from './PlaceItem';
import PokemonBall from '../UI/PokemonBall';

function PlaceList({places}) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <PokemonBall />
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!{' '}
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      date={places}
      keyExtractor={item => item.id}
      renderItem={item => <PlaceItem place={item} />}
    />
  );
}

export default PlaceList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
