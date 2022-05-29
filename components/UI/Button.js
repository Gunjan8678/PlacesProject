import {Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/styles';

export default function Button({onPress, children}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    marginBottom: 30,
    elevation: 2,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.15,
    shadowColor: 'black',
    shadowRadius: 4,
    borderRadius: 4,
    backgroundColor: Colors.primary800,
  },
  pressed: {opacity: 0.7},
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});
