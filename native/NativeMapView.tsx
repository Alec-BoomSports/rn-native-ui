import React from 'react';
import {requireNativeComponent, StyleSheet} from 'react-native';
import {INativeMapView} from '../types/NativeView';

const BMNativeMap = requireNativeComponent<INativeMapView>('BMNativeMap');

interface IProps {
  zoomEnabled: boolean;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export class NativeMapView extends React.Component<IProps, any> {
  render() {
    return (
      <BMNativeMap
        region={this.props.region}
        zoomEnabled={this.props.zoomEnabled}
        style={styles.map}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
