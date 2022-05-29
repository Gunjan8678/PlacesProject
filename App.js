import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlaces from './screen/AllPlaces';
import AddPlaces from './screen/AddPlaces';
import Camera from './screen/Camera';
import IconButton from './components/UI/IconButton';
import {Colors} from './constants/styles';

const Stack = createNativeStackNavigator();
// const CameraStack = createNativeStackNavigator();

// function MyCameraStack() {
//   return (
//     <CameraStack.Navigator>
//       <CameraStack.Screen name="AddPlaces" component={AddPlaces} />
//       <CameraStack.Screen name="Camera" component={Camera} />
//     </CameraStack.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700},
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlaces')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options={{title: 'Add your Places'}}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{title: 'Camera'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
