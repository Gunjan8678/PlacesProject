import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PlaceList from '../components/Places/PlaceList';
import Icon from 'react-native-vector-icons/FontAwesome';
import Maps from './Maps';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function AllPlaces() {
  return <Maps />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
