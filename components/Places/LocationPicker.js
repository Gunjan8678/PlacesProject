import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import OutlinedButton from '../UI/OutlinedButton';
import {Colors} from '../../constants/styles';
import RNLocation from 'react-native-location';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function LocationPicker({onPickLocation}) {
  RNLocation.configure({
    distanceFilter: null,
  });
  // const [info, setInfo] = useState();
  Geolocation.getCurrentPosition(data => setInfo(data.coords.longitude));

  // const permissionHandle = async () => {
  //   console.log('here');

  //   let permission = await RNLocation.checkPermission({
  //     ios: 'whenInUse', // or 'always'
  //     android: {
  //       detail: 'coarse', // or 'fine'
  //     },
  //   });

  //   console.log('here2');
  //   console.log(permission);

  //   permission = await RNLocation.requestPermission({
  //     ios: 'whenInUse',
  //     android: {
  //       detail: 'coarse',
  //       rationale: {
  //         title: 'We need to access your location',
  //         message: 'We use your location to show where you are on the map',
  //         buttonPositive: 'OK',
  //         buttonNegative: 'Cancel',
  //       },
  //     },
  //   });
  //   console.log(permission);
  //   let location;

  //   if (!permission) {
  //     permission = await RNLocation.requestPermission({
  //       ios: 'whenInUse',
  //       android: {
  //         detail: 'coarse',
  //         rationale: {
  //           title: 'We need to access your location',
  //           message: 'We use your location to show where you are on the map',
  //           buttonPositive: 'OK',
  //           buttonNegative: 'Cancel',
  //         },
  //       },
  //     });
  //     console.log(permission);
  //     location = await RNLocation.getLatestLocation({timeout: 100});
  //     console.log(
  //       location,
  //       location.longitude,
  //       location.latitude,
  //       location.timestamp,
  //     );
  //   } else {
  //     console.log('Here 7');
  //     location = await RNLocation.getLatestLocation({timeout: 100});
  //     console.log(
  //       location,
  //       location.longitude,
  //       location.latitude,
  //       location.timestamp,
  //     );
  //   }
  // };

  // function pickOnMapHandler() {
  //   return (
  //     <View style={styles.MainContainer}>
  //       <MapView
  //         style={styles.mapStyle}
  //         showsUserLocation={false}
  //         zoomEnabled={true}
  //         zoomControlEnabled={true}
  //         initialRegion={{
  //           latitude: 28.57966,
  //           longitude: 77.32111,
  //           latitudeDelta: 0.0922,
  //           longitudeDelta: 0.0421,
  //         }}>
  //         <Marker
  //           coordinate={{latitude: 28.57966, longitude: 77.32111}}
  //           title={'JavaTpoint'}
  //           description={'Java Training Institute'}
  //         />
  //       </MapView>
  //     </View>
  //   );
  // }
  return (
    <View>
      <View style={styles.mapPreview}>
        {/* <View style={styles.container}> */}
        {/* <MapView
          style={styles.mapStyle}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.57966,
            longitude: 77.32111,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}> */}
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          region={{
            latitude: 28.57966,
            longitude: 77.32111,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 28.57966, longitude: 77.32111}}
            title={'Dummy Place Pointer'}
            description={'Dummy Place Pointer'}
          />
        </MapView>
        {/* </View> */}
      </View>
      <View style={styles.actions}>
        <OutlinedButton
          icon="location"
          // onPress={permissionHandle}
        >
          Locate User
        </OutlinedButton>
        <OutlinedButton
          icon="map"
          // onPress={pickOnMapHandler}
        >
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
