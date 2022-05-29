import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function Maps() {
  const [info, setInfo] = useState();
  Geolocation.getCurrentPosition(data => setInfo(data.coords.longitude));

  return (
    <View>
      <Text style={{color: '#fff'}}>Latitude and Longitude {info}</Text>
    </View>
  );
}
