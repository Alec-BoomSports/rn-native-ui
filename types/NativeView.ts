import {ViewStyle} from 'react-native';

interface IBaseNativeView {
  style: ViewStyle;
}
export interface INativeMapView extends IBaseNativeView {
  zoomEnabled: boolean;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}
