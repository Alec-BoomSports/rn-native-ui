//
//  NativeMapManager.m
//  rnnativeui
//
//  Created by Alec Meyer on 5/8/21.
//

#import "NativeMapManager.h"

@implementation NativeMapManager

RCT_EXPORT_MODULE(BMNativeMap);
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  MKCoordinateRegion region = [NativeMapManager getRegion:json withDefaultRegion:defaultView.region];
  [view setRegion:region animated:YES];
}

-(UIView *)view
{
  return [[MKMapView alloc] init];
}

+(MKCoordinateRegion) getRegion:(id)json withDefaultRegion:(MKCoordinateRegion)defaultRegion {
  MKCoordinateRegion region = defaultRegion;
  
  if(json) {
    NSDictionary* props = [RCTConvert NSDictionary:json];
    CLLocationDegrees latitude = [RCTConvert double:props[@"latitude"]];
    CLLocationDegrees longitude = [RCTConvert double:props[@"longitude"]];
    CLLocationDistance latitudeDelta = [RCTConvert double:props[@"latitudeDelta"]];
    CLLocationDistance longitudeDelta = [RCTConvert double:props[@"longitudeDelta"]];
    
    CLLocationCoordinate2D coords = CLLocationCoordinate2DMake(latitude, longitude);
    region = MKCoordinateRegionMakeWithDistance(coords, latitudeDelta, longitudeDelta);
  }
  
  return region;
}

@end
