import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import OutlinedButton from '../components/UI/OutlinedButton';

export default function Camera({route}) {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log('data', data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() =>
          console.log('moveFile', `from ${filePath} moved to ${newFilePath}`),
        )
        .catch(e => console.log('error inside try', e));
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        style={styles.preview}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}>
        <OutlinedButton icon="camera" onPress={() => captureHandle()}>
          Capture
        </OutlinedButton>
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
