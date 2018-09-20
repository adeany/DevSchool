import * as React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

class Map extends React.Component {

    constructor(props: any) {
        super(props);
    }

    markerClicked = (event:any) => {
        console.log('marker was clicked');
    }

    public render() {

        const AppMap = withGoogleMap(props =>
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.756795, lng: -73.954298 }} >
                <Marker position={{ lat: 40.756795, lng: -73.954298 }} onClick={this.markerClicked} />
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