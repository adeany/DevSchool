import * as React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

interface MapProps {

}

interface MapState {
    markers: Array<any>,
}

class Map extends React.Component<MapProps, MapState> {

    constructor(props: any) {
        super(props);

        this.state = {
            markers: [
                { lat: 55.56, lng: -90.78 },
                { lat: 46.67, lng: -80.87 }
            ],
        }
    }

    markerAdded = (lat:any, lng: any) => {
        const existingMarkers = this.state.markers;
        existingMarkers.push({ lat: lat, lng: lng });
        this.setState({ markers: existingMarkers });
    }

    markerClicked = (event: any) => {
        console.log('marker was clicked');
        this.markerAdded(60, -96);
    }

    public render() {

        const AppMap = withGoogleMap(props =>
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.756795, lng: -73.954298 }} >
                {this.state.markers.map((marker: any) => {
                    return (
                        <Marker
                            position={marker}
                            title="Click to zoom"
                            onClick={this.markerClicked}
                        />
                    )
                })}
                {/* <Marker position={{ lat: 40.756795, lng: -73.954298 }} onClick={this.markerClicked} /> */}
            </GoogleMap>
        );

        <AppMap containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

        return (
            <div>
                <AppMap containerElement={<div style={{ height: `500px`, width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />} >
                </AppMap>>
            </div>
        );
    }
};

export default Map;