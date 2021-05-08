import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeMapView} from './native/NativeMapView';

export const App: React.FC<any> = () => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);

  return (
    <>
      <NativeMapView
        region={{
          latitude: 26.122438,
          longitude: -80.137314,
          latitudeDelta: 1000,
          longitudeDelta: 10000,
        }}
        zoomEnabled={isZoomEnabled}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          right: 10,
          padding: 20,
          backgroundColor: 'steelblue',
          borderRadius: 8,
        }}
        onPress={() => {
          setIsZoomEnabled(v => !v);
          console.log(isZoomEnabled);
        }}>
        <Text style={{color: '#fff'}}>
          {isZoomEnabled ? 'Zoom Enabled' : 'Zoom Disabled'}
        </Text>
      </TouchableOpacity>
    </>
  );
};
