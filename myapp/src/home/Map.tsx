import * as React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

class Map extends React.Component {

    constructor(props:any) {
        super(props);
    }

    public render() {

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                defaultZoom={8}
            />
        ));

        return (
            <div>
                <GoogleMapExample 
                    containerElement={<div style={{ height: `500px`, width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};

export default Map;