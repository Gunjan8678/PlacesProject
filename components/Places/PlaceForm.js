import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/styles';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';

function PlaceForm({onPressFunction, data}) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const changeTitleHandler = enteredTitle => {
    setEnteredTitle(enteredTitle);
  };

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  function pickLocationHandler(location) {
    setPickedLocation(location);
  }

  function savePlaceHandler() {}

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
        <ImagePicker onTakeImage={takeImageHandler} data={data} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {flex: 1, padding: 24},
  label: {fontWeight: 'bold', marginBottom: 4, color: Colors.primary500},
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
