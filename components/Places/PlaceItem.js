import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/styles';

export default function PlaceItem({place, onSelect}) {
  return (
    <Pressable
      style={({pressed}) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect}>
      <Image style={styles.image} source={{uri: place.imageUri}} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.15,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    flex: 1,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {fontWeight: 'bold', fontSize: 18, color: Colors.gray700},
  address: {fontSize: 12, color: Colors.gray700},
});
