import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function PokemonBall() {
  return (
    <View style={styles.screen}>
      <View style={[styles.halfContainer, styles.topContainer]}></View>
      <View style={styles.circularButton}></View>
      <View style={[styles.halfContainer, styles.bottomContainer]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#22d3ee',
  },
  topContainer: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bottomContainer: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  halfContainer: {
    width: 65,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#9f1239',
    margin: 5,
  },
  circularButton: {
    width: 20,
    height: 20,
  },
});
