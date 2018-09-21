import * as React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

interface MapProps {
    address: any

}

interface MapState {
    markers: Array<any>,
    center: any,
}

class Map extends React.Component<MapProps, MapState> {

    constructor(props: any) {
        super(props);
        this.props.address
        this.state = {
            center: { lat: 40.756795, lng: -73.954298 },
            // TODO: DUMMY DATA
            markers: [
                { lat: 55.56, lng: -90.78 },
                { lat: 46.67, lng: -80.87 },
                { lat: 40.756795, lng: -73.954298 }
            ],
        }
    }

    componentDidUpdate = () => {
        let existingMarkers = this.state.markers;
        if (existingMarkers.indexOf(this.props.address) < 0) {
            existingMarkers.push(this.props.address);
            this.markerAdded(this.props.address.lat, this.props.address.lng); 
        }
    }

    markerAdded = (lat:any, lng: any) => {
        const existingMarkers = this.state.markers;
        const newMarker = { lat: lat, lng: lng };
        existingMarkers.push(newMarker);
        this.setState({ markers: existingMarkers, center: newMarker});
    }

    // TODO: WHEN MARKER CLICKED, DISPLAY SURVEY
    markerClicked = (event: any) => {
        console.log('marker was clicked');
        // TODO: INVOKE THIS FUNCTION WHEN PLACE ADDED
        // TODO: PUSH REAL LAT AND LNG VALUES
        // this.markerAdded(60, -96);
    }

    public render() {

        const AppMap = withGoogleMap(props =>
            <GoogleMap defaultZoom={8} center={this.state.center} >
                {this.state.markers.map((marker: any) => {
                    return (
                        <Marker position={marker} title="Click to zoom" onClick={this.markerClicked}
                        />
                    )
                })}
            </GoogleMap>
        );

        <AppMap containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

        return (
            <div>
                <AppMap containerElement={<div style={{ height: `500px`, width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />} >
                </AppMap>
            </div>
        );
    }
};

export default Map;