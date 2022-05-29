import {Text, Button, View, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/styles';
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker({onTakeImage}) {
  const [pickedImage, setPickedImage] = useState();
  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    setPickedImage(data.uri);
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }
  function capturedImageHandler(image) {
    console.log('image here', image);
    setPickedImage(image.uri);
    onTakeImage(image.uri);
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={capturedImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
