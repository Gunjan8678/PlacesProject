import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PlaceForm from '../components/Places/PlaceForm';

export default function AddPlaces({navigation, imageUri}) {
  return (
    <PlaceForm
      onPressFunction={imageLoc => navigation.navigate('Camera')}
      data={imageUri}
    />
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
